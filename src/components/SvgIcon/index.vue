<template>
  <svg :style="iconStyle" aria-hidden="true">
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script setup lang="ts" name="SvgIcon">
import { computed, CSSProperties } from "vue";
interface SvgProps {
  name: string; // 图标的名称（必传）
  prefix?: string; // 图标前缀（非必传）
  iconStyle?: CSSProperties; // 图标样式（非必传）
}

const props = withDefaults(defineProps<SvgProps>(), {
  prefix: "icon",
  iconStyle: () => ({ width: "100px", height: "100px" })
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>

<style scoped></style>
