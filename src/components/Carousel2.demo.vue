<demo>
自动轮播
</demo>

<template>
  <h3>autoPlay:自动轮播,duration:自动轮播的间隔时长(ms)</h3>
  <div class="home-banner">
    <Carousel :sliders="sliders" :autoPlay="true" :duration="1500"/>
  </div>
</template>

<script lang="ts" setup>
import {reactive} from "vue"
import Carousel from "../lib/Carousel.vue"
import imgUrl1 from "../assets/1.jpg"
import imgUrl2 from "../assets/2.jpg"
import imgUrl3 from "../assets/3.jpg"
import imgUrl4 from "../assets/4.jpg"
import imgUrl5 from "../assets/5.jpg"

const sliders = reactive([
  {imgUrl: imgUrl1},
  {imgUrl: imgUrl2},
  {imgUrl: imgUrl3},
  {imgUrl: imgUrl4},
  {imgUrl: imgUrl5},
])

</script>
<style scoped lang="scss">
.home-banner {
  width: 750px;
  height: 500px;
}

h3 {
  font-size: 20px;
  margin-bottom: 15px;
}

@media (max-width: 500px) {
  .home-banner {
    width: 100%;
    height: 241px;
  }
}
</style>