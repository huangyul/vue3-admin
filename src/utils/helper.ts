import type { App } from 'vue'
import * as elementIcons from '@element-plus/icons-vue'
import SvgIcon from '@components/svgIcon/index.vue'

/**
 * 全局注册element 图标
 * @param app
 */
export function registerComponent(app: App) {
  // 获取element icons
  const icons = elementIcons as any
  // 将所有icons都注册为组件方便使用
  for (const i in icons) {
    app.component(`element${icons[i].name}`, icons[i])
  }
  app.component('SvgIcon', SvgIcon)
}
