import hljs from 'highlight.js'
import 'highlight.js/styles/obsidian.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('highlight', {
    mounted(el) {
      el.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightElement(block)
      })
      if (el.tagName === 'CODE') {
        hljs.highlightElement(el)
      }
    },
    updated(el) {
      el.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightElement(block)
      })
    },
  })
})
