<template>
  <div class="latest_events">
    <div class="top_banner">
      <div class="title_container">
        <div class="title_smallText">
          <img src="/img/bigTitle_smallText.svg" alt="">
          <img src="/img/bigTitle.svg" alt="">
        </div>
      </div>
      <div class="candidate_img">
          <img src="/img/candidate.png" alt="">
      </div>
    </div>

  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent ({
  name:'LatestEvents"'
});
</script>
<style lang="scss">
  @import '@/assets/scss/components/lastestEvents.scss';
</style>