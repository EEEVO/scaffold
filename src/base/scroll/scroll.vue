<template>
    <div ref="wrapper">
        <slot></slot>
    </div>
</template>

<script type="text/ecmascript-6">
import BScroll from "better-scroll";

export default {
  props: {
    probeType: {
      type: Number,
      default: 3
    },
    click: {
      type: Boolean,
      default: true
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    data: {
      // type: Array,
      // default: null
    },
    pullDown: {
      type: Boolean,
      default: false
    },
    pullup: {
      type: Boolean,
      default: false
    },
    beforeScroll: {
      type: Boolean,
      default: false
    },
    refreshDelay: {
      type: Number,
      default: 20
    },
    swipeBounceTime: {
      type: Number,
      default: 800
    },
    momentumLimitTime: {
      type: Number,
      default: 200
    },
    bounceTime: {
      type: Number,
      default: 600
    },
    startY: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    setTimeout(() => {
      this._initScroll();
    }, 20);
  },
  methods: {
    _initScroll() {
      if (!this.$refs.wrapper) {
        return;
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click,
        swipeBounceTime: this.swipeBounceTime,
        bounceTime: this.bounceTime,
        momentumLimitTime: this.momentumLimitTime,
        scrollY: true,
        scrollX: true,
        startY: this.startY
      });

      // @scroll上拉事件
      if (this.listenScroll) {
        let me = this;
        this.scroll.on("scroll", pos => {
          me.$emit("scroll", pos);
        });
      }

      // @scrollToEnd上拉加载事件
      if (this.pullup) {
        this.scroll.on("scrollEnd", () => {
          if (
            this.scroll.y <= this.scroll.maxScrollY + 50 &&
            this.scroll.y !== 0
          ) {
            this.$emit("scrollToEnd");
          }
        });
      }

      // 下拉刷新
      if (this.pullDown) {
        this.scroll.on("touchEnd", () => {
          // 此处得计算处理
          if (this.scroll.y > 50 && this.scroll.y !== 0) {
            this.$emit("touchEnd");
          }
        });
      }

      if (this.beforeScroll) {
        this.scroll.on("beforeScrollStart", () => {
          this.$emit("beforeScroll");
        });
      }
    },
    disable() {
      this.scroll && this.scroll.disable();
    },
    enable() {
      this.scroll && this.scroll.enable();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    scrollTo() {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
    },
    scrollToElement() {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
    }
  },
  watch: {
    data() {
      setTimeout(() => {
        this.refresh();
      }, this.refreshDelay);
    }
  }
};
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
