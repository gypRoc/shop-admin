<template>
  <h1>Hello World-首页</h1>
  <img
    src="@/assets/vue.svg"
    alt=""
  >
</template>
<script setup lang='ts'>
import { getLoginInfo } from '@/api/common'
import type { ILoginInfo } from '@/api/types/common'
import { onMounted, ref } from 'vue'

const list = ref<ILoginInfo['slide']>([])
onMounted(() => {
  getLoginInfo().then(data => {
    console.log(data)
    list.value = data.slide
  })
})
</script>
<style lang='scss' scoped></style>
