/**
 * 处理页面变化后的事件
 */
const setSize = (container, camera, renderer) => {
  // 设置相机纵横比
  camera.aspect = container.clientWidth / container.clientHeight;

  // 更新相机
  camera.updateProjectionMatrix();

  // 更新渲染器和画布的大小
  renderer.setSize(container.clientWidth, container.clientHeight);
  // 设置像素比
  renderer.setPixelRatio(window.devicePixelRatio);
};

/**
 * 监听给定元素的大小变化
 * @param { Function } callback 回调函数
 */
const observerPage = callback =>
  new ResizeObserver(entries => {
    callback && callback(entries);
  });

class Resizer {
  constructor(container, camera, renderer) {
    setSize(container, camera, renderer);

    observerPage(() => {
      setSize(container, camera, renderer);

      // 调用钩子函数，在内容变化时自由处理额外的事
      this.onResize();
    }).observe(container);
  }

  // 钩子函数，该钩子函数是一个空方法可以由外部调用处实现内部方法；
  onResize() {}
}

export { Resizer };
