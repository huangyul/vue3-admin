<script setup lang="ts">
import 'dayjs/locale/zh-cn'
import { useLocale } from './lang';

const getLocale = useLocale()
</script>

<template>
  <AConfigProvider :locale="getLocale">
    <RouterView />
  </AConfigProvider>
</template>
