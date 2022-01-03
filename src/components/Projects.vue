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
                            E-commerce project, this projects is based on the
                            little offert of online sites to buy flowers on
                            LATAM countries, project made using Flask, MariaDB
                            JavaScript
                        </span>
                    </div>
                    <div class="Projects--contentLeft__main-social">
                        <ion-icon @click="projectClick('linkFlowy')" name="link-outline"></ion-icon>
                        <ion-icon @click="projectClick('documentFlowy')" name="document-outline"></ion-icon>
                        <ion-icon @click="projectClick('githubFlowy')" name="logo-octocat"></ion-icon>
                    </div>
                </div>
                <div class="d-flex justify-content-end Projects--contentLeft__image Projects--Floowy__image">
                    <img class="Projects--contentLeft__image" src="../assets/img/Project_Flowy.webp" alt="Flowy Project Image">
                </div>
            </div>
            </transition>
            <Scrollwatcher sentinal-name="AboutMe" @on-intersection-element="scrolledOn()" />
            <transition name="projectsRight" enter-active-class="animate__animated animate__lightSpeedInLeft" leave-active-class="animate__animated animate__bounceOut">
            <div v-if="projectsRight" class="Projects--contentRight">
                <div class="Projects--contentRight__main">
                    <p class="Projects--contentRight__main-text">MediFlow</p>
                    <div class="Projects--contentRight__main-description">
                        <span>
                             The objective of the project is to manage shifts
                             and assign them within an interactive calendar.
                             Project developed for Senasoft edition 2021,
                             with Flask, SqlAlchemy, JavaScript.
                        </span>
                    </div>
                    <div class="Projects--contentRight__main-social">
                        <ion-icon @click="projectClick('githubMediflow')" name="logo-octocat"></ion-icon>
                        <ion-icon @click="projectClick('documentMediflow')" name="document-outline"></ion-icon>
                        <ion-icon @click="projectClick('linkMediflow')" name="link-outline"></ion-icon>
                    </div>
                </div>
                <div class="d-flex justify-content-start Projects--contentRight__image Projects--Mediflow__image">
                    <img class="Projects--contentRight__image" src="../assets/img/Project_Mediflow.webp" alt="Mascotas Olarte Project Image">
                </div>
            </div>
            </transition>
            <transition name="projectsLeft" enter-active-class="animate__animated animate__lightSpeedInRight" leave-active-class="animate__animated animate__bounceOut">
            <div v-if="projectsLeft" class="Projects--contentLeft">
                <div class="Projects--contentLeft__main">
                    <p class="Projects--contentLeft__main-text">Mascotas Olarte</p>
                    <div class="Projects--contentLeft__main-description">
                        <span>
                            Web Information System for the veterinarian center
                            "Mascotas Olarte" using HTML5, CSS3, Bootstrap, PHP,
                            MySQL; You can check the full project on the below GitHub repository
                        </span>
                    </div>
                    <div class="Projects--contentLeft__main-social">
                        <ion-icon @click="projectClick('linkMascotas')" name="link-outline"></ion-icon>
                        <ion-icon @click="projectClick('documentMascotas')" name="document-outline"></ion-icon>
                        <ion-icon @click="projectClick('githubMascotas')" name="logo-octocat"></ion-icon>
                    </div>
                </div>
                <div class="d-flex justify-content-end Projects--contentLeft__image Projects--Mascotas__image">
                    <img class="Projects--contentLeft__image" src="../assets/img/Project_MascotasOlarte.webp" alt="Flowy Project Image">
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
            projectsLeft : false,
            projectsLinks : {
                linkFlowy : "https://floowy.herokuapp.com/",
                documentFlowy : "https://github.com/DavidsDvm/Flowy/blob/main/docs/Documentacion_Sistema%20de%20Gesti%C3%B3n%20de%20Ventas%20en%20la%20Industria%20Floricultora_FLOWY.docx",
                githubFlowy : "https://github.com/DavidsDvm/Flowy",
                linkMediflow: "https://mediflow.herokuapp.com/",
                documentMediflow: "https://github.com/LuisC111/Senasoft-2021/tree/main/docs",
                githubMediflow: "https://github.com/LuisC111/Senasoft-2021",
                linkMascotas : "https://davidsdvm.github.io/MascotasOlarte/",
                documentMascotas : "https://github.com/DavidsDvm/MascotasOlarte/blob/main/docs/Mascotas_Olarte_Planeacion_Proyecto.docx",
                githubMascotas: "https://github.com/DavidsDvm/MascotasOlarte"
            }
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
      },
      projectClick(element) {
        const avaliableProjectLink = this.projectsLinks[element];
        window.open(avaliableProjectLink, '_blank').focus();
      }
    }
}
</script>

<style src='../assets/css/components/Projects.css'></style>