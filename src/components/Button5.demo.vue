<demo>
支持显示加载中
</demo>
<template>
  <div>
    <Button loading>loading...</Button>
    <Button :loading="loading" @click="stopLoading">点我关闭loading</Button>
  </div>
</template>

<script lang="ts" setup>
import Button from "../lib/Button.vue"
import {ref} from "vue";

const loading = ref(true)
const stopLoading = () => {
  loading.value = false
}

</script>

<style lang="scss" scoped>
h3 {
  font-size: 20px;
  margin-bottom: 15px;
}
</style>