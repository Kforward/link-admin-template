import { MeshStandardMaterial } from "three";

function createMaterial() {
  const body = new MeshStandardMaterial({
    color: "firebrick",
    // 定义材质是否使用平面着色进行渲染
    flatShading: true
  });

  const detail = new MeshStandardMaterial({
    color: "darkslategray",
    flatShading: true
  });

  return { body, detail };
}

export { createMaterial };
