<!--
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-06-06 10:14:10
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-06-06 13:37:45
 * @FilePath: \vue3\src\views\DiffView.vue
 * @Description: 
 * @see https://github.com/vuejs/core/blob/main/packages/runtime-core/src/renderer.ts     1631行
 *
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved. 
-->
<template>
  <div>
    <p v-for="item in arr" :key="item">{{ item }}</p>
  </div>
</template>
<script setup lang="ts">
const arr: string[] = ['1', '2', '3']
arr.splice(1, 0, '4')
// 无key
// 新旧虚拟dom做对比,直接替换,发现多的就新增，少的就删除
// 有key
// 先进行前序对比，对比新旧虚拟dom的key，发现不一样的跳出循环，进行尾序算法，发现不一样的时候进行patch，多的新增，少的删除，顺序不一样的先进行排序，再进行patch
</script>
<style scoped></style>
