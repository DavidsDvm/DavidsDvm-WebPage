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
            <!-- <input type="text" placeholder="dev@DavidsDvm$:"> -->
            dev@DavidsDvm$:
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'HomePage'
}
</script>

<style>
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