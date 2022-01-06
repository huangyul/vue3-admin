<template>
  <div class="container">
    <!-- 设定横向滚动条 -->
    <el-scrollbar>
      <ul>
        <li
          v-for="(i, k) in tags"
          :key="k"
          @click="navigator(i.path)"
          :class="{ active: isActive(i.path) }"
        >
          <div>{{ i.meta.title }}</div>
          <div v-if="i.path != '/home' && isActive(i.path)">
            <el-icon class="icon2" @click.stop="close(i.path)">
              <elementClose></elementClose>
            </el-icon>
          </div>
        </li>
      </ul>
    </el-scrollbar>
  </div>
</template>

<script setup>
  import { Session } from '@/utils/storage'
  import { closeTag } from '@/utils/tagsview'
  import { onMounted, ref, watch } from '@vue/runtime-core'
  import { useRoute, useRouter } from 'vue-router'

  const route = useRoute()

  const router = useRouter()

  // tagsview的数据
  let tags = ref([])

  // 页面初始化默认从session获取tagsview的数据并保存
  onMounted(() => {
    tags.value = Session.get('tagsview')
  })

  // 当路由发生改变时，重新获取一次
  watch(
    () => route,
    () => {
      tags.value = Session.get('tagsview')
    },
    { deep: true }
  )

  // 路由跳转
  const navigator = (path = '/') => {
    router.push(path)
  }

  // 判断当前路由是否为活跃路由
  const isActive = (path) => {
    return path == route.path
  }

  // 关闭标签页
  const close = (path) => {
    // 关掉标签页
    closeTag(path)
    // 重新获取数据
    tags.value = Session.get('tagsview')
    // 路由跳转到最后一个标签页上
    console.log(tags.value[tags.value.length - 1].path)
    router.push(tags.value[tags.value.length - 1].path)
  }
</script>

<style lang="scss" scoped>
  .container {
    padding: 4px 2px;
    overflow: hidden;
    ul {
      display: flex;
      list-style: none;
      align-items: center;
      height: 30px;
      li {
        border: 1px solid rgba($color: #81776e, $alpha: 0.3);
        margin-right: 5px;
        padding: 4px 20px;
        border-radius: 2px;
        display: flex;
        align-items: center;
        &:hover {
          color: rgba($color: #67a9ff, $alpha: 1);
          border: 1px solid rgba($color: #67a9ff, $alpha: 1);
          background: rgba($color: #67a9ff, $alpha: 0.2);
          cursor: pointer;
        }

        .icon2 {
          margin-left: 8px;
          display: block;
          &:hover {
            border-radius: 50%;
            background: rgba($color: #8bdeff, $alpha: 1);
          }
        }
      }
      .active {
        background: rgba($color: #67a9ff, $alpha: 1);
        border: 1px solid rgba($color: #67a9ff, $alpha: 1);
        color: #ffffff;
        &:hover {
          background: rgba($color: #67a9ff, $alpha: 1);
          border: 1px solid rgba($color: #67a9ff, $alpha: 1);
          color: #ffffff;
        }
      }
    }
  }
</style>
