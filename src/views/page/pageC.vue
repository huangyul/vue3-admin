<template>
  <div>PageC</div>
  <el-button @click="onClick">add</el-button>
  <p>{{ store.state.test.count }}</p>
</template>

<script setup>
  import { useStore } from 'vuex'

  const store = useStore()
  const onClick = () => {
    store.commit('test/add')
  }
</script>
