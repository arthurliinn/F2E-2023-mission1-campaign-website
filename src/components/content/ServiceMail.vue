<template>
  <div class="service_mail">
    <div class="service_container">
      <div class="left_container">
        <img class="title" src="@/assets/images/service_mail_title.svg" alt="">
        <img class="mobile_title" src="@/assets/images/service-mail-title.svg" alt="">
        <div>
          <h4>您的聲音，我們的行動！</h4>
          <h4 class="discrition_PC">親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到您的建議。分享您的想法，一同為我們的未來打造更美好！</h4>
          <p class="discrition_mobile body_normal">親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到您的建議。分享您的想法，一同為我們的未來打造更美好！</p>
        </div>
      </div>
      <div class="right_container">
        <input type="text" placeholder="您的姓名">
        <input type="text" placeholder="您的Email">
        <input type="text" placeholder="您的手機">
        <textarea placeholder="您的建言"></textarea>
        <div>
          <img class="submit_PC" src="@/assets/images/submit-btn.svg" alt="">
          <img class="submit_mobile" src="@/assets/images/submit-btn-mobile.svg" alt="">
        </div>
      </div>
    </div>

  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent ({
  name:'ServiceMail'
});
</script>
<style lang="scss">

  @import "@/assets/scss/main.scss";
  @import '@/assets/scss/components/serviceMail.scss';
</style>