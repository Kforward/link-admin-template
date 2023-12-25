import { useGlobalStore } from "@/stores/modules/global.ts";
import { storeToRefs } from "pinia";
import { Theme } from "@/hooks/useTheme/types.ts";
import { DEFAULT_PRIMARY } from "@/config";
import { ElMessage } from "element-plus";
import { getDarkColor, getLightColor } from "@/utils/color.ts";
import { menuTheme } from "@/styles/theme/menu.ts";
import { asideTheme } from "@/styles/theme/aside.ts";
import { headerTheme } from "@/styles/theme/header.ts";

export const useTheme = () => {
  const globalStore = useGlobalStore();
  const { primary, isGrey, isWeak, isDark, layout, asideInverted, headerInverted } = storeToRefs(globalStore);

  // 切换暗黑模式 ==> 并带修改主题颜色、侧边栏、头部颜色
  const switchDark = () => {
    const html = document.documentElement as HTMLElement;
    if (isDark.value) {
      html.setAttribute("class", "dark");
    } else {
      html.setAttribute("class", "");
    }

    changePrimary(primary.value);
    setAsideTheme();
    setHeaderTheme();
  };

  // 修改主题色
  const changePrimary = (val: string | null) => {
    if (!val) {
      val = DEFAULT_PRIMARY;
      ElMessage({
        type: "success",
        message: `组主题色已重置为 ${DEFAULT_PRIMARY}`
      });
    }
    // 计算主题色变化
    document.documentElement.style.setProperty("--el-color-primary", val);
    document.documentElement.style.setProperty(
      "--el-color-primary-dark-2",
      isDark.value ? `${getLightColor(val, 0.2)}` : `${getDarkColor(val, 0.3)}`
    );

    for (let i = 0; i <= 9; i++) {
      const primaryColor = isDark.value ? `${getDarkColor(val, i / 10)}` : `${getLightColor(val, i / 10)}`;
      document.documentElement.style.setProperty(`--el-color-primary-light-${i}`, primaryColor);
    }

    globalStore.setGlobalState("primary", val);
  };

  // 灰色与弱色切换
  const changeGreyOrWeak = (type: Theme.GreyOrWeakType, value: boolean) => {
    const body = document.body as HTMLElement;
    if (!value) {
      return body.removeAttribute("style");
    }

    const style: Record<Theme.GreyOrWeakType, string> = {
      grey: "filter: grayscale(1)",
      weak: "filter: invert(80%)"
    };

    body.setAttribute("style", style[type]);
    const propName = type === "grey" ? "isWeak" : "isGrey";
    globalStore.setGlobalState(propName, false);
  };

  // 设置菜单样式
  const setMenuTheme = () => {
    let type: Theme.ThemeType = "light";
    if (layout.value === "transverse" && headerInverted.value) type = "inverted";
    if (layout.value !== "transverse" && asideInverted.value) type = "inverted";
    if (isDark.value) type = "dark";
    const theme = menuTheme[type!];
    for (const [key, value] of Object.entries(theme)) {
      document.documentElement.style.setProperty(key, value);
    }
  };

  // 设置侧边栏样式
  const setAsideTheme = () => {
    let type: Theme.ThemeType = "light";
    if (asideInverted.value) type = "inverted";
    if (isDark.value) type = "dark";
    const theme = asideTheme[type!];
    for (const [key, value] of Object.entries(theme)) {
      document.documentElement.style.setProperty(key, value);
    }
    setMenuTheme();
  };

  // 设置头部样式
  const setHeaderTheme = () => {
    let type: Theme.ThemeType = "light";
    if (headerInverted.value) type = "inverted";
    if (isDark.value) type = "dark";
    const theme = headerTheme[type!];
    for (const [key, value] of Object.entries(theme)) {
      document.documentElement.style.setProperty(key, value);
    }
    setMenuTheme();
  };

  const initTheme = () => {
    switchDark();
    isGrey.value && changeGreyOrWeak("grey", true);
    isWeak.value && changeGreyOrWeak("weak", true);
  };

  return {
    initTheme,
    switchDark,
    changePrimary,
    changeGreyOrWeak,
    setAsideTheme,
    setHeaderTheme
  };
};
