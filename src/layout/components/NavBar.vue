<template>
  <div class="container">
    <div class="left">
      <!-- 侧边菜单缩放 -->
      <div class="expand-icon" @click="onExpand">
        <el-icon class="expand"
          ><elementFold v-if="store.state.system.menuCollapse" /><elementExpand
            v-else
        /></el-icon>
      </div>
      <BreadCrumb></BreadCrumb>
    </div>

    <!-- 个人头像 -->
    <div class="right">
      <el-dropdown class="dropdown">
        <span class="el-dropdown-link">
          <el-avatar
            size="large"
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F6a%2F67%2F94%2F6a6794c824b4e53320f6abe9da88980f.png&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642831062&t=35742ed0feb0bde3942a75ee444bf6e9"
          ></el-avatar>
          <el-icon class="el-icon--right">
            <elementArrowDown />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item disabled>Action 4</el-dropdown-item>
            <el-dropdown-item divided>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
  import BreadCrumb from './BreadCrumb.vue'
  import { useStore } from 'vuex'

  const store = useStore()

  const onExpand = () => {
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
      .dropdown {
        cursor: pointer;
      }
    }
  }
</style>
