<template>
  <div>
    <b-row>
      <b-col lg="2">
         <div class="navbar" title="Menu">
        <font-awesome-icon
          class="project-link-icon"
          size="sm"
          :icon="['fa', 'bars']"
        />
      </div>
      <div class="close">
        <font-awesome-icon
          class="project-link-icon"
          :icon="['fa', 'xmark']"
        />
      </div>
      </b-col>
      <b-col lg="9">
        <div class="text-center mt-n5">
          <b-img
          width="150px"
          id="mob-main-logo"
          src="~/static/images/logo.png"
        ></b-img>
        </div>
      </b-col>
    </b-row>
    <section></section>
    <div id="navigationWrap">
      <div class="container menu">
        <nav>
          <ul>
            <li>
              <NuxtLink to="/">Home <span class="underline"></span></NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about"
                >About <span class="underline"></span
              ></NuxtLink>
            </li>
            <li>
              <NuxtLink to="/work"
                >Work <span class="underline"></span
              ></NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact"
                >Contact<span class="underline"></span
              ></NuxtLink>
            </li>
          </ul>
        </nav>
        <div class="social">
          <a href="">
            <b-img
              width="30%"
              src="https://img.icons8.com/dotty/80/000000/instagram-new.png"
            ></b-img
          ></a>
          <a href=""
            ><b-img
              width="30%"
              src="https://img.icons8.com/dotty/80/000000/github.png"
            ></b-img
          ></a>
          <a href=""
            ><b-img
              width="30%"
              src="https://img.icons8.com/dotty/80/000000/linkedin.png"
            ></b-img
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as gsap from "~/utils/animations/mobile-nav.js";

export default {
  name: "MobileNavbar",
  methods: {
    initAnimation() {
      gsap.initAnime();
    },
  },
  mounted() {
    this.initAnimation();
  },

};  
</script>

<style lang="scss" scoped>
@import "~/static/scss/main.scss";
@import "~/static/scss/hover.css";


/* For devices larger than 400px */
@media (min-width: 400px) {
  .container {
    width: 85%;
    padding: 0;
  }
}
/* For devices larger than 550px */
@media (min-width: 550px) {
  .container {
    width: 80%;
  }
}

/* Clearing –––––––––––––––––––––––––––––––––––––––––––––––––– */
.container:after {
  content: "";
  display: table;
  clear: both;
}
#navigationWrap {
  display: none;
  width: 100%;
  min-height: 100vh;
  height: 1000%;
  background: $primary-color;
  opacity: 0;
  position: absolute;
  top: 0;
  padding: 50px 0;
  overflow: hidden;
  z-index:1,
}
nav ul {
  list-style-type: none;
  padding: 0;
}
nav ul li {
  color: white;
  font-size: 15vh;
  text-transform: uppercase;
  overflow: hidden;
  font-weight: 700;
}
nav ul li:first-child {
  font-size: 8vh;
  overflow: visible;
}
@media (max-width: 750px) {
  nav ul li {
    font-size: 15vw;
  }
  nav ul li:first-child {
    font-size: 8vw;
  }
}
nav a {
  color: white;
  -o-transition: 0.3s;
  -ms-transition: 0.3s;
  -moz-transition: 0.3s;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  text-decoration: none;
}
nav a:hover {
  color: #f24738;
}
.navbar {
  top: 20px;
  left: 20px;
  width: 45px;
  height: 45px;
  z-index: 20;
  cursor: pointer;
}
.close {
  display: none;
  opacity: 0;
  position: fixed;
  top: 20px;
  left: 20px;
  width: 45px;
  height: 45px;
  z-index: 20;
  cursor: pointer;
}
.social a {
  color: #484848;
  color: white;
  -o-transition: 0.3s;
  -ms-transition: 0.3s;
  -moz-transition: 0.3s;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  text-decoration: none;
}
.social a:hover {
  color: #f24738;
}
.fa {
  color: #484848;
  padding-right: 12px;
  font-size: 1.8em !important;
  -o-transition: 0.3s;
  -ms-transition: 0.3s;
  -moz-transition: 0.3s;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
.fa:hover {
  color: #f24738;
}
</style>
