<demo>
使用$message()方法
</demo>

<template>
  <h3>$message()方法接收一个对象参数</h3>
  <h3>type:消息提示类型(warn,error,success);text:消息提示文本</h3>
  <div>
    <Button level="main" size="normal" @click="openSuccessMessage">点我打开成功消息提示框</Button>
  </div>
  <div>
    <Button level="main" size="normal" @click="openWarnMessage">点我打开警告消息提示框</Button>
  </div>
  <div>
    <Button level="main" size="normal" @click="openErrorMessage">点我打开失败消息提示框</Button>
  </div>
</template>

<script lang="ts" setup>
import Button from "../lib/Button.vue"

import {getCurrentInstance} from "vue";

const {
  appContext: {
    config: {
      globalProperties: {$message},
    },
  },
} = getCurrentInstance()
const openSuccessMessage = () => {
  $message({
    type: "success",
    text: "渐渐长大了，我背上行囊，奔向我向往的大海。",
  })
}
const openWarnMessage = () => {
  $message({
    type: "warn",
    text: "梦想简直就像这个世界的缩影一样，一场闹剧。",
  })
}
const openErrorMessage = () => {
  $message({
    type: "error",
    text: "我的船下没有手下，只有伙伴。",
  })
}

</script>
<style lang="scss" scoped>
h3 {
  font-size: 20px;
  margin-bottom: 15px;
}

div {
  margin-bottom: 15px;
}
</style>