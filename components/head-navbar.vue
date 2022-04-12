<template>
  <div>
    <b-container>
      <b-navbar >
        <b-navbar-brand href="#">
          <b-img width="150px" @mouseover="simpleFade" id="main-logo" src="../static/images/logo.png"></b-img>
        </b-navbar-brand>
        

       <b-navbar-nav class="ml-auto">
        <b-nav-item href="#" class="custom-nav" >Home</b-nav-item>
        <b-nav-item href="#" class="custom-nav">About</b-nav-item>
        <b-nav-item href="#" class="custom-nav">Work</b-nav-item>
        <b-nav-item href="#" class="custom-nav">Contact</b-nav-item>
      </b-navbar-nav>
      </b-navbar>
    </b-container>
  </div>
</template>

<script>

import { gsap } from 'gsap';

export default {

  methods: {
      simpleFade(){
        gsap.fromTo('#main-logo',{autoAlpha:1},{autoAlpha:0, duration: 0.35});
      }
    },
};
</script>

<style  scoped>
  .custom-nav { 
    border-bottom:3px solid black;
    margin:0px 10px;
  }
</style>
