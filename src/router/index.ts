import { createRouter, createWebHistory, RouteRecordRaw ,createWebHashHistory,} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomePage from '../views/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    // name: 'home',
    // component: HomeView
    name: 'HomePage',
    component: HomePage,
  },

]

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes,
// });

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// const router = createRouter({
//   mode: 'hash',
//   base: process.env.BASE_URL,
//   routes
// })


export default router
