<template>
  <nav class="main_nav">
    <div class="mobile_top_block" v-if="mediaWidth <= 1024">
    </div>
    <div class="nav_container">
      <div class="logo_container">
        <img src="/img/Logo.png" alt="">
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
      <div class="menu_mobile_btn" v-if="mediaWidth <= 1024">
        <img src="/img/menu_mobile.svg" alt="">
      </div>
    </div>
    <div class="mobile_nav" v-if="mediaWidth <= 1024">
      <div class="controll_panel">
        <div class="logo_container">
          <img src="/img/Logo_White.png" alt="">
        </div>
        <div class="close_btn">
          <img src="/img/close.svg" alt="">
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

export default defineComponent({
  name: 'MainNav',
  setup(){
    const mediaWidth: number = window.innerWidth;
    return{
      mediaWidth,
    }
  }

});
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/main.scss';
  .main_nav{
    display: flex;
    height: 100px;
    background-color: #FFFFFF ;
  }

  .nav_container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    width: 62.5vw;
    margin: 0 auto;
  }

  .logo_container{
    max-width: 235.02px;
    width: fit-content;
  }

  .menu{
    max-width: 738.49px;
    width: 61.540%;
  }

  .menu ul{
    display: flex;
    justify-content: space-between;
  }
  .menu ul li{
    list-style: none;
    cursor: pointer;
    box-sizing: border-box;
    padding: 10px 0;
    &:hover{
      border-bottom: 3px solid $mainColor;
    }
  }

  
  .menu ul li a{
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
  }

  .mobile_top_block{
    width: 100vw;
    height: 65px;
    background-color: $mainColor;
  }
  
  .mobile_nav{
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    background-color: $mainColor;
  }

  @media screen and (max-width: 1024px){
    .main_nav{
      flex-direction: column;
    }

    .nav_container{
      height: 65.65px;
    }

    .logo_container{
      max-width: 150px;
    }
    
    .logo_container img{
      width: 100%;
    }
    .menu_mobile_btn{
      width: 30px;
      height: 30px;
    }

    .mobile_nav{
      padding-top: 65px;
    }
    .controll_panel{
      display: flex;
      justify-content: space-between;
      align-items: center;
      top: 0;
      height: 65px;
      padding: 0 20px;
    }
    .mobile_nav ul{
      display: flex;
      flex-direction: column;
    }

    .mobile_nav ul li{
      font-weight: 700;
      font-size: 20px;
      line-height: 30px;
      color: #FFFFFF;
      padding: 15px 0;
      padding-right: 22px;
      text-align: right;
    }
  }
  
</style>