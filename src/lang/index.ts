import { createI18n } from 'vue-i18n'
import { computed } from 'vue'
import type { App, ComputedRef } from 'vue'
import dayjs from 'dayjs'
import zh_CN from './zh-CN.json'
import en_GB from './en.json'
import ja from './ja.json'
import zh_HK from './zh-HK.json'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import zhHK from 'ant-design-vue/es/locale/zh_HK'
import jaJP from 'ant-design-vue/es/locale/ja_JP'
import enGB from 'ant-design-vue/es/locale/en_GB'
import { Locale } from 'ant-design-vue/es/locale'

// 默认
const navlang = navigator.language
const locallang = (navlang == 'zh-CN' || navlang == 'en-GB') ? navlang : 'zh-CN'
const lang = localStorage.getItem('language') || locallang || 'zh-CN'
localStorage.setItem('language', lang)
dayjs().locale(lang)

const messages = {
  'zh-CN': {
    ...zh_CN,
    ...zhCN
  },
  en: {
    ...en_GB,
    ...enGB
  },
  ja: {
    ...ja,
    jaJP
  },
  'zh-HK': {
    ...zh_HK,
    ...zhHK
  }
}

export type MessageKey = keyof typeof messages

const i18n = createI18n({
  locale: lang, // 设置当前语言类型
  legacy: false, // 如果要支持compositionAPI，此项必须设置为false;
  globalInjection: true, // 全局注册$t方法
  messages,
})

export const changeLanguage = (value: MessageKey) => {
  localStorage.setItem('language', value)
  i18n.global.locale.value = value
  dayjs().locale(value)
}

export const useLocale = (): ComputedRef<Locale> => {

  const getLocale = computed(() => {
    return localStorage.getItem('language') || 'zh-CH'
  })

  const localeMap = new Map([
    ['zh-CN', zhCN],
    ['zh_HK', zhHK],
    ['ja', jaJP],
    ['en', enGB],
  ])

  const getCurrentLocale = computed<Locale>(() => {
    debugger
    let locale = localeMap.get(getLocale.value)
    locale = locale ? locale : zhCN

    return locale
  })

  return getCurrentLocale

}

export default function (app: App) {
  app.use(i18n)
}
