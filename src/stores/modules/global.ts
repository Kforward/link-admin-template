import { defineStore } from "pinia";
import { ref } from "vue";
import type { GlobalState, LanguageType, LayoutType } from "@/stores/interface";
import { AssemblySizeType } from "@/stores/interface";
import { DEFAULT_PRIMARY } from "@/config";
import piniaPersistConfig from "@/config/piniaPersist.ts";

interface CustomContext {
  $patch: (param: any) => void;
}

type ObjToKeyValArray<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T];

export const useGlobalStore = defineStore(
  "link-global",
  () => {
    // 布局模式 (纵向：vertical | 经典：classic | 横向：transverse | 分栏：columns)
    const layout = ref<LayoutType>("vertical");
    // element 组件大小
    const assemblySize = ref<AssemblySizeType>("default");

    // 当前系统语言
    const language = ref<LanguageType>(null);

    // 当前页面是否全屏
    const maximize = ref<boolean>(false);

    // 主题颜色
    const primary = ref<string>(DEFAULT_PRIMARY);

    // 深色模式
    const isDark = ref<boolean>(false);

    // 灰色模式
    const isGrey = ref<boolean>(false);
    // 色弱模式
    const isWeak = ref<boolean>(false);
    // 侧边栏反转
    const asideInverted = ref<boolean>(false);
    // 头部反转
    const headerInverted = ref<boolean>(false);
    // 折叠菜单
    const isCollapse = ref<boolean>(false);
    // 菜单手风琴
    const accordion = ref<boolean>(false);
    // 面包屑导航
    const breadcrumb = ref<boolean>(true);
    // 面包屑导航图标
    const breadcrumbIcon = ref<boolean>(true);
    // 标签页
    const tabs = ref<boolean>(true);
    // 标签页图标
    const tabsIcon = ref<boolean>(true);
    // 页脚
    const footer = ref<boolean>(true);

    const setGlobalState: (this: CustomContext, ...args: ObjToKeyValArray<GlobalState>) => void = function (
      ...args: ObjToKeyValArray<GlobalState>
    ): void {
      this.$patch({ [args[0]]: args[1] });
    };

    return {
      layout,
      assemblySize,
      language,
      maximize,
      primary,
      isDark,
      isGrey,
      isWeak,
      asideInverted,
      headerInverted,
      isCollapse,
      accordion,
      breadcrumb,
      breadcrumbIcon,
      tabs,
      tabsIcon,
      footer,
      setGlobalState
    };
  },
  {
    persist: piniaPersistConfig("link-global")
  }
);
