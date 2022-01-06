<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/home' }">homepage</el-breadcrumb-item>
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="route in data"
        :key="route.path"
        :to="route.path"
        >{{ route.meta.title }}</el-breadcrumb-item
      >
    </transition-group>
  </el-breadcrumb>
</template>

<script setup>
  import { ref } from '@vue/reactivity'
  import { watch } from '@vue/runtime-core'
  import { useRoute, useRouter } from 'vue-router'

  const route = useRoute()

  const router = useRouter()

  let data = ref([])

  const getBreadCrumbData = (route) => {
    console.log(route.matched)
    // 获取当前路由的所有记录，包括嵌套路由
    // 判断第一个是否为主页，如果是要去掉，因为上面的模板中会默认加入主页

    let matched = route.matched.filter((route) => route.path != '/')
    // 通过route.matched获取当前路由的所有记录，包括嵌套路由
    data.value = matched.filter((route) => route.meta && route.meta.title)
    console.log(data.value)
  }

  watch(
    () => route,
    (val) => {
      console.log(12123)
      getBreadCrumbData(val)
    },
    // 监听对象里的属性
    { deep: true }
  )
</script>

<style lang="scss" scoped>
  .breadcrumb-item-active {
    color: #303133;
    font-weight: bold;
    text-decoration: none;
    &:hover {
      color: cornflowerblue;
    }
  }
  .breadcrumb-item-d {
    display: inline-block;
    font-weight: bold;
    color: #c0c4cc;
    margin: 0 9px;
  }
</style>
