<template>
    <div class="Projects--mainContent" id="ProjectsMainContent">
        <div class="Projects-tittle">
            <div class="Projects--main">
                <div class="sectionsTittle--text">
                    >Projects
                </div>
            </div>
        </div>
        <div class="Projects d-flex flex-column">
            <transition name="projectsLeft" enter-active-class="animate__animated animate__lightSpeedInRight" leave-active-class="animate__animated animate__bounceOut">
            <div v-if="projectsLeft" class="Projects--contentLeft">
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
            </transition>
            <Scrollwatcher sentinal-name="AboutMe" @on-intersection-element="scrolledOn()" />
            <transition name="projectsRight" enter-active-class="animate__animated animate__lightSpeedInLeft" leave-active-class="animate__animated animate__bounceOut">
            <div v-if="projectsRight" class="Projects--contentRight">
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
                        <ion-icon name="logo-octocat"></ion-icon>
                        <ion-icon name="document-outline"></ion-icon>
                        <ion-icon name="link-outline"></ion-icon>
                    </div>
                </div>
                <div class="d-flex justify-content-start Projects--contentRight__image">
                    <img class="Projects--contentRight__image" src="../assets/img/Project_MascotasOlarte.png" alt="Mascotas Olarte Project Image">
                </div>
            </div>
            </transition>
        </div>
    </div>
</template>

<script>
import Scrollwatcher from './ScrollWatcher';

export default {
    name: 'Projects',
    data() {
        return {
            projectsRight : false,
            projectsLeft: false
        }
    },
    components: {
      Scrollwatcher
    },
    methods: {
      scrolledOn() {
        this.projectsRight = true;
        this.projectsLeft = true;
        this.$emit('actualActiveNav', 'projects');
      }
    }
}
</script>

<style src='../assets/css/components/Projects.css'></style>