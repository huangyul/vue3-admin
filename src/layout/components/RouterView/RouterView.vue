<template>
  <router-view class="content" v-slot="{ Component }">
    <transition name="page" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="scss" scoped>
  .content {
    width: 100%;
  }
</style>
