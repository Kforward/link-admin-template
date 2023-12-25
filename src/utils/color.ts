import { ElMessage } from "element-plus";

/**
 * @description 变浅颜色值
 * @param {String} color 颜色值字符串
 * @param {Number} level 加深的程度，[0-1]
 * @return {String} 返回处理后的颜色
 */
export function getLightColor(color: string, level: number) {
  let reg = /^#?[0-9A-Fa-f]{6}$/;
  if (!reg.test(color)) {
    return ElMessage.warning("输入错误的hex颜色值");
  }
  let rgb = hexToRGB(color);
  for (let i = 0; i < 3; i++) {
    rgb[i] = Math.round(255 * level + rgb[i] * (1 - level));
  }

  return rgbToHex(rgb[0], rgb[1], rgb[2]);
}

/**
 * @description 加深颜色值
 * @param {String} color 颜色值字符串
 * @param {Number} level 加深程度，[0-1]
 * @return {String} 返回处理后的颜色值
 */
export function getDarkColor(color: string, level: number) {
  let reg = /^#?[0-9A-Fa-f]{6}$/;
  if (!reg.test(color)) {
    return ElMessage.warning("输入错误的hex值");
  }

  let rgb = hexToRGB(color);
  for (let i = 0; i < 3; i++) {
    rgb[i] = Math.round(20.5 * level + rgb[i] * (1 - level));
  }

  return rgbToHex(rgb[0], rgb[1], rgb[2]);
}

/**
 * @description hex 转 rgb
 * @param {String} str 颜色值 字符串
 * @return {String} 返回处理后的颜色值
 */
export function hexToRGB(str: string) {
  let hexs: any = "";
  let reg = /^#?[0-9A-Fa-f]{6}$/;
  if (!reg.test(str)) {
    return ElMessage.warning("输入错误的hex");
  }
  str = str.replace("#", "");
  hexs = str.match(/../g);
  for (let i = 0; i < 3; i++) {
    hexs[i] = parseInt(hexs[i], 16);
  }
  return hexs;
}

/**
 * @description rgbToHex
 * @param {*} r 红色
 * @param {*} g 绿色
 * @param {*} b 蓝色
 * @return {string} 返回处理后的颜色值
 */
export function rgbToHex(r: any, g: any, b: any) {
  let reg = /^\d{1,3}$/;
  if (!reg.test(r) || !reg.test(g) || !reg.test(b)) {
    return ElMessage.warning("输入错误的rgb颜色值");
  }
  let hexs = [r.toString(16), g.toString(16), b.toString(16)];
  for (let i = 0; i < 3; i++) {
    if (hexs[i].length === 1) {
      hexs[i] = `0${hexs[i]}`;
    }
  }
  return `#${hexs.join("")}`;
}
