<template>
  <div class="video">
    <video-player class="video-player vjs-custom-skin"
            ref="videoPlayer"
            :playsinline="true"
            :options="data.playerOptions">
    </video-player>
  </div>
</template>
 
<script>
import { reactive } from '@vue/reactivity'
 
export default {
  name: 'Video',
  props:['video','cover'],
  setup(props){
    let data = reactive({
         playerOptions: {
          playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
          autoplay: false, // 如果为true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: false, // 是否视频一结束就重新开始。
          preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: 'zh-CN',
          aspectRatio: '4:3', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [{
            type: "video/mp4", // 类型
            src: 'https://vd3.bdstatic.com/mda-maunc8q8gpwgjts8/sc/cae_h264_nowatermark/1611907885/mda-maunc8q8gpwgjts8.mp4?v_from_s=hkapp-haokan-hbf&auth_key=1660703434-0-0-645160ca4ccdbc9c0c2088e7d56dd8b9&bcevod_channel=searchbox_feed&pd=1&cd=0&pt=3&logid=0034644783&vid=11220038343555649881&abtest=103890_1-103579_2&klogid=0034644783' // url地址
            // src: props.video // url地址
          }],
          poster: props.cover, // 封面地址
          notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
          controlBar: {
            timeDivider: true, // 当前时间和持续时间的分隔符
            durationDisplay: true, // 显示持续时间
            remainingTimeDisplay: false, // 是否显示剩余时间功能
            fullscreenToggle: true // 是否显示全屏按钮
          }
        }
    })
    return {
      data
    }
  }
  
}
</script>
 
<style scoped>
  .video{
    width: 100%;
    height: 100%;
    margin: auto;
  }
</style>
<style>
.video .vjs_video_3-dimensions.vjs-fluid {
  padding-top: 57%;
}
.video .vjs-custom-skin > .video-js .vjs-big-play-button {
    /* background-color: rgba(0,0,0,0.45); */
    font-size: 3.5em;
    border-radius: 50%;
    height: 2em !important;
    width: 2em !important;
    line-height: 2em !important;
    margin-top: -1em !important;
    margin-left: -1em
}
.video .vjs-poster{
background-position:center
}
</style>
 