<template>
  <!--  <div>tabs示例</div>-->
  <!--  <h1>示例1</h1>-->
  <!--  <Tabs v-model:selected="x">-->
  <!--    <Tab title="导航1">内容1</Tab>-->
  <!--    <Tab title="导航2">内容2</Tab>-->
  <!--  </Tabs>-->
  <h1>Tabs 示例</h1>
  <Demo :component="Tabs1Demo"/>
</template>
<script lang='ts' setup>
import Demo from "./Demo.vue"
import Tabs1Demo from "./Tabs1.demo.vue"

</script>