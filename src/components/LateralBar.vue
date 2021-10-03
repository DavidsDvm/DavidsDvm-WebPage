<template>
  <transition name="view" appear enter-active-class="animate__animated animate__backInDown" leave-active-class="animate__animated animate__bounceOut">
  <div class="lateralBar d-flex flex-column flex-shrink-0 bg-dark__project">  
    <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
      <a @mouseover="isActive4 = true" @mouseleave="isActive4 = false" :class="[{ 'animate__animated animate__flip' : isActive4 }]" href="/" class="nav-link py-3 mb-3 mt-2">
        <img src="../assets/img/personalLogo.png" alt="mdo" class="rounded-circle barIcons--tittle">
      </a>
      <li @mouseover="isActive5 = true" @mouseleave="isActive5 = false" :class="[{ 'animate__animated animate__jello' : isActive5 }]" class="nav-item nav-item__above">
        <div @click="scrollSection('home')" :class="navActive == 'home' ? 'icon-active' : ''" class="nav-link py-3">
          <ion-icon name="home-outline" class="barIcons"></ion-icon>
        </div>
      </li>
      <li @mouseover="isActive6 = true" @mouseleave="isActive6 = false" :class="[{ 'animate__animated animate__jello' : isActive6 }]" class="nav-item nav-item__above">
        <div @click="scrollSection('about')" :class="navActive == 'about' ? 'icon-active' : ''" class="nav-link py-3">
          <ion-icon name="accessibility-outline" class="barIcons"></ion-icon>
        </div>
      </li>
     <li @mouseover="isActive7 = true" @mouseleave="isActive7 = false" :class="[{ 'animate__animated animate__jello' : isActive7 }]" class="nav-item nav-item__above">
        <div @click="scrollSection('projects')" :class="navActive == 'projects' ? 'icon-active' : ''" class="nav-link py-3">
          <ion-icon name="briefcase-outline" class="barIcons"></ion-icon>
        </div>
      </li>
      <li @mouseover="isActive8 = true" @mouseleave="isActive8 = false" :class="[{ 'animate__animated animate__jello' : isActive8 }]" class="nav-item nav-item__above">
        <div @click="scrollSection('contact')" :class="navActive == 'contact' ? 'icon-active' : ''" class="nav-link py-3">
          <ion-icon name="mail-outline" class="barIcons"></ion-icon>
        </div>
      </li>
    </ul>

    <ul class="nav nav-pills nav-flush flex-column text-center mb-4">
      <li class="nav-item nav-item__below">
        <div class="nav-link py-3">
          <ion-icon @click="socialMedia('github')" @mouseover="isActive1 = true" @mouseleave="isActive1 = false" :class="[{ 'animate__animated animate__heartBeat' : isActive1 }, errorClass]" name="logo-github"></ion-icon>
        </div>
      </li>
      <li class="nav-item nav-item__below">
        <div class="nav-link py-3">
          <ion-icon @click="socialMedia('linkedin')" @mouseover="isActive2 = true" @mouseleave="isActive2 = false" :class="[{ 'animate__animated animate__heartBeat' : isActive2 }, errorClass]" name="logo-linkedin"></ion-icon>
        </div>
      </li>
      <li class="nav-item nav-item__below">
        <div class="nav-link py-3">
          <ion-icon @click="socialMedia('stackoverflow')" @mouseover="isActive3 = true" @mouseleave="isActive3 = false" :class="[{ 'animate__animated animate__heartBeat' : isActive3 }, errorClass]" name="logo-stackoverflow"></ion-icon>
        </div>
      </li>
    </ul>
  </div>
  </transition>
</template>

<script>
export default {
    name: 'LateralBar',
    data () {
      return {
        isActive1 : false,
        isActive2 : false,
        isActive3 : false,
        isActive4 : false,
        isActive5 : false,
        isActive6 : false,
        isActive7 : false,
        isActive8 : false,
        errorClass : 'barIcons md hydrated',
        sectionsNames : {
          home : "homeMainContent",
          about : "aboutMeMainContent",
          projects : "ProjectsMainContent",
          contact : "contactMeMainContent"
        }
      }
    },
    props: {
      navActive: {
        type : String,
        default : 'home'
      }
    },
    methods: {
      socialMedia(element) {
        this.$emit('socialMediaClick', element);
      },
      scrollSection(element) {
        const sectionNameID = '#' + this.sectionsNames[element];
        this.$emit('scrollSection', sectionNameID);
      }
    }
}
</script>

<style>
.lateralBar {
  width: 4.6rem;
  height: 100vh;
  max-width: 4.6rem;
  min-height: 100vh;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  -moz-box-shadow:    inset -1.5px 0px 0px rgba(255, 255, 255, 0.15);
  -webkit-box-shadow: inset -1.5px 0px 0px rgba(255, 255, 255, 0.15);
  box-shadow:         inset -1.5px 0px 0px rgba(255, 255, 255, 0.15);
}

.barIcons--tittle {
  width: 5vh;
  height: 5vh;
}

.barIcons {
  width: 3vh;
  height: 3vh;
  color: #8D8E91;
}

.nav-item__above {
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-item__below {
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-active {
  padding: 0 !important;
  width: 6vh;
  height: 6vh;
  background: #38393E !important;
  border-radius: 1.2vh !important;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bg-dark__project{
  background-color: #1B1C22;
}

li:hover {
  cursor: pointer;
}

@media (max-width: 680px) {
  .lateralBar {
    width: 0rem;
    height: 0vh;
  }

}
</style>