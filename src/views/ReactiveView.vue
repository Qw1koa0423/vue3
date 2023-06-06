<!--
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-06-06 14:26:48
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-06-06 14:49:48
 * @FilePath: \vue3\src\views\ReactiveView.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved. 
-->
<template>
  <div>
    <!-- <form>
      <input v-model="form.name" type="text" />
      <br />
      <input v-model="form.age" type="text" />
      <br /> -->
    <!-- </form> -->
    <!-- <ul>
      <li v-for="item in list">{{ item }}</li>
    </ul> -->
    <button @click.prevent="add">添加</button>
    {{ obj.obj.name }}
  </div>
</template>
<script setup lang="ts">
import { reactive, readonly, shallowReactive } from 'vue'
const obj = shallowReactive({
  obj: {
    name: 'liuhaoqi'
  }
})
const obj1 = readonly(obj)
// let form = reactive({
//   name: 'liuhaoqi',
//   age: 18
// })
const add = () => {
  obj.obj.name = 'liuhaoqi1'
  console.log(obj1)
}
const list = reactive<string[]>([])
</script>
<style scoped></style>
