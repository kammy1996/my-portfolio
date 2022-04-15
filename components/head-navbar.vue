<template>
  <div>
    <b-container>
      <b-navbar>
        <b-navbar-brand href="#">
          <b-img
            width="150px"
            id="main-logo"
            src="~/static/images/logo.png"
          ></b-img>
        </b-navbar-brand>

        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" class="custom-nav"
            >Home <span class="underline"></span
          ></b-nav-item>

          <b-nav-item href="#" class="custom-nav"
            >About <span class="underline"></span
          ></b-nav-item>
          <b-nav-item href="#" class="custom-nav"
            >Work <span class="underline"></span
          ></b-nav-item>
          <b-nav-item href="#" class="custom-nav"
            >Contact<span class="underline"></span>
          </b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </b-container>
  </div>
</template>

<script>
import * as gsap from "../utils/animations/header.js";

export default {
  mounted() {
    this.initAnimations();
  },
  methods: {
    initAnimations() {
      gsap.moveHeader();
      gsap.underlineAnime();
    },
  },
};
</script>

<style scoped>

.custom-nav {
  margin: 0px 7px;
}

.navbar-nav .nav-link {
  color: black;
  font-weight:300
}

.underline {
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: black;
}
</style>
