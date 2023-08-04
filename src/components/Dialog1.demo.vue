<demo>
常规用法
</demo>

<template>
  <!--  <Button @click="toggle">toggle</Button>-->
  <!--  <Dialog v-model:visible="visible" :ok="confirm" :cancel="cancel">-->
  <!--    <template v-slot:content>-->
  <!--      <div>hi</div>-->
  <!--      <div>hi2</div>-->
  <!--    </template>-->
  <!--    <template v-slot:title>-->
  <!--      <strong>加粗的标题</strong>-->
  <!--    </template>-->
  <!--  </Dialog>-->
  <h3>你可以使用默认插槽往内部填充内容，你也可以使用footer插槽往底部填充内容</h3>
  <Button level="main" @click="openDialog">打开Dialog</Button>
  <Dialog title="你打开了Dialog" v-model:visible="visibleDialog">
    <h1>路飞</h1>
    <template #footer>
      <Button level="normal" size="big" @click="visibleDialog=false" style="margin-right:20px">取消</Button>
      <Button level="main" size="big" @click="visibleDialog=false">确认</Button>
    </template>
  </Dialog>
</template>

<script lang="ts" setup>
import Button from "../lib/Button.vue"
import Dialog from "../lib/Dialog.vue";
import {ref} from "vue"

const visibleDialog = ref(false)
const openDialog = () => {
  visibleDialog.value = true
}

</script>

<style lang="scss" scoped>
h3 {
  font-size: 20px;
  margin-bottom: 15px;
}
</style>