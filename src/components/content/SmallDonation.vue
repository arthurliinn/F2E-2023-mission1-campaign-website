<template>
  <div class="small_donation">
    <div class="donation_card">
      <div class="money_shown">
        <div class="title">
          <img src="@/assets/images/small-donattion-title.svg" alt="">
        </div>
        <div class="little_text">
          <h4>您的小筆捐款，是每隻毛孩未來的大大動力！</h4>
        </div>
        <div clas="total_title">
          <img src="@/assets/images/total_title.svg" alt="">
        </div>
        <div class="count_price">
          <span class="NT body_normal">NT$</span>
          <span ref="counterSpan" class="counter counter_number">987,655,873</span>
          <div class="donate_button" @click="switchDonateCard()">
            <img src="@/assets/images/donate-btn.svg" alt="">
          </div>
        </div>
      </div>
      <div class="donte_plan">
        <h4>選擇捐款方案</h4>
        <div class="plans_container">
          <div class="plan" ref="plan1" @click="() => planCardSelect('plan1')" :class="{selected: plan==='plan1'}">
            <h5>喵星人之友</h5>
            <img src="@/assets/images/NT$600.svg" alt="">
            <p>已有 9957 人贊助</p>
          </div>

          <div class="plan" ref="plan2" @click="() => planCardSelect('plan2')" :class="{selected: plan==='plan2'}">
            <h5>喵星人之友</h5>
            <img src="@/assets/images/NT$600.svg" alt="">
            <p>已有 9957 人贊助</p>
          </div>

          <div class="plan" ref="plan3" @click="() => planCardSelect('plan3')" :class="{selected: plan==='plan3'}">
            <h5>喵星人之友</h5>
            <img src="@/assets/images/NT$600.svg" alt="">
            <p>已有 9957 人贊助</p>
          </div>

          <div class="plan custom_price_mobile">
            <h5>自訂捐款金額</h5>
            <input type="text" placeholder="請輸入捐款金額">
          </div>
        </div>
        <div class="custom_price">
          <h5>自訂捐款金額</h5>
          <input type="text" placeholder="請輸入捐款金額">
        </div>
        <div class="btn_container">
          <div class="back_btn" @click="() => DonateCardBack()">
            <img src="@/assets/images/back-btn.svg" alt="">
          </div>
          <div class="want_donate_btn">
            <img src="@/assets/images/donate-btn2.svg" alt="">
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent,} from "vue";
import { onMounted,ref,Ref } from 'vue';
import counterUp from 'counterup2'
// const counterUp = require('counterup2');

export default defineComponent ({
  name:'SmallDonation',
  setup(){
    const counterSpan = ref<HTMLSpanElement | null>(null);
    let donationCard = ref<HTMLElement | null > (null);
    let planCard = ref<HTMLElement | null > (null);
    let plan1: Ref<HTMLDivElement | null> = ref(null);
    let plan2: Ref<HTMLDivElement | null> = ref(null);
    let plan3: Ref<HTMLDivElement | null> = ref(null);
    onMounted(()=>{
      const spanElement = counterSpan.value;
      donationCard.value = document.querySelector(".money_shown");
      planCard.value = document.querySelector(".donte_plan");
      if (spanElement){
        counterUp( spanElement, {
          duration: 1000,
          delay: 16,
        })
      }
    })

    const switchDonateCard = () =>{
      if(donationCard.value){
        donationCard.value.style.display = 'none';
      }
      if(planCard.value){
        planCard.value.style.display = 'flex';
      }
      
    };

    const DonateCardBack = () =>{
      if(donationCard.value){
        donationCard.value.style.display = 'block';
      }
      if(planCard.value){
        planCard.value.style.display = 'none';
      }
    };

    let plan = ref('');
    const planCardSelect = (target:string) =>{
        plan.value = target;
    };

    return{
      counterSpan,
      switchDonateCard,
      planCardSelect,
      DonateCardBack,
      plan,
      plan1,
      plan2,
      plan3,
    }
  },
});
</script>
<style lang="scss">

  @import "@/assets/scss/main.scss";
  @import '@/assets/scss/components/smallDonation.scss';
</style>