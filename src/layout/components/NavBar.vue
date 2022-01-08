<template>
  <div class="container">
    <div class="top">
      <div class="left">
        <!-- 侧边菜单缩放 -->
        <div class="expand-icon" @click="onExpand">
          <el-icon class="expand"
            ><elementFold
              v-if="store.state.userInfos.menuCollapse" /><elementExpand v-else
          /></el-icon>
        </div>
        <BreadCrumb></BreadCrumb>
      </div>

      <!-- 个人头像 -->
      <div class="right">
        <Setting class="setting"></Setting>
        <MyAvater></MyAvater>
      </div>
    </div>
    <div class="bottom">
      <TagsView></TagsView>
    </div>
  </div>
</template>

<script setup>
  import BreadCrumb from './BreadCrumb/BreadCrumb.vue'
  import TagsView from './TagsView/index.vue'
  import MyAvater from './Avater.vue'
  import Setting from './Setting.vue'
  import { useStore } from 'vuex'

  const store = useStore()

  const onExpand = () => {
    store.state.userInfos.menuCollapse = !store.state.userInfos.menuCollapse
  }
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    background: #ffffff;
    border-bottom: 1px solid rgba($color: #81776e, $alpha: 0.3);
    box-shadow: 0 0.5px 4px 0px rgba($color: #81776e, $alpha: 0.1);

    .top {
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        height: 100%;
        display: flex;
        justify-content: center;
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

      .right {
        padding-right: 20px;
        display: flex;
        align-items: center;
        height: 100%;

        .setting {
          margin-right: 10px;
        }
      }
    }

    .bottom {
      border-top: 1px solid rgba($color: #81776e, $alpha: 0.3);
    }
  }
</style>
