<template>
  <div>
    <div class="space-30"></div>
    <b-img
      class="image-bg-right d-none d-md-block d-lg-block"
      width="600px"
      src="~/static/images/image-bg-right.png"
    ></b-img>
    <b-container>
      <p class="page-title">Contact</p>
      <h1 class="contact-title">Let's make it <br />happen</h1>
      <div class="space-10"></div>
      <p class="email-line">
        If you like mails click
        <span class="email"
          ><a href="mailto:kamranmemon@gmail.com"
            >kamranmemon25@gmail.com</a
          ></span
        >
      </p>

      <div class="space-50"></div>
      <div class="contact-form" v-if="!isFormSubmitted">
        <v-form
          v-model="contactForm"
          ref="contact-form"
          @submit.prevent="submitForm"
          method="POST"
        >
          <v-text-field
            :rules="[(v) => !!v || 'Name is required']"
            v-model="contact.name"
            label="What's your name? "
          ></v-text-field>
          <div class="space-10"></div>
          <v-text-field
            :rules="[
              (v) => !!v || 'Email is required',
              (v) =>
                !v ||
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                'E-mail must be valid',
            ]"
            v-model="contact.email"
            label="Your Email "
          ></v-text-field>
          <div class="space-10"></div>
          <v-textarea
            :rules="[(v) => !!v || 'Project details is required']"
            rows="3"
            v-model="contact.details"
            label="Tell us about your Project?"
          ></v-textarea>
          <div class="space-50"></div>
          <b-btn
            class="send-btn hvr-underline-from-left"
            style="color: black"
            type="submit"
            >Send Email</b-btn
          >
        </v-form>
      </div>
      <div v-else>
        <p class="contact-submitted-text">
          <span class="contact-sub-text"> Thank you for showing Interest</span>.
          I will get back to you shortly!
          <font-awesome-icon
            class="project-link-icon"
            size="sm"
            :icon="['fa', 'face-smile']"
          />
        </p>
      </div>
    </b-container>
    <div class="space-50"></div>

    <b-img class="contact-img" src="~/static/images/contact-img.jpg"></b-img>
  </div>
</template>

<script>
import * as gsap from "~/utils/animations/contact.js";
import { Contact } from '../model/site-meta.js'; 


export default {
  name: "Contact",
  head() {
    return {
      title: "Contact | Kamran Memon | Frontend Developer (Vue.js)",
      meta: Contact
    };
  },
  mounted() {
    gsap.initAnime();
  },
  data() {
    return {
      contact: {},
      isFormSubmitted: false,
      contactForm: false,

      endpoint: "https://formspree.io/f/xnqworrp",
    };
  },
  methods: {
    // sendEmail() {
    //   this.$refs[`contact-form`].validate();
    //   if (this.contactForm) {
    //     this.$mail
    //       .send({
    //         from: this.contact.email,
    //         subject: `message from ${this.contact.name}`,
    //         text: this.contact.details,
    //       })
    //       .then(() => {
    //         this.isFormSubmitted = true;
    //       });
    //   }
    // },

    async submitForm() {
      this.$refs[`contact-form`].validate();
      if (this.contactForm) {
        const data = {
          email: this.contact.email,
          name: this.contact.name,
          message: this.contact.details,
        };
        try {
          const response = await this.$axios.post(this.endpoint, data);
          if (response) {
            this.isFormSubmitted = true;
          }
        } catch (error) {
          console.log(
            "🚀 ~ file: contact.vue ~ line 116 ~ submitForm ~ response",
            response
          );
        }
      }
    },
  },
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
  max-width: 600px;

  .custom-field:hover {
    box-shadow: none !important;
  }

  .custom-field:focus {
    box-shadow: none !important;
  }

  .send-btn {
    background: transparent;
    border: none;
  }

  .send-btn:focus {
    box-shadow: none;
  }
}

.contact-img {
  width: 100%;
}

.image-bg-right {
  position: absolute;
  z-index: -1;
  right: 0;
}

.contact-submitted-text {
  font-size: 18px;

  .contact-sub-text {
    color: $primary-color;
    font-weight: 500;
  }
}

@media only screen and (max-width: 800px) {
  .contact-title {
    font-size: 35px;
  }
}

</style>
