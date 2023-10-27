import {
  // AmbientLight,
  DirectionalLight,
  HemisphereLight
} from "three";

function createLights() {
  // 环境光 通常 环境光 的光照强度会低于 平行光的光照强度
  // const ambientLight = new AmbientLight("white", 2);

  const ambientLight = new HemisphereLight(
    "white", // 明亮的天空颜色
    "darkslategrey", // 暗淡的底色
    3 // 光照强度
  );

  // 平行光
  const mainLight = new DirectionalLight("white", 2);

  // 设置光照位置 灯光从(10,10,10)照向(0,0,0)。
  mainLight.position.set(10, 10, 10);

  return { ambientLight, mainLight };
}

export { createLights };

/**
 * 在threeJs 中 创建高质量的照明就是选择各种灯光进行组合使用，来创造完整的照明设置.
 * 在 threeJs 中 灯光分为两类；
 * 1、直接光照，模拟直接光照（太阳光，平行光）
 * 2、环境光，在 threeJs 中这是廉价且可信的间接方式.
 *
 * DirectionalLight照亮我们的场景是直接照明的一种形式.
 */

/**
 * @description 照明简要概括
 * 1、多个直射灯, 可以直接在场景中添加多个直射灯源，从场景的各个方向添加，可以解决光照问题。
 * 缺点：必须个跟踪灯光以确保所有方向都被照亮、灯光很昂贵，最好在场景中尽可能的少添加灯光
 *
 * 2、不使用灯光，仅使用合理的纹理
 *
 * 3、基于图像的照明,
 *
 * 4、环境照明(快速渐变解决方案), 在 threeJs 中有两种环境光可以使用
 * AmbientLight 从各个方向向每个对象添加恒定数量的光
 * HemisphereLight 天空颜色与地面颜色之间的渐变，可以用于模拟许多常见的照明场景
 */
