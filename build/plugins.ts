import { PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { createHtmlPlugin } from "vite-plugin-html";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import { getPath } from "../src/utils/path";

/**
 * 创建 vite 插件
 * @param viteEnv
 */
export const createVitePlugins = (viteEnv: ViteEnv): (PluginOption | Array<PluginOption>)[] => {
  const { VITE_GLOB_APP_TITLE } = viteEnv;

  return [
    vue(),
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      // imports: ["vue"],
      // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
      resolvers: [
        ElementPlusResolver(),
        // 自动导入图标组件
        IconsResolver({
          prefix: "Icon"
        })
      ],
      dts: getPath("./auto-imports.d.ts")
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ["ep"]
        })
      ],
      dts: getPath("./components.d.ts")
    }),
    Icons({
      autoInstall: true
    }),
    // 注入变量到html文件
    createHtmlPlugin({
      inject: {
        data: { title: VITE_GLOB_APP_TITLE }
      }
    }),
    createSvgIconsPlugin({
      iconDirs: [getPath("src/assets/icons")],
      symbolId: "icon-[dir]-[name]"
    })
  ];
};
