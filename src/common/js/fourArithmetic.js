/**
 * 加法
 *
 * @param {Number} arg1 
 * @param {Number} arg2 
 */
function addition(arg1, arg2) {
  let integer;
  let decimals;
  // 获取整数部分
  try {
    integer = arg1.toString().split(".")[1].length
  } catch (e) {
    integer = 0
  }
  // 获取小数数部分
  try {
    decimals = arg2.toString().split(".")[1].length
  } catch (e) {
    decimals = 0
  }
  const m = Math.pow(10, Math.max(integer, decimals))
  return ((arg1 * m) + (arg2 * m)) / m
}
/**
 * 减法
 * @param {Number} arg1
 * @param {Number} arg2
 */
function subtraction(arg1, arg2) {
  let r1;
  let r2;
  try {
    r1 = arg1.toString().split(".")[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = arg2.toString().split(".")[1].length
  } catch (e) {
    r2 = 0
  }
  const m = Math.pow(10, Math.max(r1, r2));
  const n = (r1 >= r2) ? r1 : r2;
  return (((arg1 * m) - (arg2 * m)) / m).toFixed(n);
}
/**
 * 乘法
 *
 * @param {Number} arg1 
 * @param {Number} arg2 
 */
function multiplication(arg1, arg2) {
  let m = 0;
  let s1 = arg1.toString();
  let s2 = arg2.toString();
  try {
    m += s1.split(".")[1].length
  } catch (e) {}
  try {
    m += s2.split(".")[1].length
  } catch (e) {}
  return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
}
/**
 * 除法
 *
 * @param {Number} arg1 
 * @param {Number} arg2 
 */
function division(arg1, arg2) {
  let t1 = 0;
  let t2 = 0;
  try {
    t1 = arg1.toString().split(".")[1].length
  } catch (e) {}
  try {
    t2 = arg2.toString().split(".")[1].length
  } catch (e) {}
  const r1 = Number(arg1.toString().replace(".", ""))
  const r2 = Number(arg2.toString().replace(".", ""))
  return multiplication((r1 / r2), Math.pow(10, t2 - t1));
}