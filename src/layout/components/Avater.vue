<template>
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
        <el-dropdown-item>Action 4</el-dropdown-item>
        <el-dropdown-item divided @click="logout">登 出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
  import { Local, Session } from '@/utils/storage'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const logout = () => {
    Session.clear()
    Local.clear()
    router.replace('/login')
  }
</script>

<style lang="scss" scoped>
  .dropdown {
    cursor: pointer;
  }
</style>
