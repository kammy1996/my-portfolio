<template>
  <div>
    <Navbar />
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
        <div class="mx-20">
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
      
      <h2 class="text-center"><span class="tech">Tech</span> Stack</h2>
      <p class="text-center">The Tools I love to build In.</p>
   
      <div class="space-20"></div>
      <b-img
        class="image-bg-left"
        width="800px"
        src="~/static/images/image-bg-left.png"
      ></b-img>
      <b-container>
        <template class="stack-images">
          <b-row>
            <b-col lg="2" > </b-col>
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
                  class="stack-image "
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
            <b-col lg="3" > </b-col>
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
            <b-col lg="3" > </b-col>
          </b-row>
        </template>
      </b-container>
    </template>
    <div class="space-100"></div>
  </div>
</template>

<script>
import Navbar from "../components/head-navbar.vue";
import * as gsap from "~/utils/animations/home.js";

export default {
  name: "Home",
  components: {
    Navbar,
  },
  data() {
    return {
      techStack: [
        {
          name: "bitbucket",
          src: "~/static/images/stack-bitbucket.png",
          id: "bitbucket",
        },
      ],
    };
  },
  methods: {
    initAnimations() {
      gsap.heroArea();
      gsap.typeWriting();
    },
    playIntroAudio() {
      const audio_file = require("../static/assets/intro-audio.mp3").default;
      const beep = new Audio(audio_file);
      beep.play();
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

.tech {
  font-weight: 700;
  color: $primary-color;
}
</style>
