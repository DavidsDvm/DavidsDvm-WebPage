<template>
  <div class="home-mainContent" id="homeMainContent">
    <transition name="presentation" appear enter-active-class="animate__animated animate__backInRight"
      leave-active-class="animate__animated animate__headShakeOut">
      <div class="text-white bigCenter-text">
        <div class="text-content">
          <span class="text-content_container">
            <span @mouseover="textActive1 = true" @mouseleave="textActive1 = false"
              :class="[{ 'animate__animated animate__headShake': textActive1 }]">H</span>
            <span @mouseover="textActive2 = true" @mouseleave="textActive2 = false"
              :class="[{ 'animate__animated animate__headShake': textActive2 }]">e</span>
            <span @mouseover="textActive3 = true" @mouseleave="textActive3 = false"
              :class="[{ 'animate__animated animate__headShake': textActive3 }]">l</span>
            <span @mouseover="textActive4 = true" @mouseleave="textActive4 = false"
              :class="[{ 'animate__animated animate__headShake': textActive4 }]">l</span>
            <span @mouseover="textActive5 = true" @mouseleave="textActive5 = false"
              :class="[{ 'animate__animated animate__headShake': textActive5 }]">o</span>
            <span @mouseover="textActive6 = true" @mouseleave="textActive6 = false"
              :class="[{ 'animate__animated animate__headShake': textActive6 }]">!</span>
            <span @mouseover="textActive7 = true" @mouseleave="textActive7 = false"
              :class="[{ 'animate__animated animate__headShake': textActive7 }]">,</span>
          </span>
          <br />
          <span class="text-content_container">
            <span @mouseover="textActive8 = true" @mouseleave="textActive8 = false"
              :class="[{ 'animate__animated animate__headShake': textActive8 }]">I</span>
            <span @mouseover="textActive9 = true" @mouseleave="textActive9 = false"
              :class="[{ 'animate__animated animate__headShake': textActive9 }]">'</span>
            <span @mouseover="textActive10 = true" @mouseleave="textActive10 = false"
              :class="[{ 'animate__animated animate__headShake': textActive10 }]">m</span>
            <span>&nbsp;</span>
          </span>
          <span class="bordered-text text-content_container">
            <span @mouseover="textActive11 = true" @mouseleave="textActive11 = false"
              :class="[{ 'animate__animated animate__headShake': textActive11 }]">D</span>
            <span @mouseover="textActive12 = true" @mouseleave="textActive12 = false"
              :class="[{ 'animate__animated animate__headShake': textActive12 }]">a</span>
            <span @mouseover="textActive13 = true" @mouseleave="textActive13 = false"
              :class="[{ 'animate__animated animate__headShake': textActive13 }]">v</span>
            <span @mouseover="textActive14 = true" @mouseleave="textActive14 = false"
              :class="[{ 'animate__animated animate__headShake': textActive14 }]">i</span>
            <span @mouseover="textActive15 = true" @mouseleave="textActive15 = false"
              :class="[{ 'animate__animated animate__headShake': textActive15 }]">d</span>
          </span>
          <br />
          <span class="text-content_container">
            <span @mouseover="textActive17 = true" @mouseleave="textActive17 = false"
              :class="[{ 'animate__animated animate__headShake': textActive17 }]">W</span>
            <span @mouseover="textActive18 = true" @mouseleave="textActive18 = false"
              :class="[{ 'animate__animated animate__headShake': textActive18 }]">e</span>
            <span @mouseover="textActive19 = true" @mouseleave="textActive19 = false"
              :class="[{ 'animate__animated animate__headShake': textActive19 }]">b</span>
            <span>&nbsp;</span>
            <span @mouseover="textActive20 = true" @mouseleave="textActive20 = false"
              :class="[{ 'animate__animated animate__headShake': textActive20 }]">D</span>
            <span @mouseover="textActive21 = true" @mouseleave="textActive21 = false"
              :class="[{ 'animate__animated animate__headShake': textActive21 }]">e</span>
            <span @mouseover="textActive22 = true" @mouseleave="textActive22 = false"
              :class="[{ 'animate__animated animate__headShake': textActive22 }]">v</span>
            <span @mouseover="textActive23 = true" @mouseleave="textActive23 = false"
              :class="[{ 'animate__animated animate__headShake': textActive23 }]">e</span>
            <span @mouseover="textActive24 = true" @mouseleave="textActive24 = false"
              :class="[{ 'animate__animated animate__headShake': textActive24 }]">l</span>
            <span @mouseover="textActive25 = true" @mouseleave="textActive25 = false"
              :class="[{ 'animate__animated animate__headShake': textActive25 }]">o</span>
            <span @mouseover="textActive26 = true" @mouseleave="textActive26 = false"
              :class="[{ 'animate__animated animate__headShake': textActive26 }]">p</span>
            <span @mouseover="textActive27 = true" @mouseleave="textActive27 = false"
              :class="[{ 'animate__animated animate__headShake': textActive27 }]">e</span>
            <span @mouseover="textActive28 = true" @mouseleave="textActive28 = false"
              :class="[{ 'animate__animated animate__headShake': textActive28 }]">r</span>
          </span>
        </div>
      </div>
    </transition>
    <Scrollwatcher sentinal-name="homePage" @on-intersection-element="scrolledOn()" />
    <transition name="console" appear enter-active-class="animate__animated animate__backInLeft"
      leave-active-class="animate__animated animate__headShakeOut">
      <div class="bigCenter-console">
        <div class="bigCenter-console_main">
          <div class="font-card"></div>
          <div class="console-card" @click="consoleFocus()">
            <div class="console-absoluteElement" ref="consoleAbsoluteElement">
              <div class="console">
                <div class="output" v-html="consoleOutput" ref="consoleData"></div>
                <div class="action" ref="consoleInputFocus">
                  <span>dev@DavidsDvm$: </span>
                  <textarea class="input" name="input" cols="30" rows="1" @keydown.enter="submitConsole($event)"
                    ref="consoleInput"></textarea>
                </div>
              </div>
            </div>
            <!-- dev@DavidsDvm$: -->
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Scrollwatcher from './ScrollWatcher';

