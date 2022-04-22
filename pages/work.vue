<template>
  <div>
    <div class="space-40"></div>
    <b-container>
      <div >
        <h3 class="main-title text-center">
          Selected <span class="title-highlight">Work</span>
        </h3>
        <div class="space-40"></div>
        <div class="projects-container">
          <b-row class="project-row" no-gutters >
            <b-col lg="6" class="project-col" >
              <div class="project-box">
                <b-img
                  width="500px"
                  class="project-img"
                  src="~/static/images/projects/bikeme.jpg"
                ></b-img>
                <ImageOverlay :project="projects[0]" />
              </div>
            </b-col>
            
            <b-col lg="6" class="project-col">
              <b-img
                width="500px"
                class="project-img"
                src="~/static/images/projects/todoers.jpg"
              ></b-img>
              <ImageOverlay :project="projects[1]" />
            </b-col>
          </b-row>

          <div class="space-40"></div>
          <b-row class="project-row" no-gutters>
            
            <b-col lg="6" class="project-col" >
              <b-img
                width="500px"
                class="project-img"
                src="~/static/images/projects/kj-academy.jpg"
              ></b-img>
              <ImageOverlay :project="projects[2]" />
            </b-col>
            
            <b-col lg="6"  class="project-col">
              <b-img
                width="500px"
                class="project-img"
                src="~/static/images/projects/merchant-uk.jpg"
              ></b-img>
              <ImageOverlay :project="projects[3]" />
            </b-col>
            
          </b-row>

          <div class="space-40"></div>
          <b-row class="project-row" no-gutters>
            
            <b-col lg="6" class="project-col" >
              <b-img
                width="500px"
                class="project-img"
                src="~/static/images/projects/ace-visas.jpg"
              ></b-img>
              <ImageOverlay :project="projects[4]" />
            </b-col>
            
            <b-col lg="6" class="project-col">
              <b-img
                width="500px"
                class="project-img"
                src="~/static/images/projects/tp-visa.jpg"
              ></b-img>
              <ImageOverlay :project="projects[5]" />
            </b-col>
            
          </b-row>
        </div>
      </div>
    </b-container>
    <div class="space-100"></div>
  </div>
</template>

<script>
import ImageOverlay from "../components/project-overlay.vue";
import projects from "../model/projects";
import * as gsap from "../utils/animations/work"

export default {
  name: "Work",
  computed: {
    projects() {
      return projects;
    },
  },
  components: {
    ImageOverlay,
  },
  mounted() { 
    this.initAnimations();
  },
  methods : { 
    initAnimations() { 
      gsap.initAnime()
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/static/scss/main.scss";

.title-highlight {
  font-weight: 700;
  color: $primary-color;
}

.projects-container { 
  margin-left:50px;
}









</style>
