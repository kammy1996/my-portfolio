<template>
  <div>
    <div class="space-10"></div>
    <template class="title-area">
      <b-row no-gutters>
        <b-col lg="6">
          <div class="img-holder ">
            <b-img
            class="title-img"
            alt="Kamran Cover Image"
            src="~/static/images/about-title-img.jpg"
          ></b-img>
          </div>
        </b-col>
        <b-col>
          <div class="title-area">
            <div class="space-100"></div>
            <h1 class="title-heading">Hello</h1>
            <h1 class="title-heading ">I'm Kamran</h1>

            <div class="space-50"></div>
            <p class="title-sub-text">
              I am an Indian Full Stack Web Developer and a Technology
              Enthusiast. Want to Know more about me keep Scrolling!
            </p>
            <div class="space-50"></div>
          </div>
        </b-col>
      </b-row>
    </template>

    <div class="space-100"></div>

    <template class="journey-area">
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
    </template>
    <div class="space-100"></div>

    <template class="work-history-area">
      <b-img
        width="600px"
        class="image-bg-right d-none d-md-block d-lg-block"
        alt="background-image"
        src="~/static/images/image-bg-right.png"
      ></b-img>
      <b-container>
        <a class="resume-btn" href="/assets/my-resume.pdf"  target="_blank"
          ><font-awesome-icon
            class="project-link-icon"
            size="sm"
            :icon="['fa', 'arrow-down']"
          />
          Download Resume</a
        >
        <div class="space-50"></div>
        <div class="line"></div>
        <WorkHistoryElement :work="workHistory[0]" />
        <div class="line"></div>
        <WorkHistoryElement :work="workHistory[1]" />
        <div class="line"></div>
        <WorkHistoryElement :work="workHistory[2]" />
        <div class="line"></div>
      </b-container>
    </template>

    <div class="space-100"></div>

    <template class="more-about-me">
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
    </template>
    <div class="space-100"></div>

    <template class="inspiration">
      <b-img
        width="600px "
        class="image-bg-left d-none d-md-block d-lg-block"
        alt="background-image"
        src="~/static/images/image-bg-left.png"
      ></b-img>
      <b-container>
        <h3 class="inspiration-title">Inspiration</h3>
        <p class="inspiration-text">
          The People I have been stealing Ideas from.
        </p>

        <div class="space-30"></div>
        <div class="text-center">
          <b-row>
            <b-col lg="4">
              <div class="inspiration-box">
                <b-img width="50%" alt="Web Development" src="~/static/images/web-dev.png"></b-img>
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
            </b-col>
            <b-col lg="4">
              <div class="inspiration-box">
                <b-img width="55%" alt="Book reading" src="~/static/images/books.png"></b-img>
                <div class="space-20"></div>
                <h4 class="inspiration-list-title">Books</h4>
                <div class="space-20"></div>
                <div class="line"></div>
                <p class="inspiration-list-text">Steal like an artist.</p>
                <div class="line"></div>
                <p class="inspiration-list-text">The pyschology of Money.</p>
                <div class="line"></div>
                <p class="inspiration-list-text">
                  The Alamanack of Naval Ravikant.
                </p>
                <div class="line"></div>
              </div>
            </b-col>
            <b-col lg="4">
              <div class="inspiration-box">
                <b-img width="55%" alt="Finance Enthusiast" src="~/static/images/finance.png" style="opacity:0.8"></b-img>
                <div class="space-20"></div>
                <h4 class="inspiration-list-title">Finance</h4>
                <div class="space-20"></div>
                <div class="line"></div>
                <p class="inspiration-list-text">Warren Buffet</p>
                <div class="line"></div>
                <p class="inspiration-list-text">Akshat Srivastava</p>
                <div class="line"></div>
                <p class="inspiration-list-text">Ankur Warikoo</p>
                <div class="line"></div>
              </div>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </template>

    <div class="space-100"></div>
    <div class="space-50"></div>
  </div>
</template>

<script>
import WorkHistoryElement from "@/components/work-history-element";
import * as gsap from "@/utils/animations/about"
import { About } from '../model/site-meta.js'; 


export default {
  name: "About",
  head() { 
    return { 
      title:'About | Kamran Memon | Frontend Developer (Vue.js)',
      meta : About
    }
  },
  components: {
    WorkHistoryElement,
  },
  mounted() { 
    this.initAnimations();
  },
  methods : { 
    initAnimations() {
      gsap.animateAbout();
    }
  },
  data() {
    return {
      workHistory: [
        // {
        //   company: "rocketfuel",
        //   logo: "/images/work-history/rocket-fuel.svg",
        //   url:'https://www.rocketfuelblockchain.com/',
        //   imgAlt:'RocketFuel Blockchain',
        //   designation: "Senior Frontend Engineer",
        //   period: "July 2022 - Present",
        //   location: "Remote",
        //   width: "130px",
        //   desc: "RocketFuel is global payments processing company offering highly efficient one-click check-out solutions using cryptocurrencies.",
        //   current: true,
        // },
        {
          company: "aventior",
          url:'https://aventior.com/',
          logo: "/images/work-history/aventior.png",
          imgAlt:'Aventior Digital',
          designation: "Frontend Developer",
          period: "Nov 2020 - Present",
          location: "Remote",
          width: "130px",
          desc: "worked on an enterprise-level product named Thread. It is a fully configurable decentralized clinical trial product and the only no-code platform in the industry.",
          current: true,
        },
        {
          company: "weizmann",
          logo: "/images/work-history/weizmann.png",
          imgAlt:'Weizmann forex',
          url:'https://www.weizmannimpex.com/',
          designation: "Web & Graphic Designer",
          period: "April 2019 - Nov 2020",
          location: "Mumbai",
          width: "130px",
          desc: "Maintaining and updating Primary Websites of the Associate Businesses of the Weizmann group.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~/static/scss/main.scss";

.title-area {
  background: rgba(0, 0, 0, 0.05);
  height: 100%;
  width: 100%;
  z-index: -1;

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
  max-width:60%;
  margin-left:150px;
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
  margin:0% 5%
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

.image-bg-right {
  position: absolute;
  right: 0;
  z-index: -1;
}
.image-bg-left {
  position: absolute;
  left: 0;
  z-index: -1;
}

.inspiration-title {
  font-size: 25px;
  font-weight: 700;
}
inspiration-title 
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
  margin:0px 30px;
}

.img-holder img { 
  max-width:100%;
}


//media only for Desktop 
@media only screen and (min-width: 800px) {
  .title-heading {
    margin-left: -50px;
  }

  .journey-text {
    margin: 0 25%;
  }
}

//media only for Mobile 
@media only screen and (max-width: 800px) {
  .img-holder img { 
    width:400px;
  }

  .inspiration-title { 
    text-align:center;
  }

  .inspiration-text { 
    text-align:center;
  }

  .title-heading,
  .title-sub-text
  {
    text-align:center;
    font-size:35px;
  }

  .title-sub-text {
    font-size: 18px;
    margin:auto;
    text-align:center !important;
    max-width:80%;
   
  }
}



</style>
