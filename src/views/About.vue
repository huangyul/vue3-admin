<template>
  <div class="about">
    <el-button type="primary">123</el-button>
    <el-color-picker v-model="color" @change="changeColor"></el-color-picker>
    <div class="div">全局</div>
    是否灰色<el-switch
      v-model="value3"
      inline-prompt
      active-text="是"
      inactive-text="否"
    >
    </el-switch>
  </div>
</template>

<script setup>
  import { reactive, ref, toRefs } from '@vue/reactivity'
  import { watch } from '@vue/runtime-core'

  const color = ref('')

  const value3 = ref(false)

  const changeColor = (val) => {
    // 改变主题色
    const el = document.getElementsByTagName('body')[0]
    el.style.setProperty('--el-button-bg-primary', val)
  }

  watch(
    value3,
    (newValue) => {
      const el = document.body
      el.setAttribute('style', `filter:grayscale(${newValue ? 1 : 0})`)
    },
    { immediate: true }
  )
</script>

<style lang="scss" scoped>
  .div {
    background: var(--main-bg-color);
  }
</style>
