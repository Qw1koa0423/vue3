<!--
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-06-06 14:55:08
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-06-06 15:25:01
 * @FilePath: \vue3\src\views\toRefView.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved. 
-->
<template>
  <div>
    <p>
      {{ man }}
    </p>
    <button @click="changeHandler">修改</button>
    <p>toRef:{{ like }}</p>
  </div>
</template>
<script setup lang="ts">
import { toRef, toRefs, toRaw, reactive } from 'vue'
const man = reactive({
  name: 'liuhaoqi',
  age: 18,
  like: 'jk'
})
let { like, name, age } = toRefs(man)
const changeHandler = () => {
  //   man.like = '女'
  //   console.log(like, name, age)
  console.log(man, toRaw(man))
}
</script>
<style scoped></style>
