<template>
  <div class="main_content">
    <latest-events></latest-events>
    <policy-issues></policy-issues>
    <small-donation></small-donation>
    <service-mail></service-mail>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import LatestEvents from '@/components/content/LatestEvents.vue';
import PolicyIssues from "./content/PolicyIssues.vue";
import SmallDonation from "./content/SmallDonation.vue";
import ServiceMail from "./content/ServiceMail.vue";



export default defineComponent ({
  components: { LatestEvents, PolicyIssues, SmallDonation, ServiceMail,},
  name:'MainContent'
});
</script>
<style lang="scss">

</style>