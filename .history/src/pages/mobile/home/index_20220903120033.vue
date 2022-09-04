<template>
  <div class="home-container">
    <a-layout>
      <a-layout-header>
        <a-avatar><img
          alt="avatar"
          src="@/assets/logo.png"
        /></a-avatar>
        <a-input class="search-input" size="small" placeholder="Please enter something" allow-clear />
      </a-layout-header>
      <a-layout-content>Content</a-layout-content>
    </a-layout>
  </div>
</template>
<script setup>
import  { useRouter } from 'vue-router'
const router = useRouter()
</script>
<style lang="scss" src="./index.scss"></style>