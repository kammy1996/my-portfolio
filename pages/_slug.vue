<template>
  <div class="custom-container">
    <div class="space-50"></div>
    <div v-if="blog" class="blog">
      <SanityImage v-if="blog.image" :asset-id="getImageURL(blog)"/>
      <h3 class="title">{{ blog.title }}</h3>
      <div class="d-flex">
        <p class="date">{{ getFormattedDate(blog.date) }}</p>
      </div>
      <div class="tags mt-n1">
        <span class="tag" v-for="(tag, index) in blog.tags" :key="index">
          {{ tag }}
        </span>
      </div>
      <div class="social-icons mt-3">
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
      <div v-for="(block, i) in blog.text" :key="i">
        <div v-if="block._type == 'image'">
          <SanityImage :asset-id="block.asset._ref" />
        </div>
        <div v-else-if="block._type == 'code'">
          <pre>
            <code v-highlight class="javascript">{{ block.code }}</code>
          </pre>
        </div>
        <div v-else>
          <SanityContent :blocks="[block]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { groq } from "@nuxtjs/sanity";
export default {
  name: "blogTemplate",
  data() {
    return {
      blog: {},
    };
  },
  methods: {
    async getCurrentBlog() {
      const query = groq`*[_type == "blogsList" && slug.current == "${this.$route.params.slug}"][0]`;
      try {
        const response = await this.$sanity.fetch(query);
        this.blog = response;
      } catch (error) {
        console.log(
          "🚀 ~ file: _slug.vue ~ line 33 ~ getCurrentBlog ~ error",
          error
        );
      }
    },
    getImageURL(blog) {
      console.log("🚀 ~ file: _slug.vue ~ line 87 ~ getImageURL ~ blog", blog)
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
  mounted() {
    this.getCurrentBlog();
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
    background: rgba(0, 0, 0, 0.05);
    margin-right: 5px;
    font-size: 14px;
    padding: 5px 15px;
    border-radius: 20px;
  }
}
</style>