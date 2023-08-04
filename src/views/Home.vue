<template>
  <div>
    <div class="topnavAndBanner">
      <topnav/>
      <div class="banner">
        <h1>yummy UI</h1>
        <h2>一个厉害的UI框架</h2>
        <p class="actions">
          <a href="https://github.com/Mianxiong/yummy-ui-vue3">GitHub</a>
          <router-link to="/doc">Get Started</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-Vue"/>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>骄傲地使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-ts"/>
          </svg>
          <h3>基于 TypeScript</h3>
          <p>源代码采用 TypeScript 书写</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-light"/>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import Topnav from "../components/Topnav.vue";


</script>
<style lang="scss">
$green: #02bcb0;
$color: #007974;
$border-radius: 4px;
topnavAndBanner {
  background: linear-gradient(
          145deg,
          rgba(227, 255, 253, 1) 0%,
          rgba(183, 233, 230, 1) 100%
  );
  clip-path: ellipse(80% 60% at 50% 40%);
  padding-bottom: 88px;
}

@media (max-width: 500px) {
  .topnavAndBanner {
    background: linear-gradient(
            145deg,
            rgba(227, 255, 253, 1) 0%,
            rgba(183, 233, 230, 1) 100%
    );
    clip-path: ellipse(80% 60% at 50% 40%);
    padding-bottom: 36px;
  }
}

.features {
  margin: 64px auto;
  padding: 0 16px;
  @media (min-width: 800px) {
    width: 800px;
    > ul {
      > li {
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
    > ul {
      > li {
        width: 33.3333%;
      }
    }
  }

  > ul {
    display: flex;
    flex-wrap: wrap;

    > li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        'icon title'
        'icon text';
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      > svg {
        grid-area: icon;
        width: 72px;
        height: 72px;
      }

      > h3 {
        grid-area: title;
        font-size: 28px;
      }

      > p {
        grid-area: text;
      }
    }
  }
}

@media (max-width: 500px) {
  .features {
    margin: 10px auto;
    padding: 0 16px;
  }
}

.banner {
  padding: 150px 0 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: $color;

  > .actions {
    padding: 8px 0;

    a {
      margin: 30px 8px;
      background: $green;
      color: white;
      display: inline-block;
      border-radius: $border-radius;
      padding: 8px 24px;
      font-size: 20px;

      &:hover {
        text-decoration: none;
      }
    }
  }
}

@media (max-width: 500px) {
  .banner {
    padding: 100px 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: $color;

    > .actions {
      padding: 8px 0;

      a {
        margin: 8px;
        background: $green;
        color: white;
        display: inline-block;
        border-radius: $border-radius;
        padding: 8px 24px;
        font-size: 20px;

        &:hover {
          text-decoration: none;
        }
      }
    }
  }
}

.topnav {
  display: flex;
  padding: 16px 60px;
  box-shadow: 0 5px 5px rgb(51 51 51 / 10%);
  background: linear-gradient(
          145deg,
          rgb(227, 255, 253) 0%,
          rgb(183, 233, 230) 100%
  );

  > .logo {
    max-width: 6em;
    margin-right: auto;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }
}
</style>