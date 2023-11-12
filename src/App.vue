<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
</template>

<style lang="scss">
@import "@/assets/scss/main.scss";
@import url('https://fonts.googleapis.com/earlyaccess/notosanstc.css');
#app {
  font-family: 'Noto Sans TC','微軟正黑體';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 100vw;
}


body,html{
  max-width: 1920px;
}

h1,
h2,
h3,
h4{
  color: $mainColor;
}


// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
