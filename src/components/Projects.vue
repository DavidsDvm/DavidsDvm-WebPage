<template>
    <div class="Projects--mainContent">
        <div class="Projects">
            <div class="Projects--main">
                <div class="sectionsTittle--text">
                    >Projects
                </div>
            </div>

            <div class="Projects--main">

            </div>
        </div>
        <div class="Projects d-flex flex-column">
            <div class="Projects--contentLeft">
                <div class="Projects--contentLeft__main">
                    <p class="Projects--contentLeft__main-text">Flowy</p>
                    <div class="Projects--contentLeft__main-description">
                        <span>
                            This is a proyect based on the selling of the national flowers to the <br>
                            global public - this proyect will be develop using JavaScript - <br>
                            Python.
                        </span>
                    </div>
                    <div class="Projects--contentLeft__main-social">
                        <ion-icon name="link-outline"></ion-icon>
                        <ion-icon name="document-outline"></ion-icon>
                        <ion-icon name="logo-octocat"></ion-icon>
                    </div>
                </div>
                <div class="d-flex justify-content-end Projects--contentLeft__image">
                    <img class="Projects--contentLeft__image" src="../assets/img/Project_Flowy.png" alt="Flowy Project Image">
                </div>
            </div>
            <div class="Projects--contentRight">
                <div class="Projects--contentRight__main">
                    <p class="Projects--contentRight__main-text">Mascotas Olarte</p>
                    <div class="Projects--contentRight__main-description">
                        <span>
                            This is a full web page of the medical veterinary center "Mascotas
                            Olarte" this proyect have a full desing using PHP - HTML5 - CSS3
                            - MySql - JavaScript - Boostrap 
                        </span>
                    </div>
                    <div class="Projects--contentRight__main-social">
                        <ion-icon name="link-outline"></ion-icon>
                        <ion-icon name="document-outline"></ion-icon>
                        <ion-icon name="logo-octocat"></ion-icon>
                    </div>
                </div>
                <div class="d-flex justify-content-start Projects--contentRight__image">
                    <img class="Projects--contentRight__image" src="../assets/img/Project_MascotasOlarte.png" alt="Flowy Project Image">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Projects'
}
</script>

<style>

.Projects--mainContent {
    margin: 0 auto 0 auto;
    width: 75%;
    height: 100vh;
}

.Projects {
    width: 100%;
}

.Projects--contentLeft,
.Projects--contentRight {
    height: 40%;
    width: 100%;
    padding-top: 2em;
    display: flex;
}

.Projects--contentRight  {
    justify-content: right;
}

.Projects--contentLeft__image {
    width: 100%;
    margin-right: 5%;
}

.Projects--contentLeft__image img{
    position: relative;
    width: 40em;
    height: 20em;
    filter: grayscale(1);
}

.Projects--contentRight__image {
    width: 100%;
    margin-left: 5%;
}

.Projects--contentRight img{
    position: relative;
    width: 40em;
    height: 20em;
    filter: grayscale(1);
}

.Projects--contentLeft__main,
.Projects--contentRight__main {
    position: absolute;
    z-index: 1;
}

.Projects--contentRight__main {
    display: flex;
    flex-direction: column; 
    justify-content: flex-end;
    margin-left: auto;
}

.Projects--contentLeft__main-text{
    font-size: 2rem;
    color: #0E0E11;
    line-height: 60px;
    text-shadow:
        -0.1vh -0.1vh 0 #8D8E91,  
        0.1vh -0.1vh 0 #8D8E91,
        -0.1vh 0.1vh 0 #8D8E91,
        0.1vh 0.1vh 0 #8D8E91;
}

.Projects--contentRight__main-text {
    font-size: 2rem;
    text-align: right;
    color: #0E0E11;
    line-height: 60px;
    text-shadow:
        -0.1vh -0.1vh 0 #8D8E91,  
        0.1vh -0.1vh 0 #8D8E91,
        -0.1vh 0.1vh 0 #8D8E91,
        0.1vh 0.1vh 0 #8D8E91;
}

.Projects--contentLeft__main-description {
    color: #fff;
    background-color: #232429;
    width: 35em;
    height: 10em;
    display: flex;
    align-items: center;
}

.Projects--contentRight__main-description {
    color: #fff;
    background-color: #232429;
    width: 35em;
    height: 10em;
    display: flex;
    text-align: right;
    align-items: center;
    justify-content: flex-end;
}

.Projects--contentLeft__main-social {
    padding-top: 1em;
    width: 20%;
    display: flex;
    justify-content: space-between;
    color: #fff;
    font-size: 1.5em;
}

.Projects--contentRight__main-social {
    padding-top: 1em;
    margin-left: auto;
    width: 20%;
    text-align: right;
    display: flex;
    justify-content: space-between;
    color: #fff;
    font-size: 1.5em;
}
</style>