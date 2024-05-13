<script setup lang="ts">
import { ref } from 'vue'
import type { Dayjs } from 'dayjs'
import ChangeLanguage from '@/components/change-language/index.vue'

const value1 = ref<Dayjs>()



</script>

<template>
  <div>home</div>

  <ChangeLanguage />

  <a-date-picker v-model:value="value1" />

  <p class="text-[#ffffff] text-3">{{ $t('dashboard') }}</p>

  <p>{{ $t('machine.name') }}</p>
</template>
