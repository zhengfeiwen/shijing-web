<template>
  <a-layout>
    <a-layout-header>Header</a-layout-header>
    <a-layout-content>Content</a-layout-content>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>
<script setup>
import  { useRouter } from 'vue-router'
const router = useRouter()
const onClick = () => {
  router.push('/home')
}
</script>