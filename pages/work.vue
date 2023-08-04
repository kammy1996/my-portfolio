<template>
  <div>
    <div class="blog-container">
      <div class="space-30"></div>
      <h3 class="main-title text-center">
          Selected <span class="title-highlight">Work</span>
        </h3>
        <p class="text-center mt-n1">some of my best work.</p>
        <div class="space-40"></div>

        <div class="row gap-5">
          <div class="col-md-6 col-sm-12 col-xs-12 col-lg-6 project-card" v-for="project in projects" @click="goToProject(project)">
            <b-img
              :src="project.image"
              :alt="project.alt"
              class="project-img"
            >
   
            </b-img>
            
            <div class="overlay hvr-bounce-to-top-black">
              <h2>{{  project.name }}</h2>
              <p>{{  project.shortDescription }}</p>
            </div>
          </div>
        </div>
      </div>
    <div class="space-100"></div>
  </div>
</template>

<script>
import projects from "../model/projects";
import * as gsap from "../utils/animations/work"
import { Work } from '../model/site-meta.js'; 


export default {
  name: "Work",
  computed: {
    projects() {
      return projects;
    },
  },
  head() { 
    return { 
      title:'Work | Kamran Memon | Portfolio',
      meta : Work
    }
  },
  mounted() { 
    this.initAnimations();
  },
  methods : { 
    initAnimations() { 
      gsap.initAnime()
    },
    goToProject(project) { 
      this.$router.push(`/project/${project.key}`)
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/static/scss/main.scss";
@import "~/static/scss/hover.css";


.project-card { 
  cursor: pointer;
}


.overlay {
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    margin:12px 0px 0px 12px;
    opacity:0;
    height:95%;
    width:96%;
    padding:50px;
    transition:0.6s;
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
      color: #99918b
    }


.title-highlight {
  font-weight: 700;
  color: $primary-color;
}

.project-img { 
  max-width:100%;
  height:auto;
}

@media only screen and (min-width: 800px) {
  .projects-container { 
    margin-left:50px;
  }
}

@media only screen and (max-width: 800px) {
  .project-box { 
    margin-top:50px;
  }
}








</style>
