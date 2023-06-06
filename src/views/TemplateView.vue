<!--
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-06-06 09:25:37
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-06-06 10:10:17
 * @FilePath: \vue3\src\views\TemplateView.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved. 
-->
<template>
  <div>
    <p>
      {{ text }}
    </p>
    <p>运算：{{ num + 2 }}</p>
    <p>三元：{{ isNumber ? 'true' : 'false' }}</p>
    <p>
      数组map：{{
        arrNum.map((v) => ({
          num: v
        }))
      }}
    </p>
    <p v-text="v_text"></p>
    <p v-html="v_html"></p>
    <p v-if="isNumber">v-if=true</p>
    <p v-if="!isNumber">v-if=false</p>
    <p v-show="isNumber">v-show=true</p>
    <p v-show="!isNumber">v-show=false</p>
    <p @[event]="clickParent">
      <button @click.stop="clickChild">点击</button>
    </p>
    <p :id="event">id='click'</p>
    <p :style="styles">绑定style</p>
    <p class="c" :class="['a', 'b']">绑定class</p>
    ref和v-model: <input type="text" v-model="text" />
    <p>
      v-for:
      <span v-for="(item, index) in arrStr" :key="index">{{ item }}</span>
    </p>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
const text: Ref<string> = ref('我是模板语法')
let num: number = 1
const isNumber: boolean = true
const arrNum: number[] = [1, 2, 3]
const arrStr: string[] = ['你', '好']
const v_text: string = '我是v-text'
const v_html: string = '<a style="color:red">我是v-html</a>'
const event: string = 'click'
const clickParent: () => void = () => {
  console.log('点击了p标签')
}
const clickChild: () => void = () => {
  console.log('点击了button标签,num+1')
}
const styles = { color: 'red', fontSize: '20px' }
</script>
<style scoped>
.a {
  color: green;
}
.b {
  border: 1px solid red;
}
.c {
  background-color: blue;
}
</style>
