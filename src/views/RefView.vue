<!--
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-06-06 13:38:37
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-06-06 14:17:07
 * @FilePath: \vue3\src\views\RefView.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved. 
-->
<template>
  <div>
    <p>Ref:{{ Man }}</p>
    <button @click="changeHandle">修改</button>
    <p>shallowRef:{{ Man2 }}</p>
    <p>customRef:{{ obj }}</p>
    <p ref="dom">我是dom</p>
  </div>
</template>
<script setup lang="ts">
import { ref, shallowRef, triggerRef, customRef } from 'vue'
// ref 深层次响应  shallowRef 浅层次响应
// ref不能和shallowRef混用 会影响shallowRef的响应
// triggerRef 用于触发shallowRef的响应
const Man = ref<{ name: string }>({ name: 'ref' })
const Man2 = shallowRef({ name: 'shallowRef' })
const changeHandle = () => {
  //   Man2.value.name = 'shallowRef2'
  //   triggerRef(Man2)
  //   obj.value = 'MyRef2'
  //   console.log('obj', obj)
  console.log('dom', dom.value?.innerText)
}
function MyRef<T>(value: T) {
  let timer: any
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newVal) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          console.log('newVal', newVal)
          value = newVal
          timer = null
          trigger()
        }, 1000)
      }
    }
  })
}
const obj = MyRef<string>('MyRef')
const dom = ref<HTMLParagraphElement>()
</script>
<style scoped></style>
