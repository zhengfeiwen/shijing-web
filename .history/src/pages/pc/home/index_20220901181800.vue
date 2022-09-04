<template>
  <div>
      home..
      <div @click="onClick">点击跳转到home页面</div>
      <router-link to="/home">点击跳转到home页面</router-link>
  </div>
</template>
<script setup>
import  { useRouter } from 'vue-router'
const router = useRouter()
const onClick = () => {
  router.push('/home')
}
</script>