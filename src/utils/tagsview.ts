/* 标签页数据相关方法 */

import { Session } from './storage'

/**
 * 新增标签
 * @param route
 * @returns
 */
export const addTag = (route) => {
  // 获取当前的tags
  let tags = Session.get('tagsview')
  // 判断当前要添加的路由是否已经存在
  if (!tags) tags = []
  if (tags.some((i) => i.path == route.path)) return

  tags.push(route)
  Session.set('tagsview', tags)
}

/**
 * 关闭标签
 * @param route
 */
export const closeTag = (path) => {
  // 获取session中的tags数据
  const tags = Session.get('tagsview')
  // 找出要删除的数据并删掉
  for (let i = 0; i < tags.length; i++) {
    if (tags[i].path == path) {
      tags.splice(i, 1)
      break
    }
  }
  // 重新设置session数据
  Session.set('tagsview', tags)
}
