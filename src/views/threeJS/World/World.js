import { createScene } from "./components/scene.js";
import { createCamera } from "./components/camera.js";
import { createCube } from "./components/cube.js";
import { createLights } from "./components/lights.js";

import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { Loop } from "./systems/Loop.js";

class World {
  #camera;
  #scene;
  #renderer;
  #loop;

  // 1、创建类实例
  constructor(container) {
    this.#scene = createScene();
    this.#camera = createCamera();
    this.#renderer = createRenderer();
    this.#loop = new Loop(this.#camera, this.#scene, this.#renderer);
    // 将渲染器添加至页面中
    container.append(this.#renderer.domElement);

    // 创建灯光
    const light = createLights();

    // 创建 cube 网格
    const cube = createCube();
    // const cube2 = createCube();
    // cube2.position.set(3, 0, 0);

    // 将 cube 网格添加至动画动画列表中
    this.#loop.updatables.push(cube);

    // 添加多个网格对象使用 "," 分割
    // this.#scene.add(cube, cube2, light);
    this.#scene.add(cube, light);

    // 创建 Resizer 控制器
    new Resizer(container, this.#camera, this.#renderer);

    // 启用了每秒60侦的输出，可以移除Resizer钩子
    // 调用 Resizer 钩子函数 并重新定义
    // resizer.onResize = () => {
    //   this.render();
    // };
  }

  // 2、渲染场景 单侦渲染
  render() {
    this.#renderer.render(this.#scene, this.#camera);
  }

  // 循环动画渲染
  start() {
    this.#loop.start();
  }

  stop() {
    this.#loop.stop();
  }
}

export { World };
