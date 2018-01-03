<template>
  <div id="helloword">
    <p>{{num}}</p>   
  </div>
</template>

<script type="es6">
import {
  addition,
  subtraction,
  multiplication,
  division
} from "../common/js/fourArithmetic";

export default {
  data() {
    return {
      msg: "你好嘻嘻",
      arg1: 0.1,
      arg2: 0.2
    };
  },
  computed: {
    num() {
      return subtraction(this.arg1, this.arg2);
    }
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

