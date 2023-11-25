<template>
  <nav class="main_nav">
    <div class="mobile_top_block" v-if="mediaWidth <= 1024">
    </div>
    <div class="nav_container">
      <div class="logo_container">
        <img src="@/assets/images/Logo.png" alt="">
      </div>
      <div class="menu" v-if="mediaWidth > 1024">
        <ul>
          <li><a>候選人主張</a></li>
          <li><a>最新活動</a></li>
          <li><a>政策議題</a></li>
          <li><a>民眾服務信箱</a></li>
          <li><a>小額捐款</a></li>
        </ul>
      </div>
      <div class="menu_mobile_btn" id="menu_mobile_btn" @click="openMobileMenu" v-if="mediaWidth <= 1024">
        <img src="@/assets/images/menu_mobile.svg" alt="">
      </div>
    </div>
    <div class="mobile_nav" v-if="mediaWidth <= 1024">
      <div class="controll_panel">
        <div class="logo_container">
          <img src="@/assets/images/Logo_White.png" alt="">
        </div>
        <div class="close_btn" id="closeBtn" @click="closeMobileMenu">
          <img src="@/assets/images/close.svg" alt="">
        </div>
          
      </div>
      <ul>
          <li><a>候選人主張</a></li>
          <li><a>最新活動</a></li>
          <li><a>政策議題</a></li>
          <li><a>民眾服務信箱</a></li>
          <li><a>小額捐款</a></li>
      </ul>
    </div>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { onMounted, ref } from 'vue';

export default defineComponent({
  name: 'MainNav',
  setup(){
    const mediaWidth: number = window.innerWidth;
    let MobileMenu = ref<HTMLElement | null > (null);

    onMounted(()=>{
      MobileMenu.value = document.querySelector(".mobile_nav");
    });
    
    const openMobileMenu = () =>{
      if(MobileMenu.value){
        MobileMenu.value.style.display = 'block';
        
        setTimeout(()=>{
          if (MobileMenu.value) {
            MobileMenu.value.style.opacity = '1';
          }
        },300);
      }
    };

    const closeMobileMenu = () =>{
      if(MobileMenu.value){
        MobileMenu.value.style.opacity = '0';
        setTimeout(()=>{
          if (MobileMenu.value) {
            MobileMenu.value.style.display = 'none';
          }
        },300);
      }
    };

    return{
      mediaWidth,
      openMobileMenu,
      closeMobileMenu,
    }
  },
  

});
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/main.scss';
  @import '@/assets/scss/mainNav.scss';
  
  
</style>