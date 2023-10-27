import { AxesHelper, GridHelper } from "three";

// 创建坐标辅助线
function createAxesHelper() {
  const helper = new AxesHelper();

  helper.position.set(-3.5, 0, -3.5);

  return helper;
}

// 创建网格辅助线
function createGridHelper() {
  const helper = new GridHelper();

  return helper;
}

export { createAxesHelper, createGridHelper };
