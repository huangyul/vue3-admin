<template>
  <div class="layout-container">
    <!-- 侧边导航栏 -->
    <SiderMenu
      :class="[
        'sider-bar',
        {
          'sider-close': !store.state.system.menuCollapse,
        },
      ]"
    ></SiderMenu>

    <div
      :class="[
        'container',
        { 'container-close': !store.state.system.menuCollapse },
      ]"
    >
      <!-- 顶部 -->
      <NavBar class="navbar"></NavBar>
      <!-- 主体内容 -->
      <transition name="page">
        <router-view class="content"></router-view>
      </transition>
    </div>
  </div>
</template>

<script setup>
  import { useStore } from 'vuex'
  import NavBar from './components/NavBar.vue'
  import SiderMenu from './components/SiderMenu.vue'

  const store = useStore()
</script>

<style lang="scss" scoped>
  .layout-container {
    width: 100%;
    height: 100%;
    display: flex;
    .container-close {
      // width: calc(100% - 63px) !important;
    }
    .container {
      -webkit-transition: width 0.28s;
      transition: width 0.28s;
      flex: 1;
      // width: calc(100% - 210px);
      .navbar {
        width: 100%;
      }
      .content {
        padding: 20px 10px;
        width: 100%;
      }

      // .content-
    }
  }
</style>
