<template>
  <div>
    <div class="flex">
      <div class="w-auto">
        <div class="navbar" title="Menu">
          <Icon name="fa-solid:bars" class="project-link-icon" size="sm" />
        </div>
        <div class="close">
          <Icon name="fa-solid:times" class="project-link-icon" />
        </div>
      </div>
      <div class="flex-1 text-center" style="margin-top: -20px">
        <img
          alt="Kamran Logo"
          style="width: 150px"
          id="mob-main-logo"
          src="/images/logo.png"
        />
      </div>
    </div>
    <section></section>
    <div id="navigationWrap">
      <div class="container menu">
        <nav>
          <ul>
            <li>
              <NuxtLink to="/">Home <span class="underline"></span></NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about">About <span class="underline"></span></NuxtLink>
            </li>
            <li>
              <NuxtLink to="/work">Work <span class="underline"></span></NuxtLink>
            </li>
            <li>
              <NuxtLink to="/blog">Blog <span class="underline"></span></NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact">Contact<span class="underline"></span></NuxtLink>
            </li>
          </ul>
        </nav>
        <div class="social">
          <a href="https://twitter.com/kamranmemon25" target="_blank">
            <img
              alt="Twitter"
              style="width: 30%"
              src="https://img.icons8.com/dotty/80/null/twitter.png"
            />
          </a>
          <a href="https://www.instagram.com/kamranmemon99/" target="_blank">
            <img
              alt="Instagram"
              style="width: 30%"
              src="https://img.icons8.com/dotty/80/000000/instagram-new.png"
            />
          </a>
          <a href="https://github.com/kammy1996" target="_blank">
            <img
              alt="Github"
              style="width: 30%"
              src="https://img.icons8.com/dotty/80/000000/github.png"
            />
          </a>
          <a href="https://www.linkedin.com/in/kamran-memon-1003a2111/" target="_blank">
            <img
              alt="Linkedin"
              style="width: 30%"
              src="https://img.icons8.com/dotty/80/000000/linkedin.png"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import * as gsapAnims from '~/utils/animations/mobile-nav.js'

onMounted(() => {
  gsapAnims.initAnime()
})
</script>

<style lang="scss" scoped>
$primary-color: #F5989D;

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

/* Clearing */
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
  z-index: 1;
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

@media (max-width: 750px) {
  nav ul li {
    font-size: 15vw;
  }
}
nav a {
  color: white;
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
  color: white;
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
  transition: 0.3s;
}
.fa:hover {
  color: #f24738;
}

// Media only for desktop
@media only screen and (min-width: 800px) {
  .navbar {
    display: none !important;
  }
}
</style>
