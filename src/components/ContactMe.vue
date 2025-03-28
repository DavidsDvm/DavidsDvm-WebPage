<template>
  <div class="contactMe--mainContent" id="contactMeMainContent">
    <div class="sectionsTittle--text__contactMe">
      >{{ $t('contactMe.title') }}
    </div>
    <Scrollwatcher sentinal-name="AboutMe" @on-intersection-element="scrolledOn()" />
    <transition name="contact" enter-active-class="animate__animated animate__zoomInDown" leave-active-class="animate__animated animate__bounceOut">
    <div v-if="isContactMeActive" class="contactMe">
        <div class="contactMe--main">
          <div class="text-white contactMe--main__bigText d-flex justify-content-center">
            {{ $t('contactMe.bigtextOne') }} <span class="bordered-text">{{ $t('contactMe.bigtextTwo') }}</span>
          </div>
        </div>
        <div class="contactMe--descriptionText">
          {{ $t('contactMe.description') }}
        </div>
        <div class="contactMe--Button">
          <button @click="sendMail()">{{ $t('contactMe.buttonText') }}</button>
        </div>
        <div class="contactMe--disclamer">
          <span>{{ $t('contactMe.disclaimer') }}</span>
        </div>
    </div>
    </transition>
  </div>
</template>

<script>
import Scrollwatcher from './ScrollWatcher';

export default {
    name: 'ContactMe',
    data(){
      return{
        isContactMeActive: false
      }
    },
    components: {
      Scrollwatcher
    },
    methods: {
      scrolledOn() {
        this.isContactMeActive = true;
        this.$emit('actualActiveNav', 'contact');
      },
      sendMail() {
        window.location.href = "mailto:davids.dvm@gmail.com?subject=Hello DavidsDvm i want to contact you";
      }
    }
}
</script>

<style>
.sectionsTittle--text__contactMe {
	max-height: 10vh;
	font-size: 3rem;
	color: #0E0E11;
	text-shadow: -0.1vh -0.1vh 0 #8D8E91, 0.1vh -0.1vh 0 #8D8E91, -0.1vh 0.1vh 0 #8D8E91, 0.1vh 0.1vh 0 #8D8E91;
	flex-grow: 2;
}

.contactMe--mainContent {
  margin: 0 auto 0 auto;
  padding-top: 1em;
  width: 75%;
  height: 100vh;
}

.contactMe {
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.contactMe--main {
  width: 100%;
}

.contactMe--main__bigText {
  width: 100%;
  font-size: 6vw;
  text-shadow:
  -0.1vh -0.1vh 0 #000,
  0.1vh -0.1vh 0 #000,
  -0.1vh 0.1vh 0 #000,
  0.1vh 0.1vh 0 #000;
}

.contactMe--main__bigText .bordered-text{
  margin: 0;
  color: #000;
  text-shadow:
  -0.1vh -0.1vh 0 #fff,
  0.1vh -0.1vh 0 #fff,
  -0.1vh 0.1vh 0 #fff,
  0.1vh 0.1vh 0 #fff;
}

.contactMe--descriptionText {
  width: 90%;
  text-align: center;
  margin: 0 auto;
  font-size: 1.3rem;
  color: #fff;
}

.contactMe--Button {
  width: 100%;
  display: flex;
  justify-content: center;
}

.contactMe--Button button{
  width: 28%;
  height: 2.5rem;
  background-color: #000;
  color: #fff;
  border: 0;
  border-radius: 1em;
}

.contactMe--disclamer {
  color: #54555A;
  display: flex;
  justify-content: center;
  text-align: center;
}

@media (max-width: 680px) {
  .contactMe--Button button {
    width: 40vw;
  }
}

@media (max-width: 950px) {
  .sectionsTittle--text__contactMe {
    font-size: 2.5rem;
  }

  .contactMe--Button button {
    width: 35vw;
  }
}
</style>
