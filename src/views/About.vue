<template>
  <div class="about">
    <div class="div">全局</div>
    是否灰色<el-switch
      v-model="value3"
      inline-prompt
      active-text="是"
      inactive-text="否"
    >
    </el-switch>
    <el-divider></el-divider>
    开启水印<el-switch
      v-model="wart"
      @change="onSwitchChange"
      active-text="是"
      inactive-text="否"
    ></el-switch>
  </div>
</template>

<script setup>
  import { reactive, ref, toRefs } from '@vue/reactivity'
  import { watch } from '@vue/runtime-core'
  import wartermark from '@utils/wartermark.ts'

  const value3 = ref(false)
  const wart = ref(false)

  const onSwitchChange = (value) => {
    value ? wartermark.set('vue3-admin') : wartermark.del()
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
