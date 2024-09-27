<template>
  <div class="mainContentContainer">
    <HomePage @actualActiveNav="aboutScroll($event)" class="mb-5"/>
    <AboutMe @actualActiveNav="aboutScroll($event)" class="mt-5 mb-5"/>
    <Projects @actualActiveNav="aboutScroll($event)" class="mt-5 mb-5"/>
    <ContactMe @actualActiveNav="aboutScroll($event)" class="mt-5" />
  </div>
</template>

<script>
import HomePage from './HomePage'
import AboutMe from './AboutMe'
import Projects from './Projects'
import ContactMe from './ContactMe'

export default {
  name: 'MainContent',
  components: {
    HomePage,
    AboutMe,
    Projects,
    ContactMe
  },
  methods: {
    aboutScroll(element) {
      this.$emit('actuallySection', element);
    }  
  },
  mounted() {
    document.title = 'DavidsDvm | Web Developer | @DavidsDvm'
  }
}
</script>

<style>
.mainContentContainer {
  width: 100%;
  padding-left: 4.6rem;
}

@media (max-width: 680px) {
  .mainContentContainer {
    padding-left: 0rem;
  }
}
</style>