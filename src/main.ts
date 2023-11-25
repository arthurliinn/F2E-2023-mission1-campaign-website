import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//awsome swiper
import SwiperClass, { } from 'swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'
//Counter-Up2
// import counterUp from 'counterup2'


// import swiper module styles
import 'swiper/css'
import 'swiper/css/pagination'
// more module style...

// use swiper modules
SwiperClass.use([/* swiper modules... */])

createApp(App).use(store).use(router).use(VueAwesomeSwiper).mount('#app')



