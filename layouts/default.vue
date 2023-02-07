<template>
  <div class="ma-0 pa-0">
    <client-only>
      <MobileNavbar class="mobile-navbar"/>
      <MainHeader class="main-header" />
      <Nuxt />
      <MainFooter />
    </client-only>
  </div>
</template>

<script>
import MainHeader from "../components/head-navbar.vue";
import MainFooter from "../components/main-footer.vue";
import MobileNavbar from "../components/mobile-navbar.vue";

export default {
  components: {
    MainHeader,
    MainFooter,
    MobileNavbar,
  },
  //  computed: {
  //   getWidth () {
  //     console.log(`getting the width`);
  //     if (process.browser){
  //       let width = window.outerWidth;

  //       if(width <= 800) { 
  //         this.$store.commit(`changeMobileState`,true)
  //       }
  //       return width;
  //     } 
  //   },
  //   isMobile() { 
  //     return this.$store.getters[`getMobileState`];
  //   }
  // },
};
</script>

<style lang="scss" >
  body {
  font-family: "Poppins" ;
}


// Media only for desktop 
@media only screen and (min-width: 800px) {
  mobile-navbar { 
    display:none !important;
    
  }
}

//media only for Mobile 
@media only screen and (max-width: 800px) {
.main-header { 
  display:none !important;
}

}
</style>
 