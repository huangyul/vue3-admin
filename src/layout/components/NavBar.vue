<template>
  <div class="container">
    <!-- 侧边菜单缩放 -->
    <div>
      <el-icon class="expand"><elementFold /></el-icon>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 50px;
    background: #ffffff;
    border-bottom: 1px solid rgba($color: #81776e, $alpha: 0.3);
    display: flex;
    padding: 0 10px;
    justify-content: space-between;
    align-items: center;

    .expand {
      font-size: 24px;
      color: rgba($color: #494847, $alpha: 0.7);
      cursor: pointer;
    }
  }
</style>
