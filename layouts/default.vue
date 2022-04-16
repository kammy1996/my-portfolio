<template>
   <div>
    <MainHeader />
    <Nuxt />
  </div>
</template>

<script>
import MainHeader from "../components/head-navbar.vue";

  export default {
    components : { 
      MainHeader
    }
  }
</script>

<style lang="scss" >
  body {
  font-family: "Poppins" ;
}
</style>
 