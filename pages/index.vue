<template>
  <div>
    <Navbar />
  </div>
</template>

<script>
import Navbar from '../components/head-navbar.vue';
import  gsap  from 'gsap';

  export default {
    name:'Home',
    components: { 
      Navbar
    },
    methods: {
      simpleFade(){
        gsap.fromTo('',{autoAlpha:1},{autoAlpha:0, duration: 0.35});
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>