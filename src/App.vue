<template>
  <LateralBar />
  <HomePage />
</template>

<script>
import LateralBar from './components/LateralBar'
import HomePage from './components/HomePage'

export default {
  name: 'App',
  components: {
    LateralBar,
    HomePage
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
}
</style>
