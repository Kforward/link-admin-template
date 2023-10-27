import { Group } from "three";

// import { createGeometries } from "./geometries";
// import { createMaterial } from "./materials";
import { createMeshes } from "./meshes";

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
}

export { Train };
