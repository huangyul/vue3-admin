import { RouteRecordRaw } from 'vue-router'

// 用户信息
export interface userInfoInterface {
  userInfos: Object
  menuCollapse: boolean
  routeList: Array<RouteRecordRaw>
}

// store主接口
export interface RooteStateTypes {
  userInfos: userInfoInterface
}
