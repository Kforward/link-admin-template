import { createScene } from "./components/scene.js";
import { createCamera } from "./components/camera.js";
import { createLights } from "./components/lights.js";
import { createAxesHelper, createGridHelper } from "./components/helpers";
// import { createCube } from "./components/cube.js";
// import { createMeshGroup } from "./components/meshGroup.js";
// import { Train } from "./components/Train/Train.ts";
import { loadBirds } from "./components/birds/birds.ts";

import { createControls } from "./systems/controls.js";
import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { Loop } from "./systems/Loop.js";

class World {
  #container;
  #camera;
  #scene;
  #renderer;
  #loop;
  #controls;

  // 1、创建类实例
  constructor(container) {
    this.#container = container;
    this.#scene = createScene();
    this.#camera = createCamera();
    this.#renderer = createRenderer();
    this.#loop = new Loop(this.#camera, this.#scene, this.#renderer);

    // 将渲染器添加至页面中
    this.#container.append(this.#renderer.domElement);

    this.#init();
  }

  #init() {
    // 创建控件
    // const controls = createControls(this.#camera, this.#renderer.domElement);
    this.#controls = createControls(this.#camera, this.#renderer.domElement);

    this.#controls.addEventListener("change", () => {
      this.render();
    });

    // 创建灯光
    const { ambientLight, mainLight } = createLights();

    // 创建 cube 网格
    // const cube = createCube();
    // const cube2 = createCube();
    // cube2.position.set(3, 0, 0);

    // 创建 createMeshGroup
    // const meshGroup = createMeshGroup();

    // 添加火车网格
    // const meshTrain = new Train();

    // 将 cube 网格添加至动画动画列表中
    // this.#loop.updatables.push(cube);

    // 网格动画组
    // this.#loop.updatables.push(controls, meshGroup);
    // this.#loop.updatables.push(controls, meshTrain);
    // this.#loop.updatables.push(controls);

    // 添加多个网格对象使用 "," 分割
    // this.#scene.add(cube, cube2, light);
    // this.#scene.add(cube, ambientLight, mainLight);

    // 将网格组添加至场景中
    // this.#scene.add(meshGroup, ambientLight, mainLight);
    // this.#scene.add(meshTrain, ambientLight, mainLight);
    this.#scene.add(ambientLight, mainLight);

    // 创建 Resizer 控制器
    new Resizer(this.#container, this.#camera, this.#renderer);

    // 启用了每秒60侦的输出，可以移除Resizer钩子
    // 调用 Resizer 钩子函数 并重新定义
    // resizer.onResize = () => {
    //   this.render();
    // };
  }

  async asyncRender() {
    const { parrot, flamingo, stork } = await loadBirds();

    this.#controls.target.copy(parrot.position);

    this.#loop.updatables.push(parrot, flamingo, stork);

    this.#scene.add(parrot, flamingo, stork);
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

  openHelp() {
    // 为场景创建辅助线
    this.#scene.add(createAxesHelper(), createGridHelper());
  }
}

export { World };
