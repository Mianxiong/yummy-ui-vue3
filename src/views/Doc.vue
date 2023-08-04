<template>
  <div class="layout">
    <Topnav :toggleMenuButtonVisible="true" class="nav"/>
    <div class="content">
      <aside v-if="asideVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs组件</router-link>
          </li>
          <li>
            <router-link to="/doc/carousel">Carousel组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog组件</router-link>
          </li>
          <li>
            <router-link to="/doc/checkbox">Checkbox组件</router-link>
          </li>
          <li>
            <router-link to="/doc/confirm">Confirm组件</router-link>
          </li>
          <li>
            <router-link to="/doc/message">Message组件</router-link>
          </li>
          <li>
            <router-link to="/doc/bread">Bread组件</router-link>
          </li>
          <li>
            <router-link to="/doc/city">City Select组件</router-link>
          </li>
          <li>
            <router-link to="/doc/pagination">Pagination组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Topnav from "../components/Topnav.vue";
import {inject, Ref} from "vue"

const asideVisible = inject<Ref<boolean>>("asideVisible")


</script>
<style lang="scss" scoped>
$aside-index: 10;
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    flex-shrink: 0;
    background-color: #f9f9f9;
  }

  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  margin-top: 15px;
  display: flex;

  > aside {
    flex-shrink: 0;
    padding: 100px 0;
  }

  > main {
    flex-grow: 1;
    padding: 20px 0px 20px 100px;
    background-color: #f9f9f9;
  }

  @media (max-width: 500px) {
    > main {
      padding: 16px 0px 16px 16px;
      width: 100%;
      overflow: auto;
    }
  }
}

aside {
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  z-index: $aside-index;
  border-right: 1px solid rgba(0, 0, 0, 0.15);
  background-color: #f9f9f9;

  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }

  > ol {
    > li {
      > a {
        padding: 4px 16px;
        display: block;
        text-decoration: none;
      }

      .router-link-active {
        background-color: #e5f2fa;
      }
    }
  }

  main {
    overflow: auto;
  }
}
</style>

<!--<style lang="scss" scoped>-->
<!--$aside-index: 10;-->
<!--.layout {-->
<!--  display: flex;-->
<!--  flex-direction: column;-->
<!--  height: 100vh;-->

<!--  > .nav {-->
<!--    flex-shrink: 0;-->
<!--    background-color: #f9f9f9;-->
<!--  }-->

<!--  > .content {-->
<!--    flex-grow: 1;-->
<!--    padding-top: 60px;-->
<!--    padding-left: 156px;-->
<!--    @media (max-width: 500px) {-->
<!--      padding: 16px;-->
<!--      width: 100%;-->
<!--      overflow: auto;-->
<!--    }-->
<!--  }-->
<!--}-->

<!--.content {-->
<!--  margin-top: 15px;-->
<!--  display: flex;-->

<!--  > aside {-->
<!--    flex-shrink: 0;-->
<!--    padding: 100px 0;-->
<!--  }-->

<!--  > main {-->
<!--    flex-grow: 1;-->
<!--    //padding: 16px;-->
<!--    //background: white;-->
<!--    padding: 20px 0px 20px 100px;-->
<!--    background-color: #f9f9f9;-->
<!--  }-->

<!--  @media (max-width: 500px) {-->
<!--    > main {-->
<!--      padding: 16px;-->
<!--      padding: 16px 0px 16px 16px;-->
<!--      width: 100%;-->
<!--      overflow: auto;-->
<!--    }-->
<!--  }-->
<!--}-->

<!--aside {-->
<!--  background: lightblue;-->
<!--  width: 150px;-->
<!--  padding: 16px 0;-->
<!--  position: fixed;-->
<!--  top: 0;-->
<!--  left: 0;-->
<!--  padding-top: 70px;-->
<!--  height: 100%;-->

<!--  z-index: $aside-index;-->

<!--  > h2 {-->
<!--    margin-bottom: 4px;-->
<!--    padding: 0 16px;-->
<!--  }-->

<!--  > ol {-->
<!--    > li {-->
<!--      > a {-->
<!--        padding: 4px 16px;-->
<!--        display: block;-->
<!--        text-decoration: none;-->
<!--      }-->

<!--      .router-link-active {-->
<!--        background: white;-->
<!--      }-->
<!--    }-->
<!--  }-->

<!--  main {-->
<!--    overflow: auto;-->
<!--  }-->
<!--}-->
<!--</style>-->