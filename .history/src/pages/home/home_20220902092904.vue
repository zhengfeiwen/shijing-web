<template>
  <div>
      <h5>num:{{num}}</h5>
      <div @click="addNum">点击num+1</div>
      <div @click="reduceNum">点击num-1</div>
  </div>
</template>
<script setup>
import { ref,computed } from '@vue/reactivity'
import { useStore } from 'vuex'
const store =  useStore ()

let num = 111
const addNum = () => {
  num.value++
}
const reduceNum = () => {
  store.dispatch('reduce')
}
</script>