<template>
  <div>
    <template class="hero-area">
      <div class="space-30"></div>
      <b-img
        class="image-bg d-none d-md-block d-lg-block"
        width="600px"
        alt="background-image"
        src="~/static/images/image-bg-right.png"
      ></b-img>
      <b-container>
        <div class="space-50"></div>
        <b-row>
          <b-col lg="5">
            <div class="text-center">
              <b-img
                alt="kamran profile image"
                class="profile-img"
                src="~/static/images/profile-img.png"
              ></b-img>
            </div>
          </b-col>
          <b-col lg="6">
            <div class="space-50"></div>
            <div class="space-30"></div>
            <div class="text-content">
              <h3 class="main-title">
                <span class="hi">Hi, I'm</span>
                <span class="change-text"></span>
                <span class="cursor">_</span>
                <span class="box mt-n1"></span>
              </h3>
              <p class="sub-text">
                I'm a Fullstack Web Developer and a Tech Enthusiast who is
                addicted to Learning and loves Javascript. I live by the motto
                <b>Learn build and grow,</b> So I'm Excited to share my Journey.
              </p>
              <div class="social-icons mt-n1">
                <a href="https://twitter.com/kamranmemon25" target="_blank"
                  ><b-img
                    alt="twitter"
                    width="30px"
                    class="mr-1"
                    src="~/static/images/twitter.png"
                  ></b-img
                ></a>
                <a href="https://www.linkedin.com/in/kamran-memon-1003a2111/" target="_blank"
                  ><b-img
                    alt="linkedin"
                    width="22px"
                    class="mr-1"
                    src="~/static/images/linkedin.png"
                  ></b-img
                ></a>
                <a href="https://www.instagram.com/kamranmemon99/" target="_blank"
                  ><b-img
                    alt="instagram"
                    width="21px"
                    class="mr-1"
                    src="~/static/images/instagram.png"
                  ></b-img
                ></a>
                <a href="https://github.com/kammy1996" target="_blank"
                  ><b-img
                    alt="github"
                    width="22px"
                    class="mr-1"
                    src="~/static/images/github.png"
                  ></b-img
                ></a>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </template>

    <div class="space-100"></div>

    <template class="current-mind">
      <b-container>
        <div class="mx-20 current-working">
          <b-row>
            <b-col lg="3" sm="2" xs="2">
              <div class="text-center">
                <div class="space-20"></div>
                <b-img
                  class="avatar-img"
                  width="120%"
                  alt="kamran avatar"
                  src="~/static/images/avatar.png"
                ></b-img>
              </div>
            </b-col>
            <b-col lg="9" sm="10" xs="10">
              <div >
                <p class="ml-2 text-center mind-text">What's on my mind?</p>
              </div>
              <div class="tweet-box">
                <p class="type-write">
                  Currently I’m working on a communication solution for School/university in Korea.
                </p>
                
                <b-img
                  class="tweet-options"
                  width="200px"
                  alt="tweet options"
                  src="~/static/images/tweet-options.jpg"
                ></b-img>
              </div>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </template>

    <div class="space-100"></div>
    <div class="space-50"></div>

    <template class="tech-stack">
      <h2 class="text-center">
        <span class="title-highlight">Tech</span> Stack
      </h2>
      <p class="text-center mt-n1">The Tools I love to build In.</p>

      <div class="space-20"></div>
      <b-img
        class="image-bg-left d-none d-md-block d-lg-block"
        width="800px"
        alt="background-image"
        src="~/static/images/image-bg-left.png"
      ></b-img>
      <b-container>
        <template class="stack-images">
          <b-row class="ml-2">
            <b-col lg="2" class="d-none d-md-block d-lg-block" > </b-col>
            <b-col>
              <div class="stack-box">
                <b-img
                  class="stack-image"
                  alt="vue"
                  src="@/static/images/tech-stack/stack-vue.png"
                  width="30px"
                  id="vue"
                ></b-img>
              </div>
            </b-col>
            <b-col>
              <div class="stack-box">
                <b-img
                  alt="css"
                  class="stack-image"
                  src="@/static/images/tech-stack/stack-css.png"
                  width="30px"
                  id="css"
                ></b-img>
              </div>
            </b-col>
            <b-col>
              <div class="stack-box">
                <b-img
                  class="stack-image"
                  src="@/static/images/tech-stack/stack-html.png"
                  width="30px"
                  alt="HTML"
                  id="html"
                ></b-img>
              </div>
            </b-col>
            <b-col>
              <div class="stack-box">
                <b-img
                  alt="Javascript"
                  class="stack-image"
                  src="@/static/images/tech-stack/stack-js.png"
                  width="30px"
                  id="js"
                ></b-img>
              </div>
            </b-col>
            <b-col>
              <div class="stack-box">
                <b-img
                  alt="react"
                  class="stack-image"
                  src="@/static/images/tech-stack/stack-react.png"
                  width="30px"
                  id="react"
                ></b-img>
              </div>
            </b-col>
            <b-col>
              <div class="stack-box">
                <b-img
                  class="stack-image"
                  alt="Node.js"
                  src="@/static/images/tech-stack/stack-node.png"
                  width="30px"
                  id="node"
                ></b-img>
              </div>
            </b-col>
            <b-col lg="2" class="d-none d-md-block d-lg-block"> </b-col>
          </b-row>
          <div class="space-30"></div>
          <b-row class="ml-2">
            <b-col lg="2" class="d-none d-md-block d-lg-block"> </b-col>
            <b-col>
              <div class="stack-box">
                <b-img
                  class="stack-image"
                  alt="Nuxt.js"
                  src="@/static/images/tech-stack/stack-nuxt.png"
                  width="30px"
                  id="nuxt"
                ></b-img>
              </div>
            </b-col>
            <b-col>
              <div class="stack-box">
                <b-img
                  class="stack-image"
                  alt="MySQL"
                  src="@/static/images/tech-stack/stack-sql.png"
                  width="30px"
                  id="sql"
                ></b-img>
              </div>
            </b-col>
            <b-col>
              <div class="stack-box">
                <b-img
                  alt="bitbucket"
                  class="stack-image"
                  src="@/static/images/tech-stack/stack-typescript.png"
                  width="30px"
                  id="bitbucket"
                ></b-img>
              </div>
            </b-col>            
            <b-col>
              <div class="stack-box">
                <b-img
                  alt="bitbucket"
                  class="stack-image"
                  src="@/static/images/tech-stack/stack-tailwind.png"
                  width="30px"
                  id="bitbucket"
                ></b-img>
              </div>
            </b-col>
            <b-col>
              <div class="stack-box">
                <b-img
                  class="stack-image"
                  alt="github"
                  src="@/static/images/tech-stack/stack-github.png"
                  width="30px"
                  id="github"
                ></b-img>
              </div>
            </b-col>
            <b-col>
              <div class="stack-box">
                <b-img
                  class="stack-image"
                  alt="pinia"
                  src="@/static/images/tech-stack/stack-pinia.png"
                  width="36px"
                  id="pinia"
                ></b-img>
              </div>
            </b-col>

            <b-col lg="2" class="d-none d-md-block d-lg-block"> </b-col>
          </b-row>
        </template>
      </b-container>
    </template>

    <div class="space-100"></div>
    <div class="space-50"></div>
      
    <template class="projects pr-10" >
      <h2 class="text-center">
        Latest <span class="title-highlight">Projects</span>
      </h2>
      <p class="text-center">some of my best work.</p>
      <div class="space-40"></div>

      <div class="blog-container">
        <div class="row gap-5">
          <div class="col-md-6 col-sm-12 col-xs-12 col-lg-6 project-card" v-for="project in homeProjects" @click="goToProject(project)">
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



      <div class="space-30"></div>
      <div class="text-center">
        <NuxtLink to="/work">
          <b-btn
            class="projects-btn hvr-bounce-to-top"
            @mouseover="hoverBtn"
            @mouseleave="unHoverBtn"
            >View all Projects</b-btn
          >
        </NuxtLink>
      </div>
    </template>
    <div class="space-100"></div>
    <div class="space-50"></div>
    <template class="hire-me">
      <b-img
        class="hire-me-bg-img d-none d-md-block d-lg-block"
        width="600px"
        alt="background-image"
        src="~/static/images/image-bg-right.png"
      ></b-img>
      <b-container>
        <b-row>
          <b-col lg="7">
            
              <h3 class="mt-1 hire-title">I can do</h3>
        
              <div class="main-hire-area mt-n2 ">
                <h3>
                  <ul class="hire-me-area">
                    <li class="hire-text">UI/UX Design</li>
                    <li class="hire-text">Frontend Development</li>
                    <li class="hire-text">Backend Development</li>
                    <li class="hire-text">App Architecture</li>
                  </ul>
                </h3>
              </div>
             

            <p class="hire-me-text" >
              With over 7 years of experience building web applications across diverse domains, including finance and healthcare, I specialize in frontend development, which I consider my strongest expertise and greatest passion.
            </p>
            <div class="space-10"></div>
            <NuxtLink to="/contact">
              <b-btn class="hire-me-btn hvr-underline-from-left"
                >Hire Me
                <font-awesome-icon
                  class="project-link-icon"
                  size="sm"
                  :icon="['fa', 'arrow-right-long']" /></b-btn
            ></NuxtLink>
          </b-col>
        </b-row>
      </b-container>
    </template>

    <div class="space-100"></div>
    <div class="space-50"></div>

    <b-container>
      <section >
        <div class="recognition-box">
          <h5 class="recognition-title">Recognition at <span > Hyperhire</span></h5>
          <div class="recognition-text">
            <p>I was recently featured on Hyperhire's website for my significant contributions to their projects. Check out the full interview with the CEO of Hyperhire. </p>
            <a href="https://blog.hyperhire.in/CEO-interview" target="_blank">Checkout</a>
          </div>
          </div>
      </section>
    </b-container>
  

    <div class="space-100"></div>
  </div>
