<template>
  <el-config-provider :locale="locale" :size="assemblySize" :button="buttonConfig">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
import { useGlobalStore } from "@/stores/modules/global.ts";
import { computed, onMounted, reactive } from "vue";
import { getBrowserLang } from "@/utils";
import { useI18n } from "vue-i18n";
import { LanguageType } from "@/stores/interface";
import en from "element-plus/es/locale/lang/en";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import { useTheme } from "@/hooks/useTheme";

const globalStore = useGlobalStore();
const { initTheme } = useTheme();
initTheme();

const i18n = useI18n();

onMounted(() => {
  const language = globalStore.language ?? getBrowserLang();
  i18n.locale.value = language;
  globalStore.setGlobalState("language", language as LanguageType);
});

// element language
const locale = computed(() => {
  if (globalStore.language == "zh") return zhCn;
  if (globalStore.language == "en") return en;
  return getBrowserLang() == "zh" ? zhCn : en;
});

// element assemblySize
const assemblySize = computed(() => globalStore.assemblySize);

// element button config
const buttonConfig = reactive({ autoInsertSpace: false });
</script>

<style scoped></style>
