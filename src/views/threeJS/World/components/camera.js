import { PerspectiveCamera } from "three";

// 在 threeJS 中默认一个单位是 1米

function createCamera() {
  const camera = new PerspectiveCamera(
    35, // 视野
    1, // 纵横比 先设置为 1 ，通过 Resizer系统 推迟设置纵横比
    0.1, // 近剪切平面 距离相机不到十厘米的物体将不可见
    100 // 远剪切平面 可以看到一百米的距离
  );

  // 因为每一个物体在笛卡尔3D坐标系中初始化位置都是在(0,0,0)
  // 所以，将摄像机向后移动，以便我们可以查看场景；
  camera.position.set(0, 0, 10);

  // 也可以单独设置各个方向的值 与上方设置位置的方法结果一致，他们都会存储在 三维向量中 <Vector3>
  // camera.position.x = 0;
  // camera.position.y = 0;
  // camera.position.z = 10;

  return camera;
}

export { createCamera };
