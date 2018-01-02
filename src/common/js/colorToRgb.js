/*
 * @Author: 张浩然
 * @Date: 2018-01-02 15:14:36
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-01-02 15:22:55
 */
/**
 * 十六进制转rgb颜色值
 *
 * @param {String} param
 * @returns
 */
function colorRgb(param) {
  let sColor = param.toLowerCase()
  //十六进制颜色值的正则表达式
  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  // 如果是16进制颜色
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      let sColorNew = "#";
      for (let i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    //处理六位的颜色值
    let sColorChange = []; // eslint-disable-line
    for (let i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt(`0x${sColor.slice(i, i + 2)}`)); // eslint-disable-line
    }
    return sColorChange.join(",");
  }
  return sColor;
};

export default colorRgb