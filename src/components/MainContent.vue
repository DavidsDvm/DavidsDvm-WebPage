<template>
  <div class="mainContentContainer">
    <HomePage @actualActiveNav="aboutScroll($event)"/>
    <AboutMe @actualActiveNav="aboutScroll($event)"/>
    <Projects @actualActiveNav="aboutScroll($event)"/>
    <ContactMe @actualActiveNav="aboutScroll($event)" />
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
  }
}
</script>

<style>
.mainContentContainer {
  width: 100%;
  padding-left: 4.6rem;
}
</style>