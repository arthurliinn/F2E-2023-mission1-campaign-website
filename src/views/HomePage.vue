<template>
  <div class="main">
    <main-nav></main-nav>
    <main-content></main-content>
    <main-footer></main-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainNav from '@/components/MainNav.vue';
import MainContent from '@/components/MainContent.vue';
import MainFooter from '@/components/MainFooter.vue';


export default defineComponent({
  components: { MainNav, MainContent, MainFooter },
name:'HomePage',

});
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
.main{
  height: auto;
  border: 5px solid $mainColor;
//   max-width: 1920px;
}

</style>