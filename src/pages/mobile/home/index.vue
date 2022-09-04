<template>
  <div class="home-container">
    <a-layout>
      <a-layout-header>
        <a-avatar><img
          alt="avatar"
          src="@/assets/logo.png"
        /></a-avatar>
        <a-input class="search-input" size="medium" placeholder="请输入课程" allow-clear >
          <template #prefix>
            <icon-search />
          </template>
        </a-input>
      </a-layout-header>
      <a-divider></a-divider>
      <a-layout-content>
        <a-row class="ad-video">
          <MyVideo video="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" cover=""  />
        </a-row>
      </a-layout-content>
    </a-layout>
  </div>
</template>
<script setup>
  import { ref, reactive } from 'vue'
  import  { useRouter } from 'vue-router'
  import MyVideo from '@/components/video'
  const router = useRouter()
</script>
<style lang="scss" src="./index.scss"></style>