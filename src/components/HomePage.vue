<template>
  <div class="home-mainContent">
    <div class="text-white bigCenter-text">
        Hello!,<br />
        I'm <span class="bordered-text">David</span>,<br />
        Web Developer
    </div>
    <div class="bigCenter-console">
        <div class="font-card"></div>
        <div class="console-card">
            <transition name="view" appear enter-active-class="animate__animated animate__backInLeft" leave-active-class="animate__animated animate__bounceOut">
            <div class="console-absoluteElement" ref="consoleAbsoluteElement">
                <div class="console">
                    <div class="output" v-html="consoleOutput" ref="consoleData"></div>
                    <div class="action">
                        <span>dev@DavidsDvm$:  </span>
                        <textarea class="input" name="input" cols="30" rows="1" @keydown.enter="submitConsole($event)" ref="consoleInputFocus"></textarea>
                    </div>
                </div>
            </div>
            </transition>
            <!-- dev@DavidsDvm$: -->
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'HomePage',
    data(){
        return {
            consoleValue: "",
            consoleChanges: this.$refs.consoleData,
            avaliableCommands: ['help', 'bison', 'camel', 'duck', 'bison']
        }   
    },
    mounted() {
        this.consoleFocus()
    },
    methods: {
        submitConsole(event){
            event.preventDefault();
            const avaliableCommandsIndex = this.avaliableCommands.indexOf(event.target.value.trim());
            if (avaliableCommandsIndex >= 0) {
                event.target.value = '';
			    this.consoleValue = "about"
            }
            // } else if (inputVal == "ping") {
            //     pong();
            //     input.val('');
            // } else if (inputVal == "about") {
            //     aboutMe();
            //     input.val('');
            // } else if (inputVal == "contact") {
            //     contactMe();
            //     input.val('');
            // } else if (inputVal == "clear") {
            //     clearConsole();
            //     input.val('');
            // } else if (inputVal.startsWith("say") === true) {
            //     sayThis(inputVal);
            //     input.val('');
            // } else if (inputVal.startsWith("sudo") === true) {
            //     sudo(inputVal);
            //     input.val('');
            // } else if (inputVal == "time") {
            //     getTime();
            //     input.val('');
            // } else if (inputVal == 'whats that sound' || inputVal == 'what\'s that sound' || inputVal == 'whats that sound?') {
            //     seperator();
            //     Output('<span class="blue">' + inputVal + '</span></br><span class="red">Machine Broken!</span></br>');
            //     seperator();
            //     input.val('');
            // } else if (inputVal.startsWith("exit") === true) {
            //     Output('<span class="blue">Goodbye! Comeback soon.</span>');
            //     setTimeout(function() {
            //         window.open('https://codepen.io/MarioDesigns');
            //     }, 1000);
            // } else {
            //     Output('<span>command not found</span></br>');
            //     input.val('');
            // }
        },
        consoleFocus() {
            const divElement = this.$refs.consoleAbsoluteElement;
            divElement.scrollTop = divElement.scrollHeight;
            this.$refs.consoleInputFocus.focus();
            console.log(divElement.scrollTop);
        }
    },
    computed: {
        consoleOutput : function() {
            if (this.consoleValue == "") {
                return `<span>Initializing...</span><br/>
                    <span class="green">0.0002ms ok!</span><br/>
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
                    <span class="blue">type '<span class="grey">help</span>' to see a list of comands available <br/> or '<span class="grey">contact</span>' for a list of ways to contact me.</span><br>`
            } else if (this.consoleValue == "about"){
                var contactArray = ['>Contact:', '[GitHub](https://github.com/DavidsDvm)', '[LinkedIn](https://www.linkedin.com/in/davidsdvm/)', '[StackOverflow](https://stackoverflow.com/users/16787643/davidsdvm)', '[Twitter](https://twitter.com/DavidsDvm)'];
                var allText = this.$refs.consoleData.innerHTML;
                // seperator();
                for (var i = 0; i < contactArray.length; i++) {
                    var out = '<span>' + contactArray[i] + '</span><br/>'
                    var allText = allText + out;
                }
                this.consoleValue = ""
                this.consoleFocus();
                return (allText);
                // seperator();
            }
        }
    },
    watch: {
        consoleChanges : function () {
            console.log('hola');
        }
    }
}
</script>

<style>
@keyframes ball {
	0% {
		top: 50%;
		left: 0%;
	}
	20% {
		top: 25%; 
		left: 25%;
	}
	30% {
		top: 50%;
		left: 50%;
	}
	40% {
		top: 75%;
		left: 75%;
	}
	50% {
		top: 50%;
		left: 100%;
	}
	60% {
		top: 75%;
		left: 75%;
	}
	70% {
		top: 50%;
		left: 50%;
	}
	80% {
		top: 25%;
		left: 25%;
	}
	100% {
		top: 50%;
		left: 0%;
	}
}

@keyframes raketes {
	0% {
		transform: translateY(0);
	}
	20% {
		transform: translateY(10%);
	}
	25% {
		transform: translateY(-30%);
	}
	50% {
		transform: translateY(0);
	}
	60% {
		transform: translateY(25%);
	}
	80% {
		transform: translateY(-100%);
	}
	100% {
		transform: translateY(0);
	}
}

@keyframes glitch {
	0% {
		color: white;
		transform: translateX(0) translateY(0%);
	}
	25% {
		color: #3498db;
		transform: translateX(1px) translateY(1px);
	}
	40% {
		color: #e74c3c;
		transform: translateX(-2px) translateY(-2px);
	}
	50% {
		color: #cccccc;
		transform: translateX(0) translateY(0);
	}
	80% {
		color: #3498db;
		transform: translateX(2px) translateY(2px);
	}
	90% {
		color: #e74c3c;
		transform: translateX(-1px) translateY(-1px);
	}
	100% {
		color: white;
		transform: translateX(0) translateY(0);
	}
}

@keyframes changeColor {
	0% {
		color: #cccccc;
	}
	25% {
		color: #2ecc71;
	}
	50% {
		color: #e74c3c;
	}
	75% {
		color: #3498db;
	}
	100% {
		color: #cccccc;
	}
}

.home-mainContent{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.bigCenter-text{
    max-width: 50%;
    font-size: 6vh;
    text-shadow:
    -0.1vh -0.1vh 0 #000,  
    0.1vh -0.1vh 0 #000,
    -0.1vh 0.1vh 0 #000,
    0.1vh 0.1vh 0 #000;
}

.bigCenter-text .bordered-text{
    margin: 0;
    color: #000;
    text-shadow:
    -0.1vh -0.1vh 0 #fff,  
    0.1vh -0.1vh 0 #fff,
    -0.1vh 0.1vh 0 #fff,
    0.1vh 0.1vh 0 #fff;
}

.bigCenter-console {
    max-width: 50%;
    position: relative;
    height: 26em;
    width: 36em;
}

.bigCenter-console .font-card {
    background: #8D8E91;
    position: absolute;
    margin: 1em 0 0 1em;
    height: 25em;
    width: 35em;
    z-index: 1;
    border-radius: 2em;
}

.bigCenter-console .console-card {
    background: #0E0E11;
    position: absolute;
    height: 25em;
    width: 35em;
    z-index: 2;
    border-radius: 2em;
    color: white;
    padding: 1em;
}

.console-absoluteElement {
    position: relative;
    overflow: hidden;
    width: 100%;
	height: 100%;
}

.console {
	position: absolute;
	padding: 10px;
    box-sizing: border-box;
    bottom: 0;
    left: 0;
    right: 0;
}
.console .output {
    width: 100%;
    font-size: 12px;
    color: #cccccc;
}
.console .output span {
    line-height: 20px;
}

.console .output span.grey {
    color: #cccccc;
}
.console .output span.green {
    color: #2ecc71;
}
.console .output span.red {
    color: #e74c3c;
}
.console .output span.blue {
    color: #3498db;
}
.console .output pre {
    font-size: 9px;
    animation: glitch 0.2s linear infinite;
    animation-play-state: paused;   
}
.console .output pre:hover {
    animation-play-state: running;
}
.action {
    width: 100%;
    font-size: 14px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
}
		
.action span {
    display: inline-block;
    /* width: 60px; */
    color: white;
}
.action textarea {
    width: calc(100% - 10rem);
    float: left;
    resize: none;
    background: none;
    border: none;
    color: white;
    padding: 0;
    margin: 0 0 0 0.5em;
}
.action textarea:focus {
    outline: none;
}

span.seperator {
	font-size: 12px;
	animation: changeColor 10s ease-in-out infinite;
}

.pong {
	display: inline-block;
	position: relative;
	width: 300px;
	height: 50px;
}

.pong:after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4px;
    height: 4px;
    background-color: white;
    animation: ball 6s linear infinite;
}

b {
    display: inline-block;
    position: absolute;
    top: 50%;
    margin-top: -7px;
    transform: translateY(0);
}
.b .left {
    left: -10px;
    animation: raketes 5s ease-in-out infinite;
}
.b .right {
    right: -10px;
    animation: raketes 5s ease-in-out 0.5s infinite;
}

/* .bigCenter-console .console-card input {
    border: none;
}

.bigCenter-console .console-card input, textarea{
    background: #0E0E11;
    color: white;
    width: 100%;
    height: 100%;
} */
</style>