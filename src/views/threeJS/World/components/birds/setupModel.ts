import { AnimationClip, Scene, AnimationMixer } from "three";
import type { Object3D, Object3DEventMap, AnimationMixer as AnMixer } from "three";

interface modelData {
  animations: Array<AnimationClip>;
  cameras: Array<null>;
  scene: Scene;
}

declare module "three" {
  interface Object3D {
    tick?: (delta: any) => AnMixer;
  }
}

function setupModel(modelData: modelData) {
  const model: Object3D<Object3DEventMap> = modelData.scene.children[0];

  // 提取动画
  const clip = modelData.animations[0];

  // 创建混合器
  const mixer = new AnimationMixer(model);

  // 创建动作
  const action = mixer.clipAction(clip);
  action.play();

  // 为模型添加 tick() 方法
  model.tick = (delta: any) => mixer.update(delta);

  return model;
}

export { setupModel };
