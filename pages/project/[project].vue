<template>
  <div>
    <div class="blog-container">
      <div class="space-30"></div>
      <img :src="currentProject.image" :alt="currentProject.alt" />

      <div class="project-content">
        <h3 class="title">{{ currentProject.name }}</h3>
        <div class="project-date">
          <img width="20px" style="display: inline-block" src="/images/clock.png" alt="" />
          <p style="display: inline; font-size: 14px">{{ currentProject.date }}</p>
        </div>
        <p class="project-desc">{{ currentProject.projectDescription }}</p>
        <p class="help-title" v-if="currentProject.helpText">How did I help?</p>
        <p class="help-text">{{ currentProject.helpText }}</p>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full md:w-6/12">
          <p class="stack-title">Technology Stack</p>
          <div class="tech-stack">
            <div v-for="img in currentProject.stackImages" :key="img.url">
              <img :src="img.url" :alt="img.alt" />
            </div>
          </div>
        </div>
        <div class="w-full md:w-6/12">
          <div class="view-project-btn">
            <button class="projects-btn" @click="goToProject">View Project ></button>
          </div>
        </div>
      </div>

      <div class="space-50"></div>
    </div>
  </div>
</template>

<script setup>
import projects from '~/model/projects'

const route = useRoute()

const currentProject = computed(() => {
  const project = projects.find((p) => p.key === route.params.project)
  return project || {}
})

const goToProject = () => {
  window.open(currentProject.value.link, '_blank')
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
  display: block;
}

.title {
  opacity: 0.9;
  font-weight: 600;
}

.project-content {
  margin-top: 20px;
}

.project-date {
  margin-bottom: 20px;
  margin-top: -5px;
  opacity: 0.8;
}

p {
  font-size: 18px;
  opacity: 0.9;
}

.help-title {
  font-weight: 500;
}

.stack-title {
  font-weight: 500;
  margin-bottom: 10px;
}

.help-text {
  margin-top: -15px;
}

.tech-stack {
  display: flex;

  img {
    width: 35px;
    margin: 5px;
  }
}

.projects-btn {
  background: transparent;
  color: black;
  border-radius: 50px;
  padding: 10px 20px;
  cursor: pointer;
  border: 1px solid black;
  z-index: 1;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #F5989D;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }
}

.view-project-btn {
  @media (min-width: 960px) {
    float: right;
    margin-top: 20px;
  }
}
</style>
