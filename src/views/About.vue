<template>
  <div class="about">
    <el-button type="primary">123</el-button>
    <el-color-picker v-model="color" @change="changeColor"></el-color-picker>
  </div>
</template>

<script setup>
  import { reactive, ref, toRefs } from '@vue/reactivity'

  const color = ref('')

  const changeColor = (val) => {
    // 改变主题色
    const el = document.getElementsByTagName('body')[0]
    el.style.setProperty('--el-button-bg-primary', val)
  }
</script>
