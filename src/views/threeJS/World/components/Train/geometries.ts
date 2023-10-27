import { BoxGeometry, CylinderGeometry } from "three";

function createGeometries() {
  // 火车仓体
  const cabin = new BoxGeometry(2, 2.25, 1.5);

  // 火车鼻
  const nose = new CylinderGeometry(0.75, 0.75, 3, 12);

  // 火车轮
  const wheel = new CylinderGeometry(0.4, 0.4, 1.75, 16);

  // 火车烟窗
  const chimney = new CylinderGeometry(0.3, 0.1, 0.5);

  return {
    cabin,
    nose,
    wheel,
    chimney
  };
}

export { createGeometries };