export default {
  name: 'HomePage',
  data() {
    return {
      textActive1: false,
      textActive2: false,
      textActive3: false,
      textActive4: false,
      textActive5: false,
      textActive6: false,
      textActive7: false,
      textActive8: false,
      textActive9: false,
      textActive10: false,
      textActive11: false,
      textActive12: false,
      textActive13: false,
      textActive14: false,
      textActive15: false,
      textActive16: false,
      textActive17: false,
      textActive18: false,
      textActive19: false,
      textActive20: false,
      textActive21: false,
      textActive22: false,
      textActive23: false,
      textActive24: false,
      textActive25: false,
      textActive26: false,
      textActive27: false,
      textActive28: false,
      consoleValue: "",
      seperator: '<span class="seperator">== == == == == == == == == == == == == == == == == ==</span><br />',
      avaliableCommands: ['contact', 'help', 'clear', 'pong', 'about', 'time', 'say {}']
    }
  },
  mounted() {
    this.consoleFocus()
  },
  components: {
    Scrollwatcher
  },
  methods: {
    submitConsole(event) {
      event.preventDefault();
      const avaliableCommandsIndex = this.avaliableCommands.indexOf(event.target.value.trim());
      if (event.target.value.trim().startsWith("say")) {
        this.consoleOutputSAY(event.target.value.trim());
        event.target.value = '';
      } else if (avaliableCommandsIndex >= 0) {
        event.target.value = '';
        this.consoleValue = this.avaliableCommands[avaliableCommandsIndex];
      } else {
        event.target.value = '';
        this.consoleOutputFALSE();
      }
    },
    consoleFocus() {
      const divElement = this.$refs.consoleAbsoluteElement
      this.$refs.consoleInput.focus();
      divElement.scrollTop = divElement.scrollHeight;
    },
    consoleOutputSAY(data) {
      var allText = this.$refs.consoleData.innerHTML;

      data = data.substr(data.indexOf(' ') + 1);
      allText = allText + '<span class="green">[Console]:</span><span>' + data + '</span></br>';

      this.consoleValue = ""
      allText = allText + this.seperator;
      this.$refs.consoleData.innerHTML = allText;
    },
    consoleOutputFALSE() {
      var allText = this.$refs.consoleData.innerHTML;

      allText = allText + '<span class="red">That command doesnt exist!!</span></br>';

      this.consoleValue = ""
      allText = allText + this.seperator;
      console.log('sise hizo');
      this.$refs.consoleData.innerHTML = allText;
    },
    scrolledOn() {
      this.$emit('actualActiveNav', 'home');
    }
  },
  computed: {
    consoleOutput: function () {
      switch (this.consoleValue) {
        case "":
          return `<span>Initializing...</span><br/>
                    <span class="green">0.005ms ok!</span><br/>
                    <span class="seperator">== == == == == == == == == == == == == == == == == ==</span><br>
                    <pre contenteditable="false"> _______                     __       __          _______                         
/       \                   /  |     /  |        /       \                        
$$$$$$$  | ______  __     __$$/  ____$$ | _______$$$$$$$  |__     __ _____  ____  
$$ |  $$ |/      \/  \   /  /  |/    $$ |/       $$ |  $$ /  \   /  /     \/    \ 
$$ |  $$ |$$$$$$  $$  \ /$$/$$ /$$$$$$$ /$$$$$$$/$$ |  $$ $$  \ /$$/$$$$$$ $$$$  |
$$ |  $$ |/    $$ |$$  /$$/ $$ $$ |  $$ $$      \$$ |  $$ |$$  /$$/ $$ | $$ | $$ |
$$ |__$$ /$$$$$$$ | $$ $$/  $$ $$ \__$$ |$$$$$$  $$ |__$$ | $$ $$/  $$ | $$ | $$ |
$$    $$/$$    $$ |  $$$/   $$ $$    $$ /     $$/$$    $$/   $$$/   $$ | $$ | $$ |
$$$$$$$/  $$$$$$$/    $/    $$/ $$$$$$$/$$$$$$$/ $$$$$$$/     $/    $$/  $$/  $$/ </pre>
                    <span class="seperator">== == == == == == == == == == == == == == == == == ==</span><br>
                    <span>Hope you have fun discovering all the <span class="red">hidden gems</span>!</span>
                    <br>
                    <span class="blue">type '<span class="grey">help</span>' to see a list of comands available <br/> or '<span class="grey">contact</span>' for a list of ways to contact me.</span><br />
                    <span class="seperator">== == == == == == == == == == == == == == == == == ==</span><br>`
        case 'clear':
          return ``

        case 'help':
          var commandsArray = ['Help: List of available commands',
            '>help',
            '>about',
            '>contact',
            '>pong',
            '>time',
            '>clear',
            '>say'];
          var allText = this.$refs.consoleData.innerHTML;

          for (var i = 0; i < commandsArray.length; i++) {
            var out = '<span>' + commandsArray[i] + '</span><br/>'
            var allText = allText + out;
          }

          this.consoleValue = ""
          allText = allText + this.seperator;

          return (allText);

        case 'contact':
          var contactArray = ['>Contact:', '[GitHub](<span class="blue">https://github.com/DavidsDvm</span>)',
            '[LinkedIn](<span class="blue">https://www.linkedin.com/in/davidsdvm/)</span>',
            '[StackOverflow](<span class="blue">https://stackoverflow.com/users/16787643/davidsdvm)</span>',
            '[Twitter](<span class="blue">https://twitter.com/DavidsDvm)</span>'];
          var allText = this.$refs.consoleData.innerHTML;

          for (var i = 0; i < contactArray.length; i++) {
            var out = '<span>' + contactArray[i] + '</span><br/>'
            var allText = allText + out;
          }

          this.consoleValue = ""
          allText = allText + this.seperator;

          return (allText);

        case 'pong':
          var allText = this.$refs.consoleData.innerHTML;
          var allText = allText + '<span>pong</span></br><span class="pong"><b class="left">|</b><b class="right">|</b></span></br>';
          allText = allText + this.seperator;
          return (allText)

        case 'about':
          var aboutMeArray = ['>About:',
            'Hi There!',
            'I\'m David, better known as \'DavidsDvm\' I am more than a robot coding 🤖, I am a real human trying to learn new things and develop incredible projects with ❤️ meeting incredible people on the wayrocket',
            'Feel free to follow me on GitHub @DavidsDvm - see contacts page.'];
          var allText = this.$refs.consoleData.innerHTML;

          for (var i = 0; i < aboutMeArray.length; i++) {
            var out = '<span>' + aboutMeArray[i] + '</span><br/>'
            var allText = allText + out;
          }

          this.consoleValue = ""
          allText = allText + this.seperator;

          return (allText);

        case 'time':
          var currentdate = new Date();
          var datetime = "Actual time: " + currentdate.getDate() + "/"
            + (currentdate.getMonth() + 1) + "/"
            + currentdate.getFullYear() + " @ "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds() + '<br>';

          var allText = this.$refs.consoleData.innerHTML;
          var allText = allText + datetime;
          this.consoleValue = ""
          allText = allText + this.seperator;

          return (allText)

        default:
          break;
      }
    }
  },
  watch: {
    consoleOutput: function () {
      this.consoleFocus();
    }
  }
}
</script>

<style src='../assets/css/components/homePage.css'></style>
