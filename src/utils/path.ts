import { resolve } from "node:path";
/**
 * @description 获取绝对路径
 * @param { string } pathName
 */
export const getPath = (pathName: string) => resolve(process.cwd(), ".", pathName);
