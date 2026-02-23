<template>
  <div>
    <div class="space-10"></div>
    <div class="title-area-wrapper">
      <div class="flex flex-wrap" style="gap:0">
        <div class="w-full lg:w-6/12">
          <div class="img-holder">
            <img
              class="title-img"
              alt="Kamran Cover Image"
              src="/images/about-title-img.jpg"
            />
          </div>
        </div>
        <div class="w-full lg:flex-1">
          <div class="title-area">
            <div class="space-100"></div>
            <h1 class="title-heading">Hello</h1>
            <h1 class="title-heading">I'm Kamran</h1>
            <div class="space-50"></div>
            <p class="title-sub-text">
              I am an Indian Full Stack Web Developer and a Technology
              Enthusiast. Want to Know more about me keep Scrolling!
            </p>
            <div class="space-50"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="space-100"></div>

    <div class="journey text-center">
      <h3 class="area-title">
        The <span class="area-sub-title">Journey</span>
      </h3>
      <div class="space-10"></div>
      <p class="journey-text">
        I Started my Journey with the first tool Photoshop, that kind of gave
        me the Super power. Then onwards It was no stopping by, learning and
        growing Digitally became my Second Nature.
      </p>
    </div>

    <div class="space-100"></div>

    <div class="work-history-area">
      <img
        style="width: 600px; position: absolute; right: 0; z-index: -1"
        class="hidden md:block"
        alt="background-image"
        src="/images/image-bg-right.png"
      />
      <div class="container mx-auto px-4">
        <a class="resume-btn" href="/assets/my-resume.pdf" target="_blank">
          <Icon name="fa-solid:arrow-down" class="project-link-icon" size="sm" />
          Download Resume
        </a>
        <div class="space-50"></div>
        <div class="line"></div>
        <WorkHistoryElement :work="workHistory[0]" />
        <div class="line"></div>
        <WorkHistoryElement :work="workHistory[1]" />
        <div class="line"></div>
        <WorkHistoryElement :work="workHistory[2]" />
        <div class="line"></div>
        <WorkHistoryElement :work="workHistory[3]" />
        <div class="line"></div>
        <WorkHistoryElement :work="workHistory[4]" />
        <div class="line"></div>
        <WorkHistoryElement :work="workHistory[5]" />
        <div class="line"></div>
      </div>
    </div>

    <div class="space-100"></div>

    <div class="text-center">
      <h3 class="area-title">
        More <span class="area-sub-title">About</span> Me
      </h3>
      <div class="space-10"></div>
      <p class="journey-text">
        Apart from being a Developer, I am an Avid book reader and a Finance
        Enthusiasts. Half of the things I learned in Life personally and
        professionally comes from Reading books.
      </p>
    </div>

    <div class="space-100"></div>

    <div class="inspiration-section">
      <img
        style="width: 600px; position: absolute; left: 0; z-index: -1"
        class="hidden md:block"
        alt="background-image"
        src="/images/image-bg-left.png"
      />
      <div class="container mx-auto px-4">
        <h3 class="inspiration-title">Inspiration</h3>
        <p class="inspiration-text">The People I have been stealing Ideas from.</p>
        <div class="space-30"></div>
        <div class="text-center">
          <div class="flex flex-wrap">
            <div class="w-full lg:w-4/12">
              <div class="inspiration-box">
                <img style="width: 50%" alt="Web Development" src="/images/web-dev.png" />
                <div class="space-20"></div>
                <h4 class="inspiration-list-title">Web Development</h4>
                <div class="space-20"></div>
                <div class="line"></div>
                <p class="inspiration-list-text">James Q Quick</p>
                <div class="line"></div>
                <p class="inspiration-list-text">Web Dev Simplified</p>
                <div class="line"></div>
                <p class="inspiration-list-text">ProgrammingErik</p>
                <div class="line"></div>
              </div>
            </div>
            <div class="w-full lg:w-4/12">
              <div class="inspiration-box">
                <img style="width: 55%" alt="Book reading" src="/images/books.png" />
                <div class="space-20"></div>
                <h4 class="inspiration-list-title">Books</h4>
                <div class="space-20"></div>
                <div class="line"></div>
                <p class="inspiration-list-text">Steal like an artist.</p>
                <div class="line"></div>
                <p class="inspiration-list-text">The pyschology of Money.</p>
                <div class="line"></div>
                <p class="inspiration-list-text">The Alamanack of Naval Ravikant.</p>
                <div class="line"></div>
              </div>
            </div>
            <div class="w-full lg:w-4/12">
              <div class="inspiration-box">
                <img style="width: 55%; opacity: 0.8" alt="Finance Enthusiast" src="/images/finance.png" />
                <div class="space-20"></div>
                <h4 class="inspiration-list-title">Finance</h4>
                <div class="space-20"></div>
                <div class="line"></div>
                <p class="inspiration-list-text">Warren Buffet</p>
                <div class="line"></div>
                <p class="inspiration-list-text">Charlie Munger</p>
                <div class="line"></div>
                <p class="inspiration-list-text">Morgan Housel</p>
                <div class="line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="space-100"></div>
    <div class="space-50"></div>
  </div>
</template>

<script setup>
import * as gsapAnims from '~/utils/animations/about.js'
import { About } from '~/model/site-meta.js'

useHead({
  title: 'About | Kamran Memon | Portfolio',
  meta: About,
})

const workHistory = [
  {
    company: 'digitas-india',
    logo: '/images/work-history/digitas.png',
    url: 'https://www.digitas.com/en-us',
    imgAlt: 'Digitas India',
    designation: 'Lead Frontend Engineer',
    period: 'Mar 2025 - Present',
    location: 'Mumbai, India',
    width: '100px',
    desc: 'As a Lead Frontend Engineer specializing in Nuxt 3 and Vue 3, I oversee system design, accessibility, testing, and security. I\'m also involved in mentoring the team, Code reviews, and engaging with business stakeholders to shape the site\'s future direction.',
    current: true,
  },
  {
    company: 'encora',
    logo: '/images/work-history/encora.svg',
    url: 'https://www.encora.com/',
    imgAlt: 'Encora',
    designation: 'Senior Software Engineer',
    period: 'Mar 2023 - Mar 2025',
    location: 'Remote',
    width: '150px',
    desc: 'Worked as a senior frontend developer at Encora, a leading player in outsourced product development, partnering with fast-growing tech companies to drive innovation through agile methodologies, expertise in cutting-edge technologies, and a global talent pool.',
    current: false,
  },
  {
    company: 'rocketfuel',
    logo: '/images/work-history/rocket-fuel.svg',
    url: 'https://www.rocketfuelblockchain.com/',
    imgAlt: 'RocketFuel Blockchain',
    designation: 'Senior Software Engineer',
    period: 'July 2022 - Feb 2023',
    location: 'Remote',
    width: '130px',
    desc: 'Worked as a Senior frontend developer at RocketFuel, a global payments processing company offering highly efficient one-click check-out solutions using cryptocurrencies.',
    current: false,
  },
  {
    company: 'aventior',
    url: 'https://aventior.com/',
    logo: '/images/work-history/aventior.png',
    imgAlt: 'Aventior Digital',
    designation: 'Frontend Developer - Vue.js',
    period: 'Nov 2020 - July 2022',
    location: 'Remote',
    width: '130px',
    desc: 'Worked on an enterprise-level product named Thread. It is a fully configurable decentralized clinical trial product and the only no-code platform in the industry.',
  },
  {
    company: 'weizmann',
    logo: '/images/work-history/weizmann.png',
    imgAlt: 'Weizmann forex',
    url: 'https://www.weizmannimpex.com/',
    designation: 'Web Developer',
    period: 'April 2019 - Nov 2020',
    location: 'Mumbai',
    width: '130px',
    desc: 'Maintaining Primary Websites of the Associate Businesses of the Weizmann group.',
  },
  {
    company: 'rugby-india',
    logo: '/images/work-history/rugby-india.png',
    imgAlt: 'Rugby India',
    url: 'https://indiarugby.com/',
    designation: 'Web Designer',
    period: 'June 2017 - Nov 2019',
    location: 'Mumbai',
    width: '80px',
    desc: 'Managing primary website and registration process of the rugby fraternity.',
  },
]

onMounted(() => {
  gsapAnims.animateAbout()
})
</script>

<style lang="scss" scoped>
$primary-color: #F5989D;

.title-area {
  background: rgba(0, 0, 0, 0.05);
  height: 100%;
  width: 100%;
  z-index: -1;
  padding: 0 30px;

  .title-heading {
    letter-spacing: 3px;
  }
}

.title-heading {
  font-size: 70px;
  font-weight: 700;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
}

.title-sub-text {
  font-size: 22px;
  max-width: 60%;
  margin-left: 150px;
}

.journey {
  text-align: center;
}

.area-title {
  font-size: 25px;
}

.area-sub-title {
  color: $primary-color;
  font-weight: 700;
}

.journey-text {
  font-size: 20px;
  margin: 0% 5%;
}

.resume-btn {
  float: right;
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.line {
  height: 0.5px;
  background: black;
  width: 100%;
}

.inspiration-title {
  font-size: 25px;
  font-weight: 700;
}

.inspiration-text {
  font-size: 15px;
}

.inspiration-list-title {
  font-size: 18px;
  text-transform: uppercase;
}

.inspiration-list-text {
  margin: 20px 0px;
}

.inspiration-box {
  margin: 0px 30px;
}

.img-holder img {
  max-width: 100%;
}

// Media only for Desktop
@media only screen and (min-width: 800px) {
  .title-heading {
    margin-left: -50px;
  }

  .journey-text {
    margin: 0 25%;
  }
}

// Media only for Mobile
@media only screen and (max-width: 800px) {
  .img-holder img {
    width: 400px;
  }

  .inspiration-title,
  .inspiration-text {
    text-align: center;
  }

  .title-heading,
  .title-sub-text {
    text-align: center;
    font-size: 35px;
  }

  .title-sub-text {
    font-size: 18px;
    margin: auto;
    text-align: center !important;
    max-width: 80%;
  }
}
</style>
