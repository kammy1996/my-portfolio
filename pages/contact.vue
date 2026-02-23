<template>
  <div>
    <div class="space-30"></div>
    <img
      class="image-bg-right hidden md:block"
      style="width: 600px; position: absolute; z-index: -1; right: 0"
      alt="background-image"
      src="/images/image-bg-right.png"
    />
    <div class="container mx-auto px-4">
      <p class="page-title">Contact</p>
      <h1 class="contact-title">Let's make it <br />happen</h1>
      <div class="space-10"></div>
      <div class="space-50"></div>

      <div class="contact-form" v-if="!isFormSubmitted">
        <form @submit.prevent="submitForm">
          <div class="form-field">
            <label class="field-label">What's your name?</label>
            <input
              v-model="contact.name"
              type="text"
              class="field-input"
              placeholder="Your name"
            />
            <p class="field-error" v-if="errors.name">{{ errors.name }}</p>
          </div>
          <div class="space-10"></div>
          <div class="form-field">
            <label class="field-label">Your Email</label>
            <input
              v-model="contact.email"
              type="email"
              class="field-input"
              placeholder="your@email.com"
            />
            <p class="field-error" v-if="errors.email">{{ errors.email }}</p>
          </div>
          <div class="space-10"></div>
          <div class="form-field">
            <label class="field-label">Tell us about your Project?</label>
            <textarea
              v-model="contact.details"
              rows="3"
              class="field-input"
              placeholder="Describe your project..."
            ></textarea>
            <p class="field-error" v-if="errors.details">{{ errors.details }}</p>
          </div>
          <div class="space-50"></div>
          <button class="send-btn" type="submit">Send Email</button>
        </form>
      </div>

      <div v-else>
        <p class="contact-submitted-text">
          <span class="contact-sub-text">Thank you for showing Interest</span>.
          I will get back to you shortly!
          <Icon name="fa-solid:smile" class="project-link-icon" size="sm" />
        </p>
      </div>
    </div>
    <div class="space-50"></div>
    <img class="contact-img" alt="Contact Kamran" src="/images/contact-img.jpg" />
  </div>
</template>

<script setup>
import * as gsapAnims from '~/utils/animations/contact.js'
import { Contact } from '~/model/site-meta.js'

useHead({
  title: 'Contact | Kamran Memon | Portfolio',
  meta: Contact,
})

const contact = ref({ name: '', email: '', details: '' })
const isFormSubmitted = ref(false)
const errors = ref({})

const validateForm = () => {
  errors.value = {}
  if (!contact.value.name) errors.value.name = 'Name is required'
  if (!contact.value.email) {
    errors.value.email = 'Email is required'
  } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(contact.value.email)) {
    errors.value.email = 'E-mail must be valid'
  }
  if (!contact.value.details) errors.value.details = 'Project details are required'
  return Object.keys(errors.value).length === 0
}

const submitForm = async () => {
  if (!validateForm()) return
  const endpoint = 'https://formspree.io/f/xnqworrp'
  try {
    const response = await $fetch(endpoint, {
      method: 'POST',
      body: {
        email: contact.value.email,
        name: contact.value.name,
        message: contact.value.details,
      },
    })
    if (response) {
      isFormSubmitted.value = true
    }
  } catch (error) {
    console.error('Form submission error:', error)
  }
}

onMounted(() => {
  gsapAnims.initAnime()
})
</script>

<style lang="scss" scoped>
$primary-color: #F5989D;

.contact-title {
  font-size: 60px;
  font-weight: 700;
}

.page-title {
  text-transform: uppercase;
  opacity: 0.9;
}

.contact-form {
  max-width: 600px;
}

.form-field {
  display: flex;
  flex-direction: column;
}

.field-label {
  font-size: 14px;
  opacity: 0.7;
  margin-bottom: 6px;
}

.field-input {
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  outline: none;
  padding: 8px 0;
  font-size: 16px;
  font-family: 'Poppins';
  background: transparent;
  width: 100%;
  resize: none;

  &:focus {
    border-bottom-color: black;
  }
}

.field-error {
  color: #e53935;
  font-size: 12px;
  margin-top: 4px;
}

.send-btn {
  background: transparent;
  border: none;
  border-bottom: 1px solid black;
  font-size: 18px;
  font-family: 'Poppins';
  cursor: pointer;
  padding: 5px 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: $primary-color;
    transition: width 0.3s ease;
  }

  &:hover::before {
    width: 100%;
  }
}

.contact-img {
  width: 100%;
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
