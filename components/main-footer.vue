<template>
  <div>
    <div class="footer-wrapper">
      <div class="space-30"></div>
      <div class="marquee">
        <div class="track">
          <span class="quality">Avid Reader</span>
          <span class="quality">Self Learner</span>
          <span class="quality">Loves Automation</span>
          <span class="quality">Nerd with Humour</span>
          <span class="quality">Content Writer</span>
          <span class="quality">Finance enthusiast </span>
          <span class="quality">Team Player</span>
          <span class="quality"
            >Javascript is
            <font-awesome-icon
              class="project-link-icon"
              size="sm"
              :icon="['fas', 'heart']"
          /></span>
          <span class="quality">Long term Investor </span>
          <span class="quality">Less is more</span>
        </div>
      </div>

      <div class="space-30 d-none d-md-block d-lg-block"></div>
      <b-container >
        <b-row>
          <b-col lg="7">
            <h1 class="got-project">
              Got a Project ? <br />
              Let's Connect
            </h1>
            <div class="space-20"></div>
            <a href="mailto:kamranmemon25@gmail.com"><h3 class="footer-email">kamranmemon25@gmail.com</h3></a>
          </b-col>
          <b-col lg="5">
            <ul class="footer-links">
              <li>
                <NuxtLink to="/">Home <span class="underline"></span></NuxtLink>
              </li>

              <li>
                <NuxtLink to="/about"
                  >About <span class="underline"></span
                ></NuxtLink>
              </li>

              <li>
                <NuxtLink to="/work"
                  >Work <span class="underline"></span
                ></NuxtLink>
              </li>
              <li>
                <NuxtLink to="/blog"
                  >Blog <span class="underline"></span
                ></NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact"
                  >Contact<span class="underline"></span
                ></NuxtLink>
              </li>
            </ul>
            <div class="space-10"></div>
            <div class="footer-social-icons text-center">
              <a href="https://twitter.com/kamranmemon25" target="_blank">
                <b-img
                  alt="Twitter"
                  width="30%"
                  src="https://img.icons8.com/dotty/80/null/twitter.png"
                ></b-img
              ></a>
              <a href="https://github.com/kammy1996" target="_blank"
                ><b-img
                  alt="Github"
                  width="30%"
                  src="https://img.icons8.com/dotty/80/000000/github.png"
                ></b-img
              ></a>
              <a href="https://www.linkedin.com/in/kamran-memon-1003a2111/" target="_blank"
                ><b-img
                  alt="Linkedin"
                  width="30%"
                  src="https://img.icons8.com/dotty/80/000000/linkedin.png"
                ></b-img
              ></a>
               <a href="https://www.instagram.com/kamranmemon99/" target="_blank">
                <b-img
                  alt="Instagram"
                  width="30%"
                  src="https://img.icons8.com/dotty/80/000000/instagram-new.png"
                ></b-img
              ></a>
            </div>
          </b-col>
        </b-row>
      </b-container>
       <div class="space-100 "></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainFooter",
};
</script>

<style lang="scss" scoped>
.footer-wrapper {
  background: rgba(0, 0, 0, 0.05);

  width:100%;
}

.marquee {
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 100px;
  overflow-x: hidden;
}

.track {
  position: absolute;
  white-space: nowrap;
  will-change: transform;
  animation: marquee 15s linear infinite;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-40%);
  }
}

.quality {
  margin-right: 60px;
  font-size: 20px;
  font-weight: 300;
}

.quality:first-child {
  margin-left: 150px;
}

.got-project {
  font-size: 60px;
  font-weight: 700;
}

.footer-email {
  font-size: 20px;
  font-weight: 300;
  text-decoration: underline;
}

.footer-links {
  list-style-type: none;
  text-align: center;

  li {
    margin-top: 15px;
    font-size: 18px;

    a {
      color: black;
      text-decoration: none;
      font-weight: 300;
    }
  }
}


//media only for Mobile 
@media only screen and (max-width: 800px) {
  .got-project {
    font-size: 35px;
    text-align:center;
    font-weight: 700;
  }

  .footer-email { 
    font-size:16px;
    text-align:center;
  }
}

</style>
