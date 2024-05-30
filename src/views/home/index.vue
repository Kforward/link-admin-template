<script setup lang="ts">
function goToFt() {
  window.open("http://192.168.50.228:9527/#/ssoPage?code=123456");
}
</script>

<template>
  <div class="home">
    <div class="bottom-10">home</div>

    <el-button @click="goToFt">go</el-button>
  </div>
</template>

<style scoped lang="scss"></style>
