<template>
  <div>
    <h1>Carousel 组件示例</h1>
    <Demo :component="Carousel1Demo"/>
    <Demo :component="Carousel2Demo"/>
  </div>
</template>

<script lang='ts' setup>
import Carousel1Demo from "./Carousel1.demo.vue"
import Carousel2Demo from "./Carousel2.demo.vue"
import Demo from "./Demo.vue"

</script>

<style lang="scss" scoped>
h1 {
  font-size: 30px;
  font-weight: 900;
}
</style>