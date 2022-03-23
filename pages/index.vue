<template>
  <div class="app">
    <div class="container">
      <section class="about-area section-padding bg-light mb-50">
        <AboutMeCard :profile-img="profileImg" />
      </section>
      <section class="resume mb-50">
        <hr class="styleShadow" />
        <h2 id="resume">Resume</h2>
        <hr class="styleShadow" />
        <Resume
          :professional-experience-item-timeline="
            dataTimelineProfessionalExperience
          "
          :education-item-timeline="dataTimelineEducation"
          :date-locale="dateLocale"
          :color-dots="colorDots"
          :skill-tags="skillTags"
        />
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  ref,
  useStore,
} from "@nuxtjs/composition-api";

export default defineComponent({
  name: "App",
  components: {},

  setup() {
    const store = useStore();

    const colorDots = ref("#2da1bf");
    const dateLocale = ref("");
    // const messageWhenNoItems = ref("No articles found.");

    onMounted(async () => {
      try {
        await store.dispatch("branding/fetchProfileImg");
        await store.dispatch("professionalExperience/fetchProgrammingSkills");
        await store.dispatch("professionalExperience/fetchEntries");
        await store.dispatch("education/fetchEntries");
      } catch (error: unknown) {
        const err = error as any; // own interface could be implemented here
        console.log(err);
      }
    });

    const profileImg = computed(() => {
      return store.getters["branding/ProfileImg"] !== undefined
        ? store.getters["branding/ProfileImg"]
        : "";
    });

    const skillTags = computed(() => {
      return store.getters["professionalExperience/ProgrammingSkills"] !==
        undefined
        ? store.getters["professionalExperience/ProgrammingSkills"]
        : "";
    });

    function GetSortedOrderByNestedObjProp(prop: string, arr: Array<Object>) {
      arr.sort(function (a: any, b: any) {
        return b.data.from._seconds - a.data.from._seconds;
      });

      return arr;
    }
    const dataTimelineProfessionalExperience = computed(() => {
      if (store.getters["professionalExperience/ProfEntries"] !== undefined) {
        const entries = store.getters["professionalExperience/ProfEntries"];
        const array: Array<Object> = []; // since the data from firebase is retrieved as an object of nested objects, we will transoform it to an array that can be looped over
        Object.keys(entries).forEach((key) => {
          array.push(entries[key]);
        });
        return GetSortedOrderByNestedObjProp("from", array);
      }
    });

    const dataTimelineEducation = computed(() => {
      return store.getters["education/EduEntries"] !== undefined
        ? store.getters["education/EduEntries"]
        : "";
    });

    return {
      profileImg,
      skillTags,
      colorDots,
      dateLocale,
      dataTimelineProfessionalExperience,
      dataTimelineEducation,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/theme/_variables.scss";
</style>
