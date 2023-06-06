<!--
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-06-06 15:35:10
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-06-06 17:43:31
 * @FilePath: \vue3\src\views\ComputedView.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved. 
-->
<template>
  <div>
    <div>
      <input type="text" placeholder="搜索" v-model="keyWords" />
    </div>
    <div style="margin-top: '20px'">
      <table border width="600" cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <th>名称</th>
            <th>单价</th>
            <th>数量</th>
            <th>总价</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in searchData" :key="item.name">
            <td align="center">{{ item.name }}</td>
            <td align="center">{{ item.price }}</td>
            <td align="center">
              <button :disabled="item.num < 1" @click="item.num--">-</button> {{ item.num }}
              <button @click="item.num++">+</button>
            </td>
            <td align="center">{{ item.num * item.price }}</td>
            <td align="center"><button @click="delHandler(item)">删除</button></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="5" align="right">总价：{{ total }}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
let firstName = ref('你')
let lastName = ref('好')
let name = computed<string>({
  get() {
    return firstName.value + '-' + lastName.value
  },
  set(newVal) {
    return ([firstName.value, lastName.value] = newVal.split('-'))
  }
})
const changeHandler = () => {
  name.value = 'liu-haoqi'
}
let data = reactive([
  {
    name: 'test1',
    price: 18,
    num: 1
  },
  {
    name: 'test2',
    price: 500,
    num: 1
  },
  {
    name: 'test3',
    price: 100,
    num: 1
  }
])
const total = computed(() => {
  return searchData.value.reduce((total, item) => total + item.num * item.price, 0)
})
const delHandler = (item: any) => {
  data.splice(
    data.findIndex((i) => i.name === item.name),
    1
  )
}
const keyWords = ref('')
const searchData = computed(() => {
  return data.filter((item) => item.name.includes(keyWords.value))
})
</script>
<style scoped></style>
