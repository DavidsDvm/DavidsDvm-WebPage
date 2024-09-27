<template>
  <LateralBar @scrollSection="ScrollToSection($event)" @socialMediaClick="socialMediaClick($event)" :navActive="activeIndex" />
  <MainContent @actuallySection="getActualScroll($event)" />
</template>

<script>
import LateralBar from './components/LateralBar'
import MainContent from './components/MainContent'

export default {
  name: 'App',
  components: {
    LateralBar,
    MainContent,
  },
  data () {
    return {
      activeIndex : 'home',
      socialMedia  : {
        github : "https://github.com/DavidsDvm",
        linkedin : "https://linkedin.com/in/davidsdvm/",
        stackoverflow: "https://stackoverflow.com/users/16787643/davidsdvm"
      }
    }
  },
  methods: {
    getActualScroll(element) {
      this.activeIndex = element;
    },
    socialMediaClick(element){
      const avaliableSocialLink = this.socialMedia[element];
      window.open(avaliableSocialLink, '_blank').focus();
    },
    ScrollToSection(element){
      const containerScroll = this.$el.parentElement.querySelector(element);
      containerScroll.scrollIntoView({behavior: 'smooth'});
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');

#app {
  font-family: 'Righteous', cursive;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: #1B1C22;
  display: flex;
  flex-direction: row;
  align-items: stretch;
}

.mainContent {
  width: calc(100wh - 10rem);
  font-size: 100px;
  float: right;
}
</style>
