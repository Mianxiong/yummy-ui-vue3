<template>
  <!--  <div>-->
  <!--    button示例-->
  <!--  </div>-->
  <!--  <h1>示例1</h1>-->
  <!--  <div>-->
  <!--    <Button @click="onClick">你好</Button>-->
  <!--    <Button theme="button">你好</Button>-->
  <!--    <Button theme="link">你好</Button>-->
  <!--    <Button theme="text">你好</Button>-->
  <!--  </div>-->
  <!--  <h1>示例2</h1>-->
  <!--  <div>-->
  <!--    <div>-->
  <!--      <Button size="big">大大大</Button>-->
  <!--      <Button>普普通</Button>-->
  <!--      <Button size="small">小小小</Button>-->
  <!--    </div>-->
  <!--    <div>-->
  <!--      <Button theme="link" size="big">大大大</Button>-->
  <!--      <Button theme="link">普普通</Button>-->
  <!--      <Button size="small" theme="link">小小小</Button>-->
  <!--    </div>-->
  <!--    <div>-->
  <!--      <Button size="big" theme="text">大大大</Button>-->
  <!--      <Button theme="text">普普通</Button>-->
  <!--      <Button size="small" theme="text">小小小</Button>-->
  <!--    </div>-->
  <!--    <h1>示例3</h1>-->
  <!--    <div>-->
  <!--      <Button level="main">主要按钮</Button>-->
  <!--      <Button>普通按钮</Button>-->
  <!--      <Button level="danger">危险按钮</Button>-->
  <!--    </div>-->
  <!--    <div>-->
  <!--      <Button theme="link" level="main">主要链接按钮</Button>-->
  <!--      <Button theme="link">普通链接按钮</Button>-->
  <!--      <Button theme="link" level="danger">危险链接按钮</Button>-->
  <!--    </div>-->
  <!--    <div>-->
  <!--      <Button theme="text" level="main">主要文字按钮</Button>-->
  <!--      <Button theme="text">普通文字按钮</Button>-->
  <!--      <Button theme="text" level="danger">危险文字按钮</Button>-->
  <!--    </div>-->
  <!--    <h1>示例4</h1>-->
  <!--    <div>-->
  <!--      <Button disabled>禁用按钮</Button>-->
  <!--      <Button theme="link" disabled>禁用链接按钮</Button>-->
  <!--      <Button theme="text" disabled>禁用按钮</Button>-->
  <!--    </div>-->
  <!--    <h1>示例5</h1>-->
  <!--    <div>-->
  <!--      <Button loading>加载中</Button>-->
  <!--      <Button>加载完毕</Button>-->
  <!--    </div>-->
  <!--  </div>-->
  <h1>Button 示例</h1>
  <h1>示例1</h1>
  <Demo :component="Button1Demo"/>
  <Demo :component="Button2Demo"/>
  <Demo :component="Button3Demo"/>
  <Demo :component="Button4Demo"/>
  <Demo :component="Button5Demo"/>
</template>
<script lang='ts' setup>
import Demo from "./Demo.vue"
import Button1Demo from "./Button1.demo.vue"
import Button2Demo from "./Button2.demo.vue"
import Button3Demo from "./Button3.demo.vue"
import Button4Demo from "./Button4.demo.vue"
import Button5Demo from "./Button5.demo.vue"

const onClick = () => {
  console.log("hi")
}
</script>

<style>
</style>