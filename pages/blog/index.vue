<template>
  <div>
    <div class="space-40"></div>
    <h3 class="main-title text-center">
      My <span class="title-highlight">Blog</span>
    </h3>
    <p class="text-center" style="margin-top: -4px">I like to Journalize the journey.</p>
    <div class="space-30"></div>
    <div class="container mx-auto px-4 blog">
      <div v-for="(blog, index) in blogsList" :key="index">
        <div class="flex flex-wrap mb-10">
          <div class="w-full md:w-5/12">
            <NuxtLink :to="`/blog/${blog.slug.current}`">
              <SanityImage
                class="title-image"
                :alt="blog.title"
                width="90%"
                :asset-id="getImageURL(blog)"
              />
            </NuxtLink>
          </div>
          <div class="w-full md:w-7/12">
            <div class="custom-container">
              <div class="hidden md:block space-30"></div>
              <NuxtLink :to="`/blog/${blog.slug.current}`">
                <h3 class="title">{{ blog.title }}</h3>
              </NuxtLink>
              <p class="date">{{ getFormattedDate(blog.date) }}</p>
              <div class="tags" v-if="blog.tags && blog.tags.length > 0">
                <div class="tag" v-for="(tag, index) in blog.tags" :key="index">
                  {{ tag }}
                </div>
              </div>
              <p class="subtext mt-3">{{ blog.subtext }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Blog } from '~/model/site-meta.js'

useHead({
  title: 'Blog | Kamran Memon | Portfolio',
  meta: Blog,
})

const query = `*[_type == "blogsList"]`
const { data: blogsRaw } = await useSanityQuery(query)

const blogsList = computed(() =>
  blogsRaw.value
    ? [...blogsRaw.value].sort((a, b) => new Date(b.date) - new Date(a.date))
    : []
)

const getImageURL = (blog) => blog.image.asset._ref

const getFormattedDate = (date) =>
  new Date(date).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
</script>

<style lang="scss" scoped>
$primary-color: #F5989D;

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
    display: inline-block;
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
    text-align: center;
  }
}
</style>
