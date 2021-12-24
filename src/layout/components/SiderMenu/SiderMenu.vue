<template>
  <el-scrollbar class="scroll">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      mode="vertical"
      :collapse="!store.state.system.menuCollapse"
      :default-active="`${routeList[0].path}`"
      text-color="#fff"
      router
    >
      <template v-for="route in routeList" :key="route.path">
        <el-sub-menu v-if="route.children && route.children.length > 0">
          <template #title>
            <el-icon><elementMenu /></el-icon>
            <span>{{ route.meta.title }}</span>
          </template>
          <SiderItem :routes="route.children"></SiderItem>
        </el-sub-menu>
        <el-menu-item v-else :index="`${route.path}`">
          <el-icon><elementMenu /></el-icon>
          <span>{{ route.meta.title }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script setup>
  import { useRouter } from 'vue-router'
  import { useStore } from 'vuex'
  import SiderItem from './SiderItem.vue'

  const store = useStore()

  const router = useRouter()

  // 获取所有路由
  // 因为所有页面都使用了layout模板，所以都会在第一个路由的children里面
  const routeList = router.options.routes[0].children
  // const
</script>

<style lang="scss" scoped>
  .scroll {
    --el-scrollbar-opacity: 0;
    &::v-deep .el-scrollbar__view {
      height: 100%;
    }

    &::v-deep .el-scrollbar {
      opacity: 0 !important;
    }

    .el-menu {
      border: 0 !important;
    }
    .menu:not(.el-menu--collapse) {
      width: 210px;
      height: 100%;
      transition: width 0.28s;
      // background-color: #545c64;
    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 100%;
    }
  }
</style>
