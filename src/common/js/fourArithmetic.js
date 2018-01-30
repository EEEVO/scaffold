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
  const m = 10 ** Math.max(integer, decimals)
  return ((arg1 * m) + (arg2 * m)) / m
}
/**
 * 减法
 * @param {Number} arg1
 * @param {Number} arg2
 */
function subtraction(arg1, arg2) {
  let integer;
  let decimals;
  try {
    integer = arg1.toString().split(".")[1].length
  } catch (e) {
    integer = 0
  }
  try {
    decimals = arg2.toString().split(".")[1].length
  } catch (e) {
    decimals = 0
  }
  const m = 10 ** Math.max(integer, decimals)
  const n = (integer >= decimals) ? integer : decimals;
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
  const s1 = arg1.toString();
  const s2 = arg2.toString();
  try {
    m += s1.split(".")[1].length
  } catch (e) {
    m = 0
  }
  try {
    m += s2.split(".")[1].length
  } catch (e) {
    m = 0
  }
  const res1 = Number(s1.replace(".", ""))
  const res2 = Number(s2.replace(".", ""))
  return (res1 * res2) / (10 ** m)
}

/**
 * 除法
 * @param {Number} arg1
 * @param {Number} arg2
 * @returns
 */
function division(arg1, arg2) {
  let t1 = 0;
  let t2 = 0;
  try {
    t1 = arg1.toString().split(".")[1].length
  } catch (e) {
    t1 = 0
  }
  try {
    t2 = arg2.toString().split(".")[1].length
  } catch (e) {
    t2 = 0
  }
  const r1 = Number(arg1.toString().replace(".", ""))
  const r2 = Number(arg2.toString().replace(".", ""))
  return multiplication((r1 / r2), 10 ** (t2 - t1));
}

export { addition, subtraction, multiplication, division }