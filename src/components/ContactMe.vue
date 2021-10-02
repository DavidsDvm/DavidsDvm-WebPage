<template>
  <div class="contactMe--mainContent">
    <div class="sectionsTittle--text">
      >Contact Me
    </div>
    <div class="contactMe">
        <div class="contactMe--main">
          <div class="text-white contactMe--main__bigText d-flex justify-content-center">
              Get in <span class="bordered-text">Touch</span>
          </div>
        </div>
        <div class="contactMe--descriptionText">
          Although I’m not currently looking for any new opportunities, my
          inbox is always open. Whether you have a question or just want to
          say hi, I’ll try my best to get back to you!
        </div>
        <Scrollwatcher sentinal-name="AboutMe" @on-intersection-element="scrolledOn()" />
        <div class="contactMe--Button">
          <button>Contact Me</button>
        </div>
        <div class="contactMe--disclamer">
          <span>Made and designed with &lt;3 by @DavidsDvm</span>
        </div>
    </div>
  </div>
</template>

<script>
import Scrollwatcher from './ScrollWatcher';

export default {
    name: 'ContactMe',
    components: {
      Scrollwatcher
    },
    methods: {
      scrolledOn() {
        this.$emit('actualActiveNav', 'contact');
      }
    }
}
</script>

<style>
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
}
</style>