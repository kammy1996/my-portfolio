<template>
  <div>
    <div class="container mx-auto px-4">
      <nav class="flex items-center justify-between py-3">
        <a href="/">
          <img
            alt="Kamran Logo"
            style="width: 150px"
            id="main-logo"
            src="/images/logo.png"
          />
        </a>
        <ul class="flex ml-auto list-none m-0 p-0 gap-4">
          <li class="custom-nav">
            <NuxtLink to="/">Home <span class="underline"></span></NuxtLink>
          </li>
          <li class="custom-nav">
            <NuxtLink to="/about">About <span class="underline"></span></NuxtLink>
          </li>
          <li class="custom-nav">
            <NuxtLink to="/work">Work <span class="underline"></span></NuxtLink>
          </li>
          <li class="custom-nav">
            <NuxtLink to="/blog">Blog <span class="underline"></span></NuxtLink>
          </li>
          <li class="custom-nav">
            <NuxtLink to="/contact">Contact<span class="underline"></span></NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import * as gsapAnims from '~/utils/animations/header.js'

onMounted(() => {
  gsapAnims.moveHeader()
  gsapAnims.underlineAnime()
})
</script>

<style scoped>
.custom-nav {
  margin: 0px 7px;
  list-style: none;
}

.custom-nav a {
  color: black;
  font-weight: 300;
  position: relative;
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
