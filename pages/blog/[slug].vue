<template>
  <div class="custom-container">
    <div class="space-50"></div>
    <div v-if="blog" class="blog">
      <SanityImage :alt="blog.title" v-if="blog.image" width="100%" :asset-id="getImageURL(blog)" />
      <h3 class="title mt-4">{{ blog.title }}</h3>
      <div class="flex">
        <p class="date">{{ getFormattedDate(blog.date) }}</p>
      </div>
      <div class="tags -mt-1">
        <div class="tags" v-if="blog.tags && blog.tags.length > 0">
          <div class="tag" v-for="(tag, index) in blog.tags" :key="index">
            {{ tag }}
          </div>
        </div>
      </div>
      <div class="social-icons mt-3" v-if="blog && blog.title">
        <a href="https://twitter.com/kamranmemon25" target="_blank">
          <img alt="twitter" style="width: 30px" class="mr-1" src="/images/twitter.png" />
        </a>
        <a href="https://www.linkedin.com/in/kamran-memon-1003a2111/" target="_blank">
          <img alt="linkedin" style="width: 25px" class="mr-1" src="/images/linkedin.png" />
        </a>
        <a href="https://www.instagram.com/kamranmemon99/" target="_blank">
          <img alt="instagram" style="width: 25px" class="mr-1" src="/images/instagram.png" />
        </a>
        <a href="https://github.com/kammy1996" target="_blank">
          <img alt="github" style="width: 25px" class="mr-1" src="/images/github.png" />
        </a>
      </div>

      <div class="space-50"></div>
      <div v-for="(block, i) in blog.text" :key="i">
        <div v-if="block._type == 'image'">
          <SanityImage :alt="blog.title" width="100%" :asset-id="block.asset._ref" />
        </div>
        <div v-else-if="block._type == 'code'">
          <pre>
            <code v-highlight class="javascript">{{ block.code }}</code>
          </pre>
        </div>
        <div v-else>
          <div v-if="block.style === 'h2'" class="space-20"></div>
          <div v-if="block.style === 'h4'" class="space-10"></div>
          <SanityContent :blocks="[block]" />
        </div>
      </div>
      <div class="space-50"></div>
    </div>
  </div>
</template>

<script setup>

const route = useRoute()

const slug = route.params.slug

const { data: blog } = await useSanityQuery(
  `*[_type == "blogsList" && slug.current == $slug][0]`,
  { slug }
)

const { data: titleImageData } = await useSanityQuery(
  `*[_type == 'blogsList' && slug.current == $slug]{"image": image.asset->url }[0]`,
  { slug }
)

const titleImage = computed(() => titleImageData.value?.image || '')

useSeoMeta({
  title: () => blog.value?.title || 'Blog | Kamran Memon | Portfolio',
  description: () => blog.value?.subtext || 'I am a Fullstack Web Developer and a Tech Enthusiast who is addicted to Learning and loves Javascript, My Tech Stack- Vue.js | Express.js | Node.js | MongoDB',
  author: 'Kamran Memon',
  keywords: () => blog.value?.tags ? blog.value.tags.toString() : 'Code, Vue.js, Nuxt.js, Javascript, Frontend Developer, Web Development',
  ogType: 'website',
  ogTitle: () => blog.value?.title || 'Blog | Kamran Memon | Frontend Developer (Vue.js)',
  ogDescription: () => blog.value?.subtext || 'I am a Fullstack Web Developer and a Tech Enthusiast who is addicted to Learning and loves Javascript, My Tech Stack- Vue.js | Express.js | Node.js | MongoDB',
  ogImage: () => titleImage.value || 'https://codewithkamran.com/assets/card-image.png',
  ogUrl: () => blog.value?.slug ? `https://codewithkamran.com/blog/${blog.value.slug.current}` : 'https://codewithkamran.com/blog',
  twitterCard: 'summary_large_image',
})

const getImageURL = (blog) => blog.image.asset._ref

const getFormattedDate = (date) => {
  if (date) {
    return new Date(date).toLocaleDateString('en-us', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }
  return ''
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: underline !important;
}

.custom-container {
  margin: 0px 350px;
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
    border: 1px solid black;
    margin-right: 5px;
    font-size: 14px;
    padding: 5px 15px;
    border-radius: 5px;
    display: inline-block;
    margin-bottom: 10px;
  }
}

@media only screen and (max-width: 500px) {
  .custom-container {
    margin: 0px 30px;
  }

  .blog {
    .title {
      font-size: 20px;
    }
  }
}

@media only screen and (min-width: 500px) and (max-width: 1200px) {
  .custom-container {
    margin: 0px 50px;
  }

  .blog {
    .title {
      font-size: 20px;
    }
  }
}
</style>
