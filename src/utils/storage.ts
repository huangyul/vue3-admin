/**
 * 浏览器永久缓存
 */
export const Local = {
  set(key: string, val: any) {
    localStorage.setItem(key, val)
  },
  get(key: string) {
    return localStorage.getItem(key)
  },
  remove(key: string) {
    localStorage.removeItem(key)
  },
  clear() {
    localStorage.clear()
  },
}

/**
 * 浏览器临时缓存
 */
export const Session = {
  set(key: string, val: any) {
    sessionStorage.setItem(key, JSON.stringify(val))
  },
  get(key: string) {
    return JSON.parse(sessionStorage.getItem(key))
  },
  remove(key: string) {
    sessionStorage.removeItem(key)
  },
  clear() {
    sessionStorage.clear()
  },
}
