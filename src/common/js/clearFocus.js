/*
 * @Author: 张浩然
 * @Date: 2018-01-02 14:38:34
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-01-02 15:11:57
 * @fileoverview: 实现了清楚全局焦点的方法
 *                注意事项清楚焦点的对象都是原生input或者textarea，所以自定义类似的input标签无法使用
 */

/**
 *  清除全局的input焦点
 */
function clearFocus() {
  const inputObj = [...document.querySelectorAll('input')];
  const textareaObj = [...document.querySelectorAll('textarea')];
  for (let index = 0, arrlength = inputObj.length; index < arrlength; index++) {
    const element = inputObj[index];
    element.blur()
  }
  for (let index = 0, arrlength = textareaObj.length; index < arrlength; index++) {
    const element = textareaObj[index];
    element.blur()
  }
}

export default clearFocus;