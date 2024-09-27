<template>
  <div class="home-mainContent" id="homeMainContent">
    <transition name="presentation" appear enter-active-class="animate__animated animate__backInRight"
      leave-active-class="animate__animated animate__headShakeOut">
      <div class="text-white bigCenter-text">
        <div class="text-content">
          <span class="text-content_container">
            <span v-for="(char, index) in welcomeOne" :key="index"
                  @mouseover="setActive(index)" @mouseleave="setInactive(index)"
                  :class="[{ 'animate__animated animate__headShake': activeTexts[index] }]">
              {{ char === ' ' ? '\u00A0' : char }}
            </span>
          </span>
          <br />
          <span class="text-content_container">
            <span v-for="(char, index) in welcomeTwo" :key="index"
                  @mouseover="setActive(index + welcomeOne.length)"
                  @mouseleave="setInactive(index + welcomeOne.length)"
                  :class="[{ 'animate__animated animate__headShake': activeTexts[index + welcomeOne.length] }]">
              {{ char === ' ' ? '\u00A0' : char }}
            </span>
          </span>
          <span class="text-content_container bordered-text">
            <span v-for="(char, index) in welcomeThree" :key="index"
                  @mouseover="setActive(index + welcomeOne.length + welcomeTwo.length)"
                  @mouseleave="setInactive(index + welcomeOne.length + welcomeTwo.length)"
                  :class="[{ 'animate__animated animate__headShake': activeTexts[index + welcomeOne.length + welcomeTwo.length] }]">
              {{ char === ' ' ? '\u00A0' : char }}
            </span>
          </span>
          <br />
          <span class="text-content_container">
            <span v-for="(char, index) in welcomeFour" :key="index"
                  @mouseover="setActive(index + welcomeOne.length + welcomeTwo.length + welcomeThree.length)"
                  @mouseleave="setInactive(index + welcomeOne.length + welcomeTwo.length + welcomeThree.length)"
                  :class="[{ 'animate__animated animate__headShake': activeTexts[index + welcomeOne.length + welcomeTwo.length + welcomeThree.length] }]">
              {{ char === ' ' ? '\u00A0' : char }}
            </span>
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
      consoleValue: "",
      seperator: '<span class="seperator">== == == == == == == == == == == == == == == == == ==</span><br />',
      avaliableCommands: ['contact', 'help', 'clear', 'pong', 'about', 'time', 'say {}'],
      welcomeOne: this.$t('home.welcomeOne'),
      welcomeTwo: this.$t('home.welcomeTwo'),
      welcomeThree: this.$t('home.welcomeThree'),
      welcomeFour: this.$t('home.welcomeFour'),
      activeTexts: []
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
    },
    setActive(index) {
      this.activeTexts[index] = true;
    },
    setInactive(index) {
      this.activeTexts[index] = false;
    }
  },
  computed: {
    consoleOutput: function () {
      switch (this.consoleValue) {
        case "":
          return `<span>${this.$t('home.terminal.initializing')}</span><br/>
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
                    <span>${this.$t('home.terminal.hidden')}</span>
                    <br>
                    <span class="blue">${this.$t('home.terminal.type')} '<span class="grey">help</span>' ${this.$t('home.terminal.avalaibleCommands')} <br/> or '<span class="grey">contact</span>' ${this.$t('home.terminal.contactCommand')}</span><br />
                    <span class="seperator">== == == == == == == == == == == == == == == == == ==</span><br>`
        case 'clear':
          return ``

        case 'help':
          var commandsArray = [this.$t('home.terminal.helpText'),
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
          var aboutMeArray = [`>${this.$t('aboutMe.title')}:`,
            this.$t('home.terminal.about.one'),
            this.$t('home.terminal.about.two'),
            this.$t('home.terminal.about.three')];
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
    },
    '$i18n.locale': function () {
      this.welcomeOne = this.$t('home.welcomeOne');
      this.welcomeTwo = this.$t('home.welcomeTwo');
      this.welcomeThree = this.$t('home.welcomeThree');
      this.welcomeFour = this.$t('home.welcomeFour');
    }
  },
  mounted() {
    console.log(this.$t('home.welcomeTwo'))
  }
}
</script>

<style src='../assets/css/components/homePage.css'></style>
