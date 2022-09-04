<!--
 * @Author: emperor
 * @LastEditors: emperor
-->
<template>
  <div class="home-container">
    <a-layout>
      <a-layout-header id="home-header">
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
        <a-row class="ad-video margin-bottom-1">
          <a-carousel :default-current="1" @change="handleChange" :style="{ height: '211px', width: '100vw' }">
          <a-carousel-item>
            <vue3VideoPlay
              ref="vueMiniPlayer"
              width="100vw"
              height="211px"
              title="识荆"
              :src="options.src"
              :type="options.type"
              :autoPlay="false"
              />
          </a-carousel-item>
          <a-carousel-item v-for="ad in ads" :key="ad.src">
            <img :src="ad.src" :style="{ width: '100%'}"/>
          </a-carousel-item>
        </a-carousel>
        </a-row>
        <a-row class="margin-bottom-1">
          <a-col :span="8" v-for="func in funcs" :key="func.src" class="center">
            <a-avatar :size="50"><img alt="avatar" :src="func.src" /></a-avatar>
            <p>{{func.title}}</p>
          </a-col>
        </a-row>
        <a-row class="tuijian margin-bottom-1">
          <img src="https://static.shijing.online/images/applet/tuijian.png" :style="{ width: '100%'}"/>
        </a-row>
        <a-row class="margin-bottom-1">
          <a-tabs default-active-key="1">
            <a-tab-pane key="1" title="精品课程">
              <a-row class="corse-container" v-for="course in courses" :key="course.id">
                <a-col :span="8">
                  <img :src="course.src" :style="{ width: '100%'}"/>
                </a-col>
                <a-col :span="16">
                  <P></P>
                  <P></P>
                  <P></P>
                </a-col>
              </a-row>
            </a-tab-pane>
          </a-tabs>
        </a-row>
      </a-layout-content>
      <a-layout-footer>
        
      </a-layout-footer>
    </a-layout>
    <a-back-top target-container="#home-header" :style="{ position: 'absolute' }" />
  </div>
</template>
<script lang="ts" setup>
  import { ref, reactive, onMounted } from 'vue'
  import  { useRouter } from 'vue-router'
  
  const router = useRouter()

  let player = null

  const vueMiniPlayer: any = ref()

  const funcs = [
    { title: '填报必听', src: '/src/assets/icon/biting.png' },
    { title: '课程目录', src: '/src/assets/icon/mulu.png' },
    { title: '会员开通', src: '/src/assets/icon/vip.png' },
    { title: '院校查询', src: '/src/assets/icon/college.png' },
    { title: '专业查询', src: '/src/assets/icon/major.png' },
    { title: '一分一段', src: '/src/assets/icon/score.png' }
  ]

  const ads = reactive([
    { src: 'https://static.shijing.online/images/applet/ad1.png' }
  ])

  const options = reactive({
    src: "https://static.shijing.online/video/xuanchuan.mp4", //视频源
    type: 'video/mp4', //视频类型
  })

  let courses = reactive([])

  const handleChange = () => {
    vueMiniPlayer._rawValue.pause()
  }

  const initCourse = () => {
    
  }
  

  onMounted(() => {
  })
</script>
<style lang="scss" src="./index.scss"></style>