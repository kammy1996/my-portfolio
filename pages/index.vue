<template>
  <div>
    <template class="hero-area">
      <div class="space-30"></div>
      <b-img
        class="image-bg"
        width="600px"
        src="~/static/images/image-bg-right.png"
      ></b-img>
      <b-container>
        <div class="space-50"></div>
        <b-row>
          <b-col lg="5">
            <b-img
              class="profile-img"
              width="400px"
              src="~/static/images/profile-img.png"
            ></b-img>
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
                I'm a Fullstack Web Developer who is addicted to Learning and
                loves Javascript.
              </p>
              <div class="social-icons mt-n2">
                <a href="#"
                  ><b-img
                    width="22px"
                    class="mr-1"
                    src="~/static/images/linkedin.png"
                  ></b-img
                ></a>
                <a href="#"
                  ><b-img
                    width="21px"
                    class="mr-1"
                    src="~/static/images/instagram.png"
                  ></b-img
                ></a>
                <a href="#"
                  ><b-img
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
            <b-col col lg="2"></b-col>
            <b-col col lg="1">
              <div class="space-50"></div>
              <b-img width="70%" src="~/static/images/avatar.png"></b-img>
            </b-col>
            <b-col col lg="8">
              <p class="ml-2">What's on my mind?</p>
              <div class="tweet-box">
                <p class="type-write">
                  Currently I’m working on a FinTech App to Manage Personal
                  Financing.
                </p>
                <b-img
                  class="mt-4"
                  width="200px"
                  src="~/static/images/tweet-options.png"
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
        class="image-bg-left"
        width="800px"
        src="~/static/images/image-bg-left.png"
      ></b-img>
      <b-container>
        <template class="stack-images">
          <b-row>
            <b-col lg="2"> </b-col>
            <b-col lg="1" class="mx-2">
              <div class="stack-box">
                <b-img
                  class="stack-image"
                  src="@/static/images/tech-stack/stack-bootstrap.png"
                  width="30px"
                  id="bootstrap"
                ></b-img>
              </div>
            </b-col>
            <b-col lg="1" class="mx-2">
              <div class="stack-box">
                <b-img
                  class="stack-image"
                  src="@/static/images/tech-stack/stack-bitbucket.png"
                  width="30px"
                  id="bitbucket"
                ></b-img>
              </div>
            </b-col>
            <b-col lg="1" class="mx-2">
              <div class="stack-box">
                <b-img
                  class="stack-image"
                  src="@/static/images/tech-stack/stack-css.png"
                  width="30px"
                  id="css"
                ></b-img>
              </div>
            </b-col>
            <b-col lg="1" class="mx-2">
              <div class="stack-box">
                <b-img
                  class="stack-image"
                  src="@/static/images/tech-stack/stack-github.png"
                  width="30px"
                  id="github"
                ></b-img>
              </div>
            </b-col>
            <b-col lg="1" class="mx-2">
              <div class="stack-box">
                <b-img
                  class="stack-image"
                  src="@/static/images/tech-stack/stack-html.png"
                  width="30px"
                  id="html"
                ></b-img>
              </div>
            </b-col>
            <b-col lg="1" class="mx-2">
              <div class="stack-box">
                <b-img
                  class="stack-image"
                  src="@/static/images/tech-stack/stack-js.png"
                  width="30px"
                  id="js"
                ></b-img>
              </div>
            </b-col>
            <b-col lg="1" class="mx-2">
              <div class="stack-box">
                <b-img
                  class="stack-image"
                  src="@/static/images/tech-stack/stack-mongo.png"
                  width="18px"
                  id="mongo"
                ></b-img>
              </div>
            </b-col>
            <b-col lg="2"> </b-col>
          </b-row>
          <div class="space-30"></div>
          <b-row>
            <b-col lg="3"> </b-col>
            <b-col lg="1" class="mx-2">
              <div class="stack-box">
                <b-img
                  class="stack-image"
                  src="@/static/images/tech-stack/stack-node.png"
                  width="30px"
                  id="node"
                ></b-img>
              </div>
            </b-col>
            <b-col lg="1" class="mx-2">
              <div class="stack-box">
                <b-img
                  class="stack-image"
                  src="@/static/images/tech-stack/stack-nuxt.png"
                  width="30px"
                  id="nuxt"
                ></b-img>
              </div>
            </b-col>
            <b-col lg="1" class="mx-2">
              <div class="stack-box">
                <b-img
                  class="stack-image"
                  src="@/static/images/tech-stack/stack-sql.png"
                  width="30px"
                  id="sql"
                ></b-img>
              </div>
            </b-col>
            <b-col lg="1" class="mx-2">
              <div class="stack-box">
                <b-img
                  class="stack-image"
                  src="@/static/images/tech-stack/stack-vue.png"
                  width="30px"
                  id="vue"
                ></b-img>
              </div>
            </b-col>
            <b-col lg="1" class="mx-2">
              <div class="stack-box">
                <b-img
                  class="stack-image"
                  src="@/static/images/tech-stack/stack-vuetify.png"
                  width="30px"
                  id="vuetify"
                ></b-img>
              </div>
            </b-col>
            <b-col lg="3"> </b-col>
          </b-row>
        </template>
      </b-container>
    </template>

    <div class="space-100"></div>
    <div class="space-50"></div>
    <template class="projects">
      <h2 class="text-center">
        Latest <span class="title-highlight">Projects</span>
      </h2>
      <p class="text-center">some of my best work.</p>
      <div class="space-40"></div>
      <b-row>
        <b-col lg="2"></b-col>
        <b-col lg="4" class="mx-2">
          <b-img
            width="500px"
            class="project-img"
            src="~/static/images/projects/bikeme.jpg"
          ></b-img>
          <ImageOverlay :project="projects[0]" />
        </b-col>
        <b-col lg="4" class="mx-2">
          <b-img
            width="500px"
            class="project-img"
            src="~/static/images/projects/todoers.jpg"
          ></b-img>
          <ImageOverlay :project="projects[1]" />
        </b-col>
        <b-col lg="2"></b-col>
      </b-row>

      <div class="space-30"></div>
      <b-row>
        <b-col lg="2"></b-col>
        <b-col lg="4" class="mx-2">
          <b-img
            width="500px"
            class="project-img"
            src="~/static/images/projects/kj-academy.jpg"
          ></b-img>
          <ImageOverlay :project="projects[2]" />
        </b-col>
        <b-col lg="4" class="mx-2">
          <b-img
            width="500px"
            class="project-img"
            src="~/static/images/projects/merchant-uk.jpg"
          ></b-img>
          <ImageOverlay :project="projects[3]" />
        </b-col>
        <b-col lg="2"></b-col>
      </b-row>
      <div class="space-50"></div>
      <div class="space-30"></div>
      <div class="text-center">
         <a>
          <b-btn
            class="projects-btn hvr-bounce-to-top "
            @mouseover="hoverBtn"
            @mouseleave="unHoverBtn"
            >View all Projects</b-btn
          >
        </a>
      </div>
       
    </template>
    <div class="space-100"></div>
    <div class="space-50"></div>
    <template class="hire-me">
      <b-img
        class="hire-me-bg-img"
       
        width="600px"
        src="~/static/images/image-bg-right.png"
      ></b-img>
      <b-container>
        <b-row>
          <b-col lg="7">
            <b-row>
              <b-col lg="3">
                <h3 class="mt-1 hire-title">I can do</h3>
              </b-col>
              <b-col lg="9">
                <div class="main-hire-area offset-sm-3">
                  <h3>
                    <ul class="hire-me-area">
                      <li class="hire-text">UI/UX Design</li>
                      <li class="hire-text">Frontend Development</li>
                      <li class="hire-text">Backend Development</li>
                      <li class="hire-text">App Architecture</li>
                    </ul>
                  </h3>
                </div>
              </b-col>
            </b-row>

            <div class="space-10"></div>
            <p>
              3+ years of experience in Building Web Applications in Various
              Domains including Finance, Healthcare. I Enjoy More of Frontend
              Development and Consider it as my Strongest Side.
            </p>
            <div class="space-10"></div>
            <b-btn class="hire-me-btn hvr-underline-from-left">Hire Me <font-awesome-icon class="project-link-icon" size="sm" :icon="['fa', 'arrow-right-long']"/></b-btn>
          </b-col>
        </b-row>
      </b-container>
    </template>

    <div class="space-100"></div>
    <div class="space-100"></div>
    <div class="space-50"></div>
  </div>
