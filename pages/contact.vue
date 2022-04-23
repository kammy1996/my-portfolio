<template>
  <div>
    <div class="space-30"></div>
      <b-img
        class="image-bg-right"
        width="600px"
        src="~/static/images/image-bg-right.png"
      ></b-img>
    <b-container>
      <p class="page-title">Contact</p>
      <h1 class="contact-title">Let's make it <br />happen</h1>
      <div class="space-10"></div>
      <p class="email-line">
        If you like mails <span class="email">kamranmemon25@gmail.com</span>
      </p>

      <div class="space-50"></div>
      <div class="contact-form">  
          <v-form>
            <v-text-field label="What's your name? "></v-text-field>
            <div class="space-10"></div>
            <v-text-field label="Your Email "></v-text-field>
            <div class="space-10"></div>
            <v-textarea rows="3" label="Tell us about your Project?"></v-textarea>
            <div class="space-50"></div>
            <b-btn class="send-btn hvr-underline-from-left" style="color:black;">Send Email</b-btn>
          </v-form>
      </div>

      </b-container>
      <div class="space-50"></div>
    
      <b-img class="contact-img" src="~/static/images/contact-img.jpg"></b-img>
   
  </div>
</template>

<script>
import * as gsap from "~/utils/animations/contact.js"

export default {
  name: "Contact",
  mounted() { 
    gsap.initAnime();
  }
};
</script>

<style lang="scss" scoped>
@import "~/static/scss/main.scss";
@import "~/static/scss/hover.css";

.contact-title {
  font-size: 60px;
  font-weight: 700;
}

.page-title {
  text-transform: uppercase;
  opacity: 0.9;
}

.email-line {
  font-size: 18px;
}
.email {
  text-decoration: underline;
}

.contact-form { 
  width:600px;

  

  .custom-field:hover { 
    box-shadow: none !important;
  }

  .custom-field:focus { 
    box-shadow: none !important;
  }

  .send-btn { 
    background:transparent;
    border:none;
  }

  .send-btn:focus { 
    box-shadow: none;
  }
}

.contact-img { 
  width:100%
}

.image-bg-right {
  position: absolute;
  z-index: -1;
  right:0
}

</style>
