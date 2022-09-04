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

const num = computed (()=>{
  return store.state.num
})
const addNum = () => {
  store.dispatch('add')
}
const reduceNum = () => {
  store.dispatch('reduce')
}
</script>