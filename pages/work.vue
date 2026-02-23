<template>
  <div>
    <div class="blog-container">
      <div class="space-30"></div>
      <h3 class="main-title text-center">
        Selected <span class="title-highlight">Work</span>
      </h3>
      <p class="text-center" style="margin-top: -4px">some of my best work.</p>
      <div class="space-40"></div>

      <div class="flex flex-wrap gap-5">
        <div
          class="w-full md:w-[calc(50%-10px)] project-card"
          v-for="project in projects"
          :key="project.key"
          @click="goToProject(project)"
        >
          <img :src="project.image" :alt="project.alt" class="project-img" />
          <div class="overlay">
            <h2>{{ project.name }}</h2>
            <p>{{ project.shortDescription }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="space-100"></div>
  </div>
</template>

<script setup>
import projects from '~/model/projects'
import * as gsapAnims from '~/utils/animations/work.js'
import { Work } from '~/model/site-meta.js'

useHead({
  title: 'Work | Kamran Memon | Portfolio',
  meta: Work,
})

const router = useRouter()

const goToProject = (project) => {
  router.push(`/project/${project.key}`)
}

onMounted(() => {
  gsapAnims.initAnime()
})
</script>

<style lang="scss" scoped>
$primary-color: #F5989D;

.project-card {
  cursor: pointer;
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  margin: 12px 0px 0px 12px;
  opacity: 0;
  height: 95%;
  width: 96%;
  padding: 50px;
  transition: 0.6s;
  background: rgba(0,0,0,0.6);
}

.overlay:hover {
  opacity: 1;
}

.overlay h2 {
  font-size: 30px;
  margin-bottom: 10px;
}

.overlay p {
  font-size: 20px;
  color: #99918b;
}

.title-highlight {
  font-weight: 700;
  color: $primary-color;
}

.project-img {
  max-width: 100%;
  height: auto;
}
</style>
