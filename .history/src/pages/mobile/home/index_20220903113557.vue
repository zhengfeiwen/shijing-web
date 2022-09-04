<template>
  <div class="home-container">
    <a-layout>
      <a-layout-header>Header</a-layout-header>
      <a-layout-content>Content</a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </div>
</template>
<script setup>
import  { useRouter } from 'vue-router'
const router = useRouter()
</script>
<style lang="scss" src="./index.scss"></style>