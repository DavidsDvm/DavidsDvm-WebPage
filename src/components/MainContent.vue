<template>
  <div class="mainContentContainer">
    <HomePage />
    <AboutMe />
    <Projects />
  </div>
</template>

<script>
import HomePage from './HomePage'
import AboutMe from './AboutMe'
import Projects from './Projects'

export default {
  name: 'MainContent',
  components: {
    HomePage,
    AboutMe,
    Projects
  }
}
</script>

<style>
.mainContentContainer {
  width: 100%;
  padding-left: 4.6rem;
}
</style>