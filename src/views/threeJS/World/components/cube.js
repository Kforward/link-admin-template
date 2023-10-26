import { BoxGeometry, Mesh, MeshStandardMaterial, MathUtils, TextureLoader } from "three";

function createCube() {
  // 创建几何体 与材质贴图
  const geometry = new BoxGeometry(2, 2, 2);
  const material = createMaterial();

  // 创建网格 (包含几何体与材质的网格)
  const cubeMesh = new Mesh(geometry, material);

  // 旋转网格对象
  cubeMesh.rotation.set(-0.5, -0.1, 0.8);

  // 将度数 转为 弧度
  const radiansPerSecond = MathUtils.degToRad(30);

  // 为 cube 添加动画，该方法每侦调用一次，所以方法内尽量简单无复杂操作
  cubeMesh.tick = delta => {
    // 每侦增加立方体的旋转
    cubeMesh.rotation.x += radiansPerSecond * delta;
    cubeMesh.rotation.y += radiansPerSecond * delta;
    cubeMesh.rotation.z += radiansPerSecond * delta;
  };

  return cubeMesh;
}

// 创建材质
function createMaterial() {
  // 加载纹理
  const textureLoader = new TextureLoader();
  const texture = textureLoader.load("/textures/uv-test-bw.png");

  // 创建材质 默认白色基础材质
  // const material = new MeshBasicMaterial();
  // 将 MeshBasicMaterial 材质 切换至 MeshStandardMaterial
  // const material = new MeshStandardMaterial({
  //   color: 'purple',
  // });

  // 创建材质，并贴图 在此处，color 如果与贴图 texture 同时存在，那么贴图材料会被color 影响 当color 的颜色是具有一定透明度的黑色时候，可以改变材质的明暗程度
  const material = new MeshStandardMaterial({
    // color: 'purple',
    map: texture
  });

  // or
  // material.map = texture;

  return material;
}

export { createCube };
