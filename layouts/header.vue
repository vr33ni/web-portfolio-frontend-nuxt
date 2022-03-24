<template>
  <nav
    class="
      navbar
      fixed-top
      navbar-expand-lg navbar-light
      bg-light
      shadow
      p-3
      mb-5
      bg-body
      rounded
    "
  >
    <div class="container">
      <b-navbar-brand style="margin-left: 1em" href="/">
        <img :src="logo" alt="Logo cap" width="40" height="34" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="navbar-nav ms-auto mb-2 mb-lg-0">
          <b-nav-item href="#about">About</b-nav-item>
          <b-nav-item-dropdown text="Resume">
            <b-dropdown-item href="#prof"
              >Professional experience</b-dropdown-item
            >
            <b-dropdown-item href="#edu">Education</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item href="#">Blog</b-nav-item>
          <b-nav-item href="#">Contact</b-nav-item>
          <b-nav-item href="#">Privacy policy</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </nav>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  useStore,
} from "@nuxtjs/composition-api";

export default defineComponent({
  name: "Header",

  setup() {
    const store = useStore();

    onMounted(async () => {
      try {
        await store.dispatch("branding/fetchLogo");
      } catch (error: unknown) {
        const err = error as any; // own interface could be implemented here
        console.log("error fetching logo")
      }
    });

    const logo = computed(() => {
       return store.getters['branding/Logo'] !== undefined ? store.getters['branding/Logo'] : ""
    });

    return { logo };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/theme/_variables.scss";
</style>
