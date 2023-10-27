import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);

  // 设置阻尼效果 使物体具有物理效果
  controls.enableDamping = true;
  // 启用控制器自动旋转 -- 需要每侦都渲染
  controls.autoRotate = true;
  // 旋转速度
  controls.autoRotateSpeed = 1;

  // 限制缩放 - 需要确保 minDistance 不小于 相机的近剪裁平面且 maxDistance 不大于 相机的远剪裁平面
  // controls.minDistance = 5;
  // controls.maxDistance = 20;

  // 限制旋转 - 水平方向 (使用弧度指定)
  // controls.minAzimuthAngle = -Infinity;
  // controls.maxAzimuthAngle = Infinity;

  // 限制旋转 - 垂直方向 (使用弧度指定)
  // controls.minPolarAngle = 0;
  // controls.maxPolarAngle = Math.PI;

  controls.tick = () => controls.update();

  return controls;
}

export { createControls };
