<template>
  <div class="wrapper main">
    <Header />

    <main
      role="main"
      class="main__container p-3"
      :class="{ 'main__container--shrink': !getIsSmallScreen && visible}"
    >
      <nuxt />
    </main>
  </div>
</template>

<script lang="ts">

import { Component } from "vue-property-decorator";
import Vue from "vue";

import Header from "./header.vue";

@Component({
  components: {
    Header,
  },
})
export default class Default extends Vue {
  [x: string]: any;
  visible = true;
  smallScreenWidth = 720;
  extraSmallScreenWidth = 375;


  getIsSmallScreen(): boolean { 
    return this.$storeModules.screenSize !== undefined ?  this.$storeModules.screenSize.IsSmallScreen : false;
  }

  mounted() {
    this.init();
    window.addEventListener("resize", this.init);
  }

  init() {
    if (window.innerWidth < this.extraSmallScreenWidth) {
       this.$storeModules.screenSize.setExtraSmallScreen();
      this.visible = false;
    } else if (window.innerWidth < this.smallScreenWidth) {
       this.$storeModules.screenSize.setSmallScreen();
      this.visible = false;
    } else {
       this.$storeModules.screenSize.unsetExtraSmallScreen();
      this.$storeModules.screenSize.unsetSmallScreen();
      this.visible = true;
    }
  }

  getBootstrapBreakpointLG(): string {
    return getComputedStyle(document.documentElement).getPropertyValue(
      "--breakpoint-lg"
    );
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/theme/_variables.scss";

.main {
  &__container {
    position: absolute;
    top: $header-height;
    margin-top: 1rem;
    bottom: 0;
    right: 0;
    left: 0;
    transition: left 0.3s cubic-bezier(1, 0, 0, 1);
    overflow: auto;
    //background-color: #f9f9f9;
    // &--shrink {
    //   left: $sidebar-width;
    // }
  }
}
</style>
