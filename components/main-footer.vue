<template>
  <div>
    <div class="footer-wrapper">
      <div class="space-30"></div>
      <div height="100px" class="marquee">
        <div class="track">
          <span class="quality" >Avid Reader</span>
          <span class="quality" >Self Learner</span>
          <span class="quality" >Loves Automation</span>
          <span class="quality" >Nerd with Humour</span>
          <span class="quality" >Gym Freak</span>
          <span class="quality" >Team Player</span>
          <span class="quality" 
            >Javascript is
            <font-awesome-icon
              class="project-link-icon"
              size="sm"
              :icon="['fas', 'heart']"
          /></span>
          <span class="quality" >Long term Investor </span>
          <span class="quality" >Productivity is bae </span>
          <span class="quality" >Health before Wealth</span>
        </div>
      </div>

      <b-container class="mt-n5">
        <b-row>
            <b-col lg="8">
              <h1 class="got-project">Got a Project ? <br> Let's Connect</h1>
              <div class="space-20"></div>
              <h3 class="footer-email" >kamranmemon25@gmail.com</h3>
            </b-col>  
            <b-col lg="4">
              <ul class="footer-links">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Work</a></li>
                <li><a href="">Contact</a></li>
              </ul>
              <div class="space-10"></div>
              <div class="footer-social-icons ml-4">
                <a  class="mx-1" href=""><b-img width="30%" src="~/static/images/github-outline.png"></b-img></a>
                <a class="mx-1" href=""> <b-img width="25%" src="~/static/images/instagram-outline.png"></b-img></a>
                <a class="mx-1" href=""><b-img width="30%" src="~/static/images/linkedin-outline.png"></b-img></a>
              </div>
            </b-col>  
        </b-row>
      </b-container>
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
  height: 500px;
}

.marquee {
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 200px;
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
  margin-left:150px;
}

.got-project { 
  font-size:60px;
  font-weight:700;
}

.footer-email { 
  font-size:20px;
  font-weight:300;
  text-decoration:underline;
}

.footer-links { 
  list-style-type:none;

  li { 
    margin-top:15px;
    font-size:18px;


    a {
      color:black;
      text-decoration: none;
      font-weight:300
    }
  }
}
</style>