</template>

<script>
import * as gsap from "~/utils/animations/home.js";
import ImageOverlay from "../components/project-overlay.vue";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      projects: [
        {
          name: "BikeMe",
          date: "April 2019",
          id: 1,
          text: "Bikeme is an cycling Brand, which sells Cycles and accessories all over India",
          stackImages: [
            "/images/tech-stack/stack-vue.png",
            "/images/tech-stack/stack-vuetify.png",
            "/images/tech-stack/stack-laravel.png",
            "/images/tech-stack/stack-sql.png",
          ],
        },
        {
          name: "To Doers",
          date: "October 2020",
          id: 1,
          text: "A mid-Level To-do List application with all the major features like grouping, Sub-tasks and much more..",
          stackImages: [
            "/images/tech-stack/stack-vue.png",
            "/images/tech-stack/stack-vuetify.png",
            "/images/tech-stack/stack-node.png",
            "/images/tech-stack/stack-sql.png",
          ],
        },
        {
          name: "KJ Academy",
          date: "March 2018",
          id: 1,
          text: "A full Fledged Judo Academy Website.",
          stackImages: [
            "/images/tech-stack/stack-html.png",
            "/images/tech-stack/stack-css.png",
            "/images/tech-stack/stack-bootstrap.png",
            "/images/tech-stack/stack-jquery.png",
          ],
        },
        {
          name: "Merchant & Associates",
          date: "September 2018",
          id: 1,
          text: "A Portfolio Website of an Architect Based in UK.",
          stackImages: [
            "/images/tech-stack/stack-html.png",
            "/images/tech-stack/stack-css.png",
            "/images/tech-stack/stack-bootstrap.png",
            "/images/tech-stack/stack-jquery.png",
          ],
        },
      ],
    };
  },
  components: {
    ImageOverlay,
  },
  methods: {
    initAnimations() {
      gsap.animateHome();
    },
    playIntroAudio() {
      const audio_file = require("../static/assets/intro-audio.mp3").default;
      const beep = new Audio(audio_file);
      beep.play();
    },
    hoverBtn() {
      gsap.hoverBtn();
    },
    unHoverBtn() {
      gsap.unHoverBtn();
    },
  },
  mounted() {
    this.initAnimations();
    this.playIntroAudio();
  },
};
</script>

<style lang="scss" scoped>
@import "~/static/scss/main.scss";
@import "~/static/scss/hover.css";

.sub-text {
  font-size: 18px;
}

.image-bg {
  position: absolute;
  right: 0;
}

.tweet-box {
  height: 120px;
  width: 700px;
  background: rgba(0, 0, 0, 0.06);
  border-radius: 30px;
  padding: 15px 20px 0px 20px;
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

.projects-btn {
  background: transparent;
  color: black;
  border-radius: 50px;
  padding:10px 20px;
  cursor: pointer;
  border:1px solid black;
}

.main-hire-area {
height: 45px;
overflow: hidden;
margin-left: -42px;

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
background:white !important;
color:black !important;
border-radius:0px;
padding:5px 15px;
}

.hire-me-bg-img { 
  position:absolute;
  right: 0%;
  margin-top:-200px;
  width:40%;
}
</style>
