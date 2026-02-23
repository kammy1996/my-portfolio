<template>
  <div>
    <div class="hero-area">
      <div class="space-30"></div>
      <img
        class="image-bg hidden md:block -z-10"
        style="width: 600px; position: absolute; right: 0"
        alt="background-image"
        src="/images/image-bg-right.png"
      />
      <div class="container mx-auto px-4">
        <div class="space-50"></div>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-5/12">
            <div class="text-center">
              <img
                alt="kamran profile image"
                class="profile-img"
                src="/images/profile-img.png"
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12">
            <div class="space-50"></div>
            <div class="space-30"></div>
            <div class="text-content">
              <h3 class="main-title">
                <span class="hi">Hi, I'm</span>
                <span class="change-text"></span>
                <span class="cursor">_</span>
              </h3>
              <p class="sub-text">
                A tech enthusiast and full stack developer at heart, I thrive on
                learning and exploring new technologies, with <b>Vue.js</b> as a
                particular favorite. I live by
                <b>'Learn, Build, and Grow'</b> and love to journal my
                experiences along the way.
              </p>
              <div class="flex gap-2 mt-2" >
                <a href="https://twitter.com/kamranmemon25" target="_blank">
                  <img alt="twitter" style="width: 30px" class="mr-1" src="/images/twitter.png" />
                </a>
                <a href="https://www.linkedin.com/in/kamran-memon-1003a2111/" target="_blank">
                  <img alt="linkedin" style="width: 22px" class="mr-1" src="/images/linkedin.png" />
                </a>
                <a href="https://www.instagram.com/kamranmemon99/" target="_blank">
                  <img alt="instagram" style="width: 21px" class="mr-1" src="/images/instagram.png" />
                </a>
                <a href="https://github.com/kammy1996" target="_blank">
                  <img alt="github" style="width: 22px" class="mr-1" src="/images/github.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="space-100"></div>

    <div class="current-mind">
      <div class="container mx-auto px-4">
        <div class="mx-20 current-working">
          <div class="flex flex-wrap items-center">
            <div class="w-full lg:w-3/12">
              <div class="text-center">
                <div class="space-20"></div>
                <img
                  class="avatar-img"
                  alt="kamran avatar"
                  src="/images/avatar.png"
                />
              </div>
            </div>
            <div class="w-full lg:w-9/12">
              <div>
                <p class="ml-2 text-center mind-text">What's on my mind?</p>
              </div>
              <div class="tweet-box mt-2">
                <p class="type-write my-2 ml-4">
                  Currently, I am exploring the possibilities of AI and how it
                  is transforming the software engineering industry.
                </p>
                <img
                  class="tweet-options pb-2"
                  style="width: 200px"
                  alt="tweet options"
                  src="/images/tweet-options.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="space-100"></div>
    <div class="space-50"></div>

    <div class="tech-stack">
      <h2 class="text-center">
        <span class="title-highlight">Tech</span> Stack
      </h2>
      <p class="text-center" >The Tools I love to build In.</p>
      <div class="space-20"></div>
      <img
        class="image-bg-left hidden md:block"
        style="width: 800px; position: absolute; z-index: -1"
        alt="background-image"
        src="/images/image-bg-left.png"
      />
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap ml-2">
          <div class="w-full lg:w-2/12 hidden md:block"></div>
          <div class="w-auto lg:flex-1"><div class="stack-box"><img class="stack-image" alt="vue" src="/images/tech-stack/stack-vue.png" style="width:30px" id="vue" /></div></div>
          <div class="w-auto lg:flex-1"><div class="stack-box"><img class="stack-image" alt="css" src="/images/tech-stack/stack-css.png" style="width:30px" id="css" /></div></div>
          <div class="w-auto lg:flex-1"><div class="stack-box"><img class="stack-image" src="/images/tech-stack/stack-html.png" style="width:30px" alt="HTML" id="html" /></div></div>
          <div class="w-auto lg:flex-1"><div class="stack-box"><img class="stack-image" alt="Javascript" src="/images/tech-stack/stack-js.png" style="width:30px" id="js" /></div></div>
          <div class="w-auto lg:flex-1"><div class="stack-box"><img class="stack-image" alt="react" src="/images/tech-stack/stack-react.png" style="width:30px" id="react" /></div></div>
          <div class="w-auto lg:flex-1"><div class="stack-box"><img class="stack-image" alt="Node.js" src="/images/tech-stack/stack-node.png" style="width:30px" id="node" /></div></div>
          <div class="w-full lg:w-2/12 hidden md:block"></div>
        </div>
        <div class="space-30"></div>
        <div class="flex flex-wrap ml-2">
          <div class="w-full lg:w-2/12 hidden md:block"></div>
          <div class="w-auto lg:flex-1"><div class="stack-box"><img class="stack-image" alt="Nuxt.js" src="/images/tech-stack/stack-nuxt.png" style="width:30px" id="nuxt" /></div></div>
          <div class="w-auto lg:flex-1"><div class="stack-box"><img class="stack-image" alt="MySQL" src="/images/tech-stack/stack-sql.png" style="width:30px" id="sql" /></div></div>
          <div class="w-auto lg:flex-1"><div class="stack-box"><img class="stack-image" alt="TypeScript" src="/images/tech-stack/stack-typescript.png" style="width:30px" id="typescript" /></div></div>
          <div class="w-auto lg:flex-1"><div class="stack-box"><img class="stack-image" alt="Tailwind" src="/images/tech-stack/stack-tailwind.png" style="width:30px" id="tailwind" /></div></div>
          <div class="w-auto lg:flex-1"><div class="stack-box"><img class="stack-image" alt="github" src="/images/tech-stack/stack-github.png" style="width:30px" id="github" /></div></div>
          <div class="w-auto lg:flex-1"><div class="stack-box"><img class="stack-image" alt="pinia" src="/images/tech-stack/stack-pinia.png" style="width:36px" id="pinia" /></div></div>
          <div class="w-full lg:w-2/12 hidden md:block"></div>
        </div>
      </div>
    </div>

    <div class="space-100"></div>
    <div class="space-50"></div>

    <div class="projects">
      <h2 class="text-center">
        Latest <span class="title-highlight">Projects</span>
      </h2>
      <p class="text-center">some of my best work.</p>
      <div class="space-40"></div>

      <div class="blog-container">
        <div class="flex flex-wrap gap-5">
          <div
            class="w-full md:w-[calc(50%-10px)] project-card"
            v-for="project in homeProjects"
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

      <div class="space-30"></div>
      <div class="text-center">
        <NuxtLink to="/work">
          <button
            class="projects-btn"
            @mouseover="hoverBtn"
            @mouseleave="unHoverBtn"
          >View all Projects</button>
        </NuxtLink>
      </div>
    </div>

    <div class="space-100"></div>
    <div class="space-50"></div>

    <div class="hire-me">
      <img
        class="hire-me-bg-img hidden md:block"
        style="width: 600px; position: absolute; right: 0"
        alt="background-image"
        src="/images/image-bg-right.png"
      />
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap">
          <div class="w-full lg:w-7/12">
            <h3 class="mt-1 hire-title">I can do</h3>
            <div class="main-hire-area" style="margin-top: -8px">
              <h3>
                <ul class="hire-me-area">
                  <li class="hire-text">Software development</li>
                  <li class="hire-text">System Design</li>
                  <li class="hire-text">Software Architecture</li>
                </ul>
              </h3>
            </div>
            <p class="hire-me-text">
              The web is evolving rapidly with the advent of AI, and with over 8
              years of industry experience, I specialize in building performant,
              Scalable, accessible, and secure web applications.
            </p>
            <div class="space-10"></div>
            <NuxtLink to="/contact">
              <button class="hire-me-btn">
                Hire Me
                <Icon name="fa-solid:long-arrow-alt-right" class="project-link-icon" size="sm" />
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="space-100"></div>
    <div class="space-50"></div>

    <div class="container mx-auto px-4">
      <section>
        <div class="recognition-box">
          <h5 class="recognition-title">
            Recognition at <span>Hyperhire</span>
          </h5>
          <div class="recognition-text">
            <p>
              I was recently featured on Hyperhire's website for my significant
              contributions to their projects. Check out the full interview with
              the CEO of Hyperhire.
            </p>
            <a href="https://blog.hyperhire.in/CEO-interview" target="_blank">Checkout</a>
          </div>
        </div>
      </section>
    </div>

    <div class="space-100"></div>
  </div>
</template>

<script setup>
import * as gsapAnims from '~/utils/animations/home.js'
import projects from '~/model/projects'
import { Home } from '~/model/site-meta.js'

useHead({
  title: 'Home | Kamran Memon | Portfolio',
  meta: Home,
})

const router = useRouter()

const homeProjects = computed(() => projects.slice(0, 4))

const goToProject = (project) => {
  router.push(`/project/${project.key}`)
}

const hoverBtn = () => gsapAnims.hoverBtn()
const unHoverBtn = () => gsapAnims.unHoverBtn()

onMounted(() => {
  gsapAnims.animateHome()
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

.sub-text {
  font-size: 18px;
  line-height: 28px;
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
  height: auto;
}

.projects-btn {
  background: transparent;
  color: black;
  border-radius: 50px;
  padding: 10px 20px;
  cursor: pointer;
  border: 1px solid black;
  z-index: 1;
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
  background: white;
  color: black;
  border: 1px solid black;
  border-radius: 0px;
  padding: 5px 15px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.hire-me-btn::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: $primary-color;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.hire-me-btn:hover::before {
  transform: scaleX(1);
}

.hire-me-bg-img {
  position: absolute;
  right: 0%;
}

.hire-me-text {
  font-size: 18px;
}

.profile-img {
  max-width: 80%;
  height: auto;
}

// Media only for desktop
@media only screen and (min-width: 800px) {
  .avatar-img {
    float: right;
  }

  .mind-text {
    text-align: left !important;
  }

  .hire-me-bg-img {
    margin-top: -200px;
  }
}

// Media only for Mobile
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
</style>
