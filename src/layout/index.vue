<template>
  <div class="layout-container">
    <!-- 侧边导航栏 -->
    <SiderMenu class="sider-bar"></SiderMenu>

    <div class="container">
      <!-- 顶部 -->
      <NavBar class="navbar"></NavBar>
      <!-- 主体内容 -->
      <router-view class="content"></router-view>
    </div>
  </div>
</template>

<script setup>
  import NavBar from './components/NavBar.vue'
  import SiderMenu from './components/SiderMenu.vue'
</script>

<style lang="scss" scoped>
  .layout-container {
    width: 100%;
    height: 100%;
    display: flex;

    .sider-bar {
      width: 210px;
      height: 100%;
    }

    .container {
      width: calc(100% - 210px);
      .navbar {
        width: 100%;
      }
      .content {
        width: 100%;
      }
    }
  }
</style>
