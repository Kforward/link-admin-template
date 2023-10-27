import { SphereGeometry, Group, MathUtils, Mesh, MeshStandardMaterial } from "three";

function createMeshGroup() {
  // 创建一个不可见的可以包含其他对象的组
  const group = new Group();

  // 创建圆形几何球体
  const geometry = new SphereGeometry(0.25, 16, 16);

  // 为创建材质
  const material = new MeshStandardMaterial({
    color: "indigo"
  });

  // 创建圆形球体
  const protoShape = new Mesh(geometry, material);

  // 添加球体至组中
  group.add(protoShape);

  // 克隆20个球体，并添加进组中
  for (let i = 0; i < 1; i += 0.05) {
    const shape = protoShape.clone();

    // 使用三角函数 将克隆的圆分布在原始圆的一周
    shape.position.x = Math.cos(2 * Math.PI * i);
    shape.position.y = Math.sin(2 * Math.PI * i);

    // 将球体从小缩放至大
    shape.scale.multiplyScalar(0.01 + i);

    group.add(shape);
  }

  // 将组整体扩大 指定的倍数 multiplyScalar 将一个向量的 x,y,z分量乘以一个数
  group.scale.multiplyScalar(2);

  // 使原始圆周围的球体围绕 z 轴旋转
  const radiansPerSecond = MathUtils.degToRad(30);
  group.tick = delta => {
    group.rotation.z -= delta * radiansPerSecond;
  };

  return group;
}
export { createMeshGroup };
