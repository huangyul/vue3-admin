<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    mode="vertical"
    :collapse="!store.state.system.menuCollapse"
    default-active="1"
    text-color="#fff"
  >
    <el-menu-item index="1">
      <el-icon><elementMenu /></el-icon>
      <span>Navigator Two</span>
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><elementLocation /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group title="Group One">
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item one</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="2-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3" disabled>
      <el-icon><elementDocument /></el-icon>
      <span>Navigator Three</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><elementSetting /></el-icon>
      <span>Navigator Four</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
  import { computed } from '@vue/reactivity'
  import { useStore } from 'vuex'

  const store = useStore()

  const isCollapse = computed(() => {
    store.state.system.menuCollapse
  })
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
