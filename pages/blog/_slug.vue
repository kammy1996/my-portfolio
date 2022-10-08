<template>
  <div class="custom-container">
    <div class="space-50"></div>
    <div v-if="blog" class="blog">
      <SanityImage  :alt="blog.title" v-if="blog.image" width="100%" :asset-id="getImageURL(blog)"/>
      <h3 class="title mt-4">{{ blog.title }}</h3>
      <div class="d-flex">
        <p class="date">{{ getFormattedDate(blog.date) }}</p>
      </div>
      <div class="tags mt-n1">
        <div class="tags" v-if="blog.tags && blog.tags.length > 0">
            <div class="tag" v-for="(tag, index) in blog.tags" :key="index">
              {{ tag }}
            </div>
        </div>
      </div>
      <div class="social-icons mt-3" v-if="blog && blog.title">
        <a
          href="https://www.linkedin.com/in/kamran-memon-1003a2111/"
          target="_blank"
          ><b-img
            width="25px"
            class="mr-1"
            src="~/static/images/linkedin.png"
          ></b-img
        ></a>
        <a href="https://www.instagram.com/kamranmemon99/" target="_blank"
          ><b-img
            width="25px"
            class="mr-1"
            src="~/static/images/instagram.png"
          ></b-img
        ></a>
        <a href="https://github.com/kammy1996" target="_blank"
          ><b-img
            width="25px"
            class="mr-1"
            src="~/static/images/github.png"
          ></b-img
        ></a>
      </div>

      <div class="space-50"></div>
      <!-- <SanityContent :blocks="blog.text" /> -->
      <div v-for="(block, i) in blog.text" :key="i" >
        <div v-if="block._type == 'image'">
          <SanityImage :alt="blog.title" width="100%" :asset-id="block.asset._ref" />
        </div>
        <div v-else-if="block._type == 'code'">
          <pre>
            <code v-highlight class="javascript">{{ block.code }}</code>
          </pre>
        </div>
        <div v-else >
          <div v-if="block.style === 'h2'" class="space-20"></div>
          <div v-if="block.style === 'h4'" class="space-10"></div>
          <SanityContent :blocks="[block]" />
        </div>
      </div>
       <div class="space-50"></div>
    </div>
  </div>
</template>

<script>
import { groq } from "@nuxtjs/sanity";
import * as gsap from '../../utils/animations/blog'


export default {
  name: "blogTemplate",
  data() {
    return {
      blog: {},
      titleImage:'',
    };
  },
  head() { 
    return { 
      title: this.blog.title || 'Blog | Kamran Memon | Frontend Developer (Vue.js)',
      meta : // Global
          [ {
            hid: "description",
            name: "description",
            content: this.blog && this.blog.subtext || "I am a Fullstack Web Developer and a Tech Enthusiast who is addicted to Learning and loves Javascript, My Tech Stack- Vue.js | Express.js | Node.js | MongoDB",
          },
          { 
            hid:'author',
            name:'author',
            content:'Kamran Memon'
          },
          {
            hid: "keywords",
            name: "keywords",
            content: this.blog && this.blog.tags ? this.blog.tags.toString() : "Code, Vue.js, Nuxt.js, Javascript, Frontend Developer, Web Development",
          },
          //Open Graph
          { hid: "og-type", property: "og:type", content: "website" },
          {
            hid: "og-title",
            property: "og:title",
            content: this.blog.title || 'Blog | Kamran Memon | Frontend Developer (Vue.js)',
          },
          {
            hid: "og-desc",
            property: "og:description",
            content: this.blog && this.blog.subtext || "I am a Fullstack Web Developer and a Tech Enthusiast who is addicted to Learning and loves Javascript, My Tech Stack- Vue.js | Express.js | Node.js | MongoDB",
          },
          //Upload the Image on the netlify server and paste the link here
          {
            hid: "og-image",
            property: "og:image",
            content: this.titleImage || "https://codewithkamran.com/assets/card-image.png",
          },
          { 
            hid: "og-url",
            property: "og:url",
            content: this.blog && this.blog.slug ? `https://codewithkamran.com/blog/${this.blog.slug.current} `  : `https://codewithkamran.com/blog` 
          },
          { hid: "t-type", name: "twitter:card", content: "summary_large_image" },
        ],
    }
  },
 async fetch() { 
    await this.getCurrentBlog();
    await this.getTitleImage();
  },  
  mounted() { 
    this.initAnimations();
  },
  created() { 
    this.getTitleImage();
    this.getCurrentBlog();
  },
  methods: {
    async getTitleImage() { 
      const query = groq`*[_type == 'blogsList']{"image": image.asset->url }[0]`
      try {
        const response = await this.$sanity.fetch(query);
        if(response) { 
          this.titleImage = response.image;
        }
      } catch (error) {
        console.log(
          "🚀 ~ file: _slug.vue ~ line 33 ~ getCurrentBlog ~ error",
          error
        );
      }
    },
    async getCurrentBlog() { 
      const query = groq`*[_type == "blogsList" && slug.current == "${this.$route.params.slug}"][0]`;
      try {
        const response = await this.$sanity.fetch(query);
        if(response) { 
          this.blog = response;
        }
      } catch (error) {
        console.log(
          "🚀 ~ file: _slug.vue ~ line 33 ~ getCurrentBlog ~ error",
          error
        );
      }
    },
    initAnimations() { 
      gsap.initAnime()
    },
    getImageURL(blog) {
      return blog.image.asset._ref;
    },
    getFormattedDate(date) {
      if(date) { 
          return new Date(date).toLocaleDateString("en-us", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      } else return '';
    },
  },
};
</script>

<style lang="scss" scoped>
  .custom-container { 
    margin:0px 350px;
  }

.blog {
  .title {
    font-size: 30px;
    font-weight: 600;
  }

  .date {
    font-size: 14px;
    opacity: 0.9;
    margin-top: -5px;
  }

  .tag {
    background: transparent;
    border:1px solid black;
    margin-right: 5px;
    font-size: 14px;
    padding: 5px 15px;
    border-radius: 5px;
    display:inline-block;
    margin-bottom:10px;
  }
}

@media only screen and (max-width:500px) {
  .custom-container { 
    margin:0px 30px;
  }


  .blog { 
    .title { 
        font-size:20px;
    }
  }
}

@media only screen and (min-width: 500px) and (max-width:1200px) {
  .custom-container { 
    margin:0px 50px;
  }

  .blog { 
    .title { 
        font-size:20px;
    }
  }
}
</style>