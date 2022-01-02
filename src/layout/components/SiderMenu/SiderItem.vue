<template>
  <template v-for="route in props.routes" :key="route.path">
    <el-sub-menu v-if="route.children && route.children.length > 1">
      <template #title>
        <span>{{ route.meta.title }}</span>
      </template>
      <SiderItem :routes="route.children"></SiderItem>
    </el-sub-menu>
    <el-menu-item
      v-else-if="route.children && route.children.length == 1"
      :index="route.children[0].path"
    >
      <span>{{ route.children[0].meta.title }}</span>
    </el-menu-item>
    <el-menu-item v-else :index="`${route.path}`">
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
