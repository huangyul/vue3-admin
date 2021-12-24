<template>
  <template v-for="route in props.routes" :key="route.path">
    <el-sub-menu v-if="route.children && route.children.length > 0">
      <template #title>
        <span>{{ route.meta.title }}</span>
      </template>
      <SiderItem :routes="route.children"></SiderItem>
    </el-sub-menu>
    <el-menu-item v-else :index="`${route.path}`">
      <el-icon><elementMenu /></el-icon>
      <span>{{ route.meta.title }}</span>
    </el-menu-item>
  </template>
</template>

<script setup>
  /* eslint-disable */
  const props = defineProps({
    routes: Object,
  })
  console.log(props.routes)
</script>
