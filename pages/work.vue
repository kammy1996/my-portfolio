<template>
  <div>
    <div class="space-40"></div>
    <b-container>
      <div >
        <h3 class="main-title text-center">
          Selected <span class="title-highlight">Work</span>
        </h3>
        <p class="text-center mt-n1">some of my best work.</p>
        <div class="space-40"></div>
        <div class="projects-container">
          <b-row class="project-row"  >
            <b-col lg="6" >
              <div class="project-box">
              <b-img
                alt="To do list web application"
                class="project-img"
                src="~/static/images/projects/todoers.jpg"
              ></b-img>
                <ImageOverlay style="margin-top:-220px;position:relative" :project="projects[0]" />
              </div>
            </b-col>
            
            <b-col lg="6" >
              <div class="project-box">
               <b-img
                  alt="e-commerce website"
                  class="project-img"
                  src="~/static/images/projects/bikeme.jpg"
                ></b-img>
              <ImageOverlay style="margin-top:-200px;position:relative"  :project="projects[1]" />
              </div>
            </b-col>
          </b-row>

          <div class="space-40"></div>
          <b-row class="project-row">
            
            <b-col lg="6"  >
              <div class="project-box">
              <b-img
                class="project-img"
                alt="Travel Agency Website"
                src="~/static/images/projects/ace-visas.jpg"
              ></b-img>
              <ImageOverlay style="margin-top:-180px;position:relative" :project="projects[2]" />
              </div>
            </b-col>
            
            <b-col lg="6"  >
              <div class="project-box">

              <b-img
                alt="online watch shop"
                class="project-img"
                src="~/static/images/projects/watch-for-now.jpg"
              ></b-img>
              <ImageOverlay   style="margin-top:-200px;position:relative" :project="projects[3]" />
              </div>
            </b-col>
            
          </b-row>

          <div class="space-40"></div>
          <b-row class="project-row" >
              <b-col lg="6"  >
              <div class="project-box">
              <b-img
                class="project-img"
                alt="tours and travels agency website"
                src="~/static/images/projects/tp-visa.jpg"
              ></b-img>
              <ImageOverlay  style="margin-top:-180px;position:relative" :project="projects[4]" />
              </div>
            </b-col>
            
            <b-col lg="6" >
              <div class="project-box">

              <b-img
                alt="merchant and associate architect website"
                class="project-img"
                src="~/static/images/projects/merchant-uk.jpg"
              ></b-img>
              <ImageOverlay style="margin-top:-180px;position:relative"  :project="projects[5]" />
              </div>
            </b-col>
            
          </b-row>

          <b-row class="project-row" >
             <b-col lg="6"  >
              <div class="project-box">
              <b-img
                alt="khushnoor Jijina "
                class="project-img"
                src="~/static/images/projects/kj-academy.jpg"
              ></b-img>
              <ImageOverlay  style="margin-top:-180px;position:relative" :project="projects[6]" />
              </div>
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
      title:'Work | Kamran Memon | Frontend Developer',
      meta : Work
    }
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
