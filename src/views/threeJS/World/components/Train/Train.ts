import { Group, MathUtils } from "three";

// import { createGeometries } from "./geometries";
// import { createMaterial } from "./materials";
import { createMeshes } from "./meshes";

// 24 度 转为 弧度
const wheelSpeed: number = MathUtils.degToRad(24);

class Train extends Group {
  meshes: {
    nose: any;
    cabin: any;
    chimney: any;
    smallWheelRear: any;
    smallWheelCenter: any;
    smallWheelFront: any;
    bigWheel: any;
  };

  constructor() {
    super();

    this.meshes = createMeshes();
    this.add(
      this.meshes.nose,
      this.meshes.cabin,
      this.meshes.chimney,
      this.meshes.smallWheelRear,
      this.meshes.smallWheelCenter,
      this.meshes.smallWheelFront,
      this.meshes.bigWheel
    );
  }

  tick(delta: number) {
    this.meshes.bigWheel.rotation.y = wheelSpeed * delta;
    this.meshes.smallWheelCenter.rotation.y = wheelSpeed * delta;
    this.meshes.smallWheelFront.rotation.y = wheelSpeed * delta;
    this.meshes.smallWheelRear.rotation.y = wheelSpeed * delta;
  }
}

export { Train };
