<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component"/>
    </div>
    <div class="demo-actions">
      <Button @click="toggleCode">{{ codeVisible ? "隐藏代码" : "查看代码" }}</Button>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre class="language-html" v-html="html"/>
    </div>
  </div>
</template>
<script lang='ts' setup>
import Button from "../lib/Button.vue"
import "prismjs"
import "../../node_modules/prismjs/themes/prism-tomorrow.css"
import {computed, ref} from "vue"

interface Props {
  component?: object
}

const Prism = (window as any).Prism
const props = defineProps<Props>()

const html = computed(() => {
  return Prism.highlight(
      props.component.__sourceCode,
      Prism.languages.html,
      "html"
  )
})
const codeVisible = ref(false)
const toggleCode = () => (codeVisible.value = !codeVisible.value)

</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  > h2 {
    font-size: 25px;
    font-weight: 700;
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