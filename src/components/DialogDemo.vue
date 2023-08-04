<template>
  <!--  <div>Dialog示例</div>-->
  <!--  <h1>示例1</h1>-->
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
  <div>
    <h1>Dialog 组件示例</h1>
    <Demo :component="Dialog1Demo"/>
  </div>
</template>

<script lang="ts" setup>
import Dialog1Demo from "./Dialog1.demo.vue"
import Demo from "./Demo.vue"

</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>