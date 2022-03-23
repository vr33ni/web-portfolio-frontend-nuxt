<template>
  <div class="card" style="border: 0px">
    <div class="card-body">
      <h5 id="skills" class="card-title">Programming languages & tools</h5>
      <div
        v-for="tag in skillTags"
        :key="tag.id"
        class="tag"
        :title="tag.id"
      >
        {{ tag.data.name }}
      </div>
    </div>
  </div>
</template>



<script lang="ts">
import { defineComponent, toRefs } from "@nuxtjs/composition-api";

interface MyComponentProps {
  skillTags: Array<Object>;
}

export default defineComponent<MyComponentProps>({
  name: "Skills",
  props: {
    skillTags: Array,
  },

});
</script>

<style lang="scss" scoped>
@import "@/assets/theme/_variables.scss";

</style>
