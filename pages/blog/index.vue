<template>
  <div>
    <div class="space-40"></div>
    <h3 class="main-title text-center">
      My <span class="title-highlight">Blog</span>
    </h3>
    <p class="text-center mt-n1">I like to Journalize the journey.</p>
    <div class="space-30"></div>
    <b-container class="blog">
      <div v-for="(blog, index) in blogsList" :key="index">
        <b-row class="mb-5">
          <b-col lg="5" md="5" sm="12" cols="12">
            <nuxt-link :to="`/blog/${blog.slug.current}`">
              <SanityImage
                class="title-image"
                :alt="blog.title"
                width="90%"
                :asset-id="getImageURL(blog)"
              />
            </nuxt-link>
          </b-col>
          <b-col lg="7" md="7" sm="12" cols="12">
            <div class="custom-container">
              <div class="d-none d-lg-block d-md-block space-30"></div>
              <nuxt-link :to="`/blog/${blog.slug.current}`">
                <h3 class="title">{{ blog.title }}</h3></nuxt-link
              >
              <p class="date">{{ getFormattedDate(blog.date) }}</p>
              <div class="tags" v-if="blog.tags && blog.tags.length > 0">
                  <div class="tag" v-for="(tag, index) in blog.tags" :key="index">
                    {{ tag }}
                  </div>
              </div>
              <p class="subtext mt-3">{{ blog.subtext }}</p>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>
<script>
import { groq } from "@nuxtjs/sanity";
import { Blog } from "../../model/site-meta.js";
import * as gsap from "../../utils/animations/blog";
import _ from 'lodash';

export default {
  name: "Blog",
  head() {
    return {
      title: "Blog | Kamran Memon | Frontend Developer (Vue.js)",
      meta: Blog,
    };
  },
  data() {
    return {
      blogsList: [],
    };
  },

  created() { 
    this.getAllBlogs();
  },
  methods: {
    async getAllBlogs() {
      const query = groq`*[_type == "blogsList"]`;
      try {
        const response = await this.$sanity.fetch(query);
        if (response) {
          this.blogsList = _.orderBy(response,'date',['desc']);
        }
      } catch (err) {
        console.log("🚀 ~ file: blog.vue ~ line 36 ~ getAllBlogs ~ err", err);
      }
    },
    getImageURL(blog) {
      return blog.image.asset._ref;
    },
    getFormattedDate(date) {
      return new Date(date).toLocaleDateString("en-us", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~/static/scss/main.scss";

.title-highlight {
  font-weight: 700;
  color: $primary-color;
}

.blog {
  .title-image {
    display: block;
    margin: auto;
  }

  .title {
    font-size: 25px;
    font-weight: 600;
  }

  .date {
    font-size: 14px;
    opacity: 0.9;
    margin-top: -5px;
  }

  .tags {
    margin-top: -15px;
  }


  .tag {
    display:inline-block; 
    background: transparent;
    border: 1px solid black;
    margin-right: 5px;
    font-size: 13px;
    padding: 5px 10px;
    border-radius: 5px;
    margin-top: 10px;
  }

  .subtext {
    font-size: 15px;
  }
}

@media screen and (max-width: 1000px) {
  .custom-container {
    margin: 0px 7px;
    text-align:center;
  }

 

}
</style>
