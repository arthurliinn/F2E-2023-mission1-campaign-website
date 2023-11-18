<template>
  <div class="policy_issues">
    <div class="topic_title">
      <img class="PC" src="@/assets/images/policy_issues_title.svg" alt="">
      <img class="mobile" src="@/assets/images/policy_issues_title_mobile.svg" alt="">
    </div> 
    <div class="issues_cards">
      <div class="card">
        <div class="policy_span">政策一</div>
        <div class="text_content">
          <h4>為毛孩子謀福利！推動寵物醫療保障方案</h4>
          <p class="body_medium">
            <ul>
              <li class="body_medium">設立寵物醫療基金：每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用</li>
              <li class="body_medium">提供醫療補助：每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力</li>
              <li class="body_medium">合作動物醫院：目前已有和超過 200 家動物醫院進行初步的合作討論</li>
            </ul>
          </p>
        </div>
      </div>
      <div class="card middle_card">
        <div class="policy_span">政策二</div>
        <div class="text_content">
          <h4>打造休閒天堂！推廣寵物休閒與娛樂場所</h4>
          <p class="body_medium">
            <ul>
              <li class="body_medium">建立寵物公園：每年撥款新台幣 5 億元，用於在各大都市建立專屬的寵物公園。</li>
              <li class="body_medium">推廣寵物友善商家：鼓勵商家提供寵物友善的環境，並為參與的商家提供稅收優惠。預計在政策實施後的首年，將有超過 500 家商家加入此計畫</li>
              <li class="body_medium">舉辦寵物活動和工作坊：與各大寵物社團和組織合作，每年舉辦至少 5 場大型的寵物活動，包括寵物才藝比賽、飼養知識工作坊等</li>
            </ul>
          </p>
        </div>
      </div>
      <div class="card">
        <div class="policy_span">政策三</div>
        <div class="text_content">
          <h4>推廣寵物飼養教育，讓愛更加專業</h4>
          <p class="body_medium">
            <ul>
              <li class="body_medium">建立寵物飼養教育中心：每年撥款新台幣 3 億元，用於在全國各地建立專業的寵物飼養教育中心。預計在第一年內，在全國至少 5 大城市設立教育中心。</li>
              <li class="body_medium">推廣寵物飼養課程：與學校、社區組織和寵物社團合作，推出一系列免費的寵物飼養課程。預計每年將有超過 10,000 名市民受益。</li>
              <li class="body_medium">製作教育資料：出版寵物飼養手冊、影片和線上課程，讓所有有意飼養寵物的家庭都能輕鬆取得正確的知識</li>
            </ul>
          </p>
        </div>
      </div>
    </div>

  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent ({
  name:'PolicyIssues"'
});
</script>
<style lang="scss">
  @import "@/assets/scss/main.scss";
  @import '@/assets/scss/components/policyIssues.scss';
</style>