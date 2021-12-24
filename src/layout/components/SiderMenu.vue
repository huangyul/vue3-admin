<template>
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
    <el-menu-item :index="`${routeList[0].path}`">
      <el-icon><elementMenu /></el-icon>
      <span>Home</span>
    </el-menu-item>
    <el-menu-item :index="`${routeList[1].path}`">
      <el-icon><elementMenu /></el-icon>
      <span>About</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
  import { computed } from '@vue/reactivity'
  import { useRouter } from 'vue-router'
  import { useStore } from 'vuex'

  const store = useStore()

  const router = useRouter()

  const routeList = router.options.routes
  console.log(routeList)

  const isCollapse = computed(() => {
    store.state.system.menuCollapse
  })

  const onMenuItemClick = (e) => {
    console.log(e)
  }
</script>

<style lang="scss" scoped>
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
    min-height: 400px;
  }
</style>
