/**
 * 处理所有的循环与动画
 */
import { Clock } from "three";

// 记录 上一侦花了多少时间
const clock = new Clock();

class Loop {
  constructor(camera, scene, renderer) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    // 动画对象列表
    this.updatables = [];
  }

  start() {
    // 每秒60帧的速度输出帧 主要运动速度取决于设备刷新率
    this.renderer.setAnimationLoop(() => {
      this.tick();
      this.renderer.render(this.scene, this.camera);
    });
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }

  // 更新 所有动画
  tick() {
    if (this.updatables.length) {
      // 记录距离上次调用.getDalta() 的时间是多长;
      const dalta = clock.getDelta();
      for (const object of this.updatables) {
        object.tick(dalta);
      }
    }
  }
}

export { Loop };
