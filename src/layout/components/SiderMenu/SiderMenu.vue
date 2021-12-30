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
        <!-- 不隐藏的才显示 -->
        <div v-if="!route.meta.isHide">
          <el-sub-menu
            :index="route.path"
            v-if="route.children && route.children.length > 1"
          >
            <template #title>
              <SvgIcon :iconName="route.meta.icon || 'eye'"></SvgIcon>
              <span>{{ route.meta.title }}</span>
            </template>
            <SiderItem :routes="route.children"></SiderItem>
          </el-sub-menu>
          <el-menu-item
            v-else-if="route.children && route.children.length == 1"
            :index="route.children[0].path"
          >
            <el-icon><elementMenu /></el-icon>
            <span>{{ route.children[0].meta.title }}</span>
          </el-menu-item>
          <el-menu-item v-else :index="`${route.path}`">
            <el-icon><elementMenu /></el-icon>
            <span>{{ route.meta.title }}</span>
          </el-menu-item>
        </div>
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
  const routeList = router.options.routes
  console.log(routeList)
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

    &::v-deep .el-menu--collapse {
      width: 63px;
      height: 100%;
    }

    .el-menu {
      border: 0 !important;

      .icon {
        display: inline-block;
        padding-right: 10px;
      }
    }
    .menu:not(.el-menu--collapse) {
      width: 200px;
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
