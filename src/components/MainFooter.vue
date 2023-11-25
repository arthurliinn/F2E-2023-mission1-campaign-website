<template>
  <footer class="main_footer">
    <div class="footer_content_container">
      <div class="cat">
        <img class="PC" src="@/assets/images/cat.png" alt="">
        <img class="mobile" src="@/assets/images/cat-mobile.png" alt="">
      </div>
      <div class="footer_content">
        <div class="logo_container">
          <img src="@/assets/images/Logo_White.png" alt="">
        </div>
        <div class="link_and_contact">
          <div class="link_container">
            <div class="title_footer">menu</div>
            <div class="link">
              <a href="">首頁</a>
              <a href="">候選人主張</a>
              <a href="">最新活動</a>
              <a href="">政策議題</a>
              <a href="">民眾服務信箱</a>
              <a href="">小額捐款</a>
            </div>
          </div>
          <div class="contact_container">
            <div class="title_footer">Office information</div>
            <div class="contact">
              <p>地址：台北市喵星區毛茸茸大道88號喵喵大樓3樓</p>
              <p>電話：(02) 888-5678 </p>
              <p>郵件：meowoffice@linmeow.tw</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainFooter',

});
</script>
<style lang="scss">
@import '@/assets/scss/main.scss';
.main_footer{
  height: 176px;
  padding: 0 15px;
  background-color: #4527A0;
}

.footer_content_container{
  max-width: 1200px;
  margin: 0 auto;
  max-height: 175px;
  position: relative;
  height: 100%;
}

.cat{
  position: absolute;
  top: -175px;
  width: fit-content;
  margin-left: 7%;
  .mobile{
    display: none;
  }
}

.footer_content{
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
}


.logo_container{
  width: fit-content;
  max-width: 160px;
  width: 15%;
  img{
    width: 100%;
  }
}

.link_and_contact{
  display: flex;
  justify-content: space-between;
  width: 90%;
  max-width: 645px;
  .link_container,.contact_container{
    max-width: 215px;
    .title_footer{
      font-weight: 400;
      font-size: 13px;
      color: #FFB300;
      margin-bottom: 10px;
    }
  }
  .link{
    display:flex;
    flex-wrap: wrap;

    a{
      color: #FAFAFA;
      text-decoration: none;
      width: 50%;
    }

  }
  .contact_container{
    max-width: 370px;
    width: 60%;
  }

  .contact{

    p{
      color: #FAFAFA;
    }

  }
}

@media screen and (max-width: 480px){
  .main_footer{
    height: 355px;
  }
  .cat{
    position: absolute;
    top: -120px;
    margin-left: 0;
    .PC{
      display: none;
    }
    .mobie{
      display: block;
    }
  }
  .footer_content{
    flex-direction: column;
  }

  .logo_container{
    display: none;
  }

  .link_and_contact{
    flex-direction: column;
  }

  .link_and_contact{
    align-items: center;
  }
  .link_container{
    margin-top: 30px;
    margin-bottom: 60px;
  }
}

  
</style>