<template>
  <div class="container">
    <!-- 侧边菜单缩放 -->
    <div class="expand-icon" @click="onExpand">
      <el-icon class="expand"><elementFold /></el-icon>
    </div>
  </div>
</template>

<script setup>
  import { computed } from '@vue/reactivity'
  import { watch } from '@vue/runtime-core'
  import { useStore } from 'vuex'

  const store = useStore()

  watch(
    () => {
      store.state.system.menuCollapse
    },
    (val) => {
      if (val) {
        console.log('yes')
      } else {
        console.log('no')
      }
    }
  )

  const onExpand = () => {
    // store.commit('system/setMenu', !isCollapse)
    // console.log(isCollapse)
    store.state.system.menuCollapse = !store.state.system.menuCollapse
  }
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 50px;
    background: #ffffff;
    border-bottom: 1px solid rgba($color: #81776e, $alpha: 0.3);
    box-shadow: 0 0.5px 4px 0px rgba($color: #81776e, $alpha: 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .expand-icon {
      width: 50px;
      height: 100%;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        box-shadow: 1px 1px 4px 2px rgba($color: #81776e, $alpha: 0.1);
      }

      .expand {
        font-size: 24px;
        color: rgba($color: #494847, $alpha: 0.7);
      }
    }
  }
</style>