</template>

<script>
import * as gsap from "~/utils/animations/home.js";
import projects from "../model/projects";
import { Home } from '../model/site-meta.js'; 

export default {
  name: "Home",
  head() { 
    return { 
      title:'Home | Kamran Memon | Portfolio',
      meta : Home,
    }
  },
  components: {},
  computed: {
    projects() {
      return projects;
    },
    isMobile() {
      return this.$store.getters[`getMobileState`];
    },
    homeProjects() {
       return projects.slice(0,4)
    }
  },

  methods: {
    initAnimations() {
      gsap.animateHome();
    },
    hoverBtn() {
      gsap.hoverBtn();
    },
    unHoverBtn() {
      gsap.unHoverBtn();
    },
    goToProject(project) { 
      this.$router.push(`/project/${project.key}`)
    }
  },
  mounted() {
    this.initAnimations();
  },
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



.sub-text {
  font-size: 18px;
  line-height: 28px;
}

.image-bg {
  position: absolute;
  right: 0;
}

.tweet-box {
  height: auto;
  max-width: 700px;
  background: rgba(0, 0, 0, 0.06);
  border-radius: 30px;
  padding: 15px 20px 0px 20px;
}

.recognition-box {
  background: rgba(0, 0, 0, 0.06);
  border-radius: 30px;
  padding: 20px 30px;
  border-bottom: 4px solid $primary-color;
}

.recognition-text { 
  display: flex;
  align-items: center;
  gap: 20px;
}



.type-write {
  font-size: 16px;
}

.main-title {
  font-weight: 700;
  font-size: 35px;
  width: 100%;

  .hi {
    position: relative;
    font-weight: bold;
    overflow: hidden;
    display: inline;
  }
  .cursor {
    font-weight: 300;
  }

  .box {
    background: $primary-color;
    height: 4px;
    width: 107px;
    z-index: -1;
    display: none;
  }

  .change-text {
    display: inline;
    background: $primary-color;
    color: white;
    text-shadow: 2px 2px 25px rgba(0, 0, 0, 0.1);
  }
}

.image-bg-left {
  position: absolute;
  z-index: -1;
}

.stack-box {
  height: 80px;
  width: 80px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  background: white;
  border-radius: 20px;
  padding: 20px;
}

.stack-image {
  display: block;
  margin: auto;
  padding-top: 5px;
}

.title-highlight {
  font-weight: 700;
  color: $primary-color;
}

.current-working {
  position: relative;
  top: 0;
}

.project-img {
  max-width: 100%;
  height:auto;
}

.projects-btn {
  background: transparent;
  color: black;
  border-radius: 50px;
  padding: 10px 20px;
  cursor: pointer;
  border: 1px solid black;
  z-index:1;
}

.main-hire-area {
  height: 45px;
  overflow: hidden;

  .hire-me-area {
    list-style-type: none;
    transform: translateY(50px);
    padding: 0;

    .hire-text {
      font-size: 27px;
      line-height: 45px;
      color: $primary-color;
      font-weight: 500;
    }
  }
}

.hire-title {
  font-weight: 300;
}

.hire-me-btn {
  background: white !important;
  color: black !important;
  border-radius: 0px;
  padding: 5px 15px;
}

.hire-me-bg-img {
  position: absolute;
  right: 0%;
}

.hire-me-text { 
  font-size:18px;
}

.profile-img { 
  max-width:80%;
  height:auto;
}




// Media only for desktop 
@media only screen and (min-width: 800px) {
 .avatar-img { 
  float:right;
}

  .mind-text { 
    text-align:left !important;
  }


  .hire-me-bg-img {
    margin-top: -200px;
  }
}

//media only for Mobile 
@media only screen and (max-width: 800px) {

  .main-hire-area { 
    margin-top: -25px;
  }

  .main-title {
    font-size: 25px;
  }

  
  .sub-text {
    font-size: 15px;
  }
 
}


//media only for Mobile 
@media only screen and (max-width: 450px) {
  .project-box { 
    max-width:96%;
  }
}


</style>
