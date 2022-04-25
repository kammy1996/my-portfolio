<template>
   <div>
    <mobile-navbar
    <MainHeader />
    <Nuxt />
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from "../components/head-navbar.vue";
import MainFooter from "../components/main-footer.vue";
import MobileNavbar from "../components/mobile-navbar.vue"

  export default {
    components : { 
      MainHeader,
      MainFooter,
      MobileNavbar
    }
  }
</script>

<style lang="scss" >
  body {
  font-family: "Poppins" ;
}
</style>
 