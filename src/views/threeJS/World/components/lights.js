import { DirectionalLight } from "three";
function createLights() {
  const light = new DirectionalLight("white", 8);

  // 设置光照位置 灯光从(10,10,10)照向(0,0,0)。
  light.position.set(10, 10, 10);

  return light;
}

export { createLights };
