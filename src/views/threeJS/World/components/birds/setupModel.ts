import type { AnimationClip, Scene } from "three";

interface modelData {
  animations: Array<AnimationClip>;
  cameras: Array<null>;
  scene: Scene;
}

function setupModel(modelData: modelData) {
  const model = modelData.scene.children[0];

  return model;
}

export { setupModel };
