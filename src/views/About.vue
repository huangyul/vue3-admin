<template>
  <div>
    <h1>About</h1>
    <p>{{ store.state.test.count }}</p>
  </div>
</template>

<script setup>
  import { useStore } from 'vuex'

  const store = useStore()
</script>

<style lang="scss" scoped>
  .div {
    background: var(--main-bg-color);
  }
</style>
