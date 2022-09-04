<template>
  <div>
      <h5>num:{{num}}</h5>
      <div @click="num++">点击num+1</div>
      <div @click="reduceNum">点击num-1</div>
  </div>
</template>
<script setup>
import { ref,h } from '@vue/reactivity'
import { useStore } from 'vuex'
const store =  useStore ()

let num = ref(111)
h('div', { class: 'bar', innerHTML: 'hello' })
const addNum = () => {
  num++
}
const reduceNum = () => {
  store.dispatch('reduce')
}
</script>