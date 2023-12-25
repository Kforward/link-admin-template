import { Raycaster } from "three";

export const clickHandler = (canvas, scene) => {
  const raycaster = new Raycaster();
  console.log(raycaster);
  canvas.addEventListener("click", () => {
    const intersects = raycaster.intersectObjects(scene.children);
    console.log(intersects);
  });
};
