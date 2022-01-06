<template>
  <div class="setting-list">
    <div class="setting-item" @click="onSetting">
      <el-icon>
        <elementPointer></elementPointer>
      </el-icon>
    </div>

    <el-drawer v-model="drawer" title="配置" :size="200">
      <el-divider content-position="left">全局设置</el-divider>
      是否灰色<el-switch
        v-model="isGray"
        inline-prompt
        @change="onGrayChange"
        active-text="是"
        inactive-text="否"
      >
      </el-switch>
      <el-divider></el-divider>
      开启水印<el-switch
        v-model="isWart"
        @change="onWaterChange"
        active-text="是"
        inactive-text="否"
      ></el-switch>
    </el-drawer>
  </div>
</template>

<script setup>
  import { ref } from '@vue/reactivity'
  import wartermark from '@utils/wartermark.ts'
  const drawer = ref(false)
  const isWart = ref(false)
  const isGray = ref(false)
  const onSetting = () => {
    drawer.value = true
  }
  // 水印按钮
  const onWaterChange = (value) => {
    value ? wartermark.set('vue3-admin') : wartermark.del()
  }
  // 灰色按钮
  const onGrayChange = () => {
    const el = document.body
    el.setAttribute('style', `filter:grayscale(${isGray.value ? 1 : 0})`)
  }
</script>

<style lang="scss" scoped>
  .setting-list {
    display: flex;
    align-items: center;
    height: 100%;
    &::v-deep .icon {
      color: #909399;
    }
    &::v-deep .el-drawer__header {
      margin-bottom: 0;
    }

    .setting-item {
      box-sizing: border-box;
      cursor: pointer;
      padding: 0 10px;
      height: 100%;
      display: flex;
      align-items: center;
      &:hover {
        box-shadow: 0 0 2px 2px rgba($color: #000000, $alpha: 0.1);
      }
    }
  }
</style>
