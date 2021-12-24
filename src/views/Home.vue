<template>
  <span class="demonstration">Total item count</span>
  <el-pagination
    v-model:currentPage="currentPage1"
    :page-size="100"
    layout="total, prev, pager, next"
    :total="1000"
  >
  </el-pagination>
</template>

<script lang="ts"></script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
