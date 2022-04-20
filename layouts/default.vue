<template>
   <div>
    <MainHeader />
    <Nuxt />
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from "../components/head-navbar.vue";
import MainFooter from "../components/main-footer.vue";

  export default {
    components : { 
      MainHeader,
      MainFooter
    }
  }
</script>

<style lang="scss" >
  body {
  font-family: "Poppins" ;
}
</style>
 