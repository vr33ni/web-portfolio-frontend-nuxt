<template>
  <div id="wrapper-timeline" v-if="hasItems" class="wrapper-timeline">
    <div class="row">
      <div class="col-lg-8 mt-3 mb-3">
        <div class="sub-section-title">
          <h3 id="prof">Professional Experience</h3>
        </div>

        <div
          v-for="(
            timelineContent, timelineIndex
          ) in professionalExperienceItemTimeline"
          :key="timelineIndex.name"
          :class="
            wrapperItemClass(
              timelineIndex.name,
              professionalExperienceItemTimeline
            )
          "
        >
          <div class="section-year ms-2 mt-3">
            <p v-if="hasYear(timelineContent)" class="year">
              {{ getYear(timelineContent) }}
            </p>
          </div>
          <ProfessionalExperienceItem
            :item-timeline="timelineContent"
            :date-locale="dateLocale"
            :color-dots="colorDots"
          />
        </div>
      </div>
      <div class="col-lg-4 mt-3 mb-3">
        <Skills :skill-tags="skillTags" />
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-lg-8 mt-3 mb-3">
        <div id="edu" class="sub-section-title mb-50">
          <h3 id="edu">Education</h3>
        </div>
        <div
          v-for="(timelineContent, timelineIndex) in educationItemTimeline"
          :key="timelineIndex.name"
          :class="wrapperItemClass(timelineIndex.name, educationItemTimeline)"
        >
          <div class="section-year ms-2">
            <p v-if="hasYear(timelineContent)" class="year">
              {{ getYear(timelineContent) }}
            </p>
          </div>
          <EducationItem
            :item-timeline="timelineContent"
            :date-locale="dateLocale"
            :color-dots="colorDots"
          />
        </div>
      </div>
     
    </div>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { DefaultToastOptions } from "~/config/defaultToastOptions";
import {
  computed,
  defineComponent,
  toRefs,
  ref,
} from "@nuxtjs/composition-api";

interface MyComponentProps {
  professionalExperienceItemTimeline: Array<Object>;
  educationItemTimeline: Array<Object>;
  colorDots: String;
  dateLocale: String;
  skillTags: Array<Object>;
}

export default defineComponent<MyComponentProps>({
  name: "Resume",
  props: {
    professionalExperienceItemTimeline: Array,
    educationItemTimeline: Array,
    colorDots: String,
    dateLocale: String,
    skillTags: Array,
  },

  setup() {

    const uniqueYear = ref("true");
    const order = ref("desc");
    const uniqueTimeline = ref({
      type: Boolean,
      default: false,
    });
    const hasItems = computed(() => {
      return true;
      //   if (store.state.timelineProfessional.timelineEntries != null) {
      //     return true;
      //   } else return false;
    });

    function wrapperItemClass(timelineIndex: any, timeline: any) {
      const isSameYearPreviousAndCurrent = checkYearTimelineItem(
        timelineIndex,
        timeline
      );
      const isUniqueYear =
        uniqueYear && isSameYearPreviousAndCurrent && order !== undefined;
      return {
        "wrapper-item": true,
        "unique-timeline": uniqueTimeline.value || isUniqueYear,
      };
    }

    function checkYearTimelineItem(timelineIndex: any, timeline: any) {
      const previousItem = timeline[timelineIndex - 1];
      const nextItem = timeline[timelineIndex + 1];
      const currentItem = timeline[timelineIndex];
      if (!previousItem || !nextItem) {
        return false;
      }
      const fullPreviousYear = getYear(previousItem);
      const fullNextYear = getYear(nextItem);
      const fullCurrentYear = getYear(currentItem);
      return (
        (fullPreviousYear === fullCurrentYear &&
          fullCurrentYear === fullNextYear) ||
        fullCurrentYear === fullNextYear
      );
    }
    function getYear(dataTimeline: any) {
      return new Date(dataTimeline.data.from._seconds * 1000).getFullYear();
    }

    function hasYear(dataTimeline: any) {
      if (dataTimeline.data.from._seconds) {
        return true;
      } else return false;
    }

    return { hasItems, uniqueYear, order, uniqueTimeline, wrapperItemClass, hasYear, getYear};
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/theme/_variables.scss";
</style>
