<template>
  <div id="helloword">
    <p>{{msg}}</p>   
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "你好嘻嘻"
    };
  }
};
</script>

<style lang="less" scoped>
#helloword {
  width: 100vw;
  p {
    margin-top: 100px;
    text-align: center;
  }
}
</style>

