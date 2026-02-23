<template>
  <div class="my-3">
    <div class="flex flex-wrap">
      <div class="w-full lg:w-2/12 mb-3 lg:mb-0">
        <a :href="work.url" target="_blank">
          <img
            :src="work.logo"
            :alt="work.imgAlt"
            :id="work.company"
            :style="`width: ${work.width}; display: block; margin: auto;`"
          />
        </a>
      </div>
      <div class="w-full lg:w-7/12">
        <h3 class="designation">{{ work.designation }}</h3>
        <p class="company-work-desc">{{ work.desc }}</p>
      </div>
      <div class="w-full lg:w-3/12">
        <div class="period">
          <p>
            <span v-if="work.current">
              <Icon name="fa-solid:circle" color="green" class="green-circle mr-1" />
            </span>
            {{ work.period }}
          </p>
          <p class="location" style="margin-top: -12px">{{ work.location }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  work: Object,
})
</script>

<style lang="scss" scoped>
.designation {
  font-size: 18px;
}

.company-work-desc {
  font-size: 14px;
}

.green-circle {
  border: 1px solid green;
  border-radius: 50px;
  padding: 2px;
  font-size: 10px;
}

// Media only for Desktop
@media only screen and (min-width: 800px) {
  .period {
    float: right;

    .location {
      float: right;
    }
  }
}
</style>
