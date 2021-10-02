<template>
  <LateralBar :navActive="activeIndex" />
  <MainContent @actuallySection="getActualScroll($event)" />
</template>

<script>
import LateralBar from './components/LateralBar'
import MainContent from './components/MainContent'

export default {
  name: 'App',
  components: {
    LateralBar,
    MainContent
  },
  data () {
    return {
      activeIndex : 'home'
    } 
  },
  methods: {
    getActualScroll(element) {
      this.activeIndex = element;
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
