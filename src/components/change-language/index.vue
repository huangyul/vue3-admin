<!-- 更换语言 -->
<script setup lang="ts">
import { ref } from 'vue'
import { changeLanguage, type MessageKey } from '@/lang'
const value2 = ref<string>('')

const options = ref<{ value: MessageKey, label: string }[]>([
  {
    value: 'zh-CN',
    label: '简体中文'
  },
  {
    value: 'zh-HK',
    label: '繁体中文（中国香港）'
  },
  {
    value: 'en',
    label: '英语'
  },
  {
    value: 'ja',
    label: '日语'
  }
])

const handleChangeLanguage = (value: MessageKey) => {
  changeLanguage(value)
}
</script>

<template>
  <a-select ref="select" v-model:value="value2" :options style="width: 120px" @change="handleChangeLanguage">
  </a-select>
</template>
