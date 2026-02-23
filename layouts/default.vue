<template>
  <div class="m-0 p-0">
    <ClientOnly>
      <div>
        <MobileNavbar class="mobile-navbar" />
        <HeadNavbar class="main-header" />
      </div>
    </ClientOnly>
    <slot />
    <MainFooter />
  </div>
</template>

<script setup>
// Components are auto-imported by Nuxt
</script>

<style lang="scss">
body {
  font-family: 'Poppins';
}

// Media only for desktop
@media only screen and (min-width: 800px) {
  .mobile-navbar {
    display: none !important;
  }
}

// Media only for mobile
@media only screen and (max-width: 800px) {
  .main-header {
    display: none !important;
  }
}
</style>
