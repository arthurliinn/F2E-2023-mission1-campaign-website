<template>
  <div class="latest_events">
    <div class="top_banner_content">
      <div class="top_banner">
        <div class="title_container">
          <div class="title_smallText">
            <img class="small_text" src="/img/bigTitle_smallText.svg" alt="">
          </div>
          <div class="big_title_cointainer">
            <img class="big_title" src="/img/bigTitle.svg" alt="">
            <img class="big_title_mobile" src="/img/bigTitle_Mobile.svg" alt="">
          </div>
        </div>
      </div>
      <div class="demands_container">
        <img class="candidate" src="/img/candidate.png" alt="">
        <div class="demands_board_container">
          <div class="demands">
            <h1>護航台灣幸福經濟 從照顧每一隻貓咪開始</h1>
            <h5>
              護航台灣幸福經濟
              <br>
              從照顧每一隻貓咪開始
            </h5>
            <h4>我堅信，藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。
                <br>
                <br>
                因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。</h4>
            <p class="body_normal">
              我堅信，藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。
              <br>
              <br>
              因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。
            </p>
          </div>
          <div class="demands_shadow">
          </div>
        </div>
      </div>
      <div class="events_container">
        <div class="topic_title">
          <img src="/img/new_Events.svg" alt="">
        </div> 
        <div class="event_cards_container">
          <div class="left_card">
            <img src="/img/event1.jpg" alt="">
            <h4>
              參與台北寵物論壇 爭取貓咪友善環境
            </h4>
            <p class="body_medium">
              炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。
            </p>
          </div>
          <div class="right_cards">
            <div class="card">
              <img src="/img/event2.jpg" alt="">
              <p class="body_medium">
                炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。
              </p>
            </div>
            <div class="card">
              <img src="/img/event3.jpg" alt="">
              <p class="body_medium">
                炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。
              </p>
            </div>
          </div>
        </div>
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