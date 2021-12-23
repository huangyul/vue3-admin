<template>
  <div class="container">
    <div class="left">
      <!-- 侧边菜单缩放 -->
      <div class="expand-icon" @click="onExpand">
        <el-icon class="expand"><elementFold /></el-icon>
      </div>
    </div>

    <!-- 个人头像 -->
    <div class="right">
      <el-dropdown class="dropdown">
        <span class="el-dropdown-link">
          <el-avatar size="large" src=""></el-avatar>
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
