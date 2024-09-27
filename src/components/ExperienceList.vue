<template>
  <div class="contactMe--mainContent" id="contactMeMainContent">
    <div class="sectionsTittle--text__contactMe">
      >Experiencia
    </div>
    <Scrollwatcher sentinal-name="Experience" @on-intersection-element="scrolledOn()" />
    <div class="sectionsContent--experience" id="contactMeMainContent">
      <ul class="relative mt-16">
        <li class="no-bullets" v-for="experience in EXPERIENCE" :key="experience.title">
          <ExperienceItem v-bind="experience" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ExperienceItem from './ExperienceItem';
import Scrollwatcher from './ScrollWatcher';

export default {
  name: 'ExperienceList',
  components: {
    ExperienceItem,
    Scrollwatcher
  },
  data() {
    return {
      EXPERIENCE: [
        {
          date: 'Jan 2024 - Actually',
          title: 'Full Stack Engineer',
          company: 'Wayru',
          description:
            'As a Software Engineer at Wayru, I focus on several key areas: I specialize in React Native for mobile app development, creating solutions for both Android and iOS. On the backend, I work with Node.js and NestJS, utilizing the Strapi framework to build efficient systems. I also contribute to developing software for global network equipment management and WiFi network administration, focusing on optimizing network performance. Additionally, I work with blockchain technology, particularly Algorand and Ethereum Virtual Machines (EVMs), managing multi-chain integrations and ensuring seamless interoperability across platforms.',
          link: 'https://www.wayru.io/',
        },
        {
          date: 'Oct 23 - Jan 24',
          title: 'Backend Developer',
          company: 'Resuelve tu deuda',
          description:
            'As a Back-End Developer at Go Bravo, my role involved enhancing application infrastructure and internal software architecture. I developed back-end services using Java Spring Boot and automated processes with Python scripting. Additionally, I contributed to front-end projects with Angular and participated in various software lifecycle tasks such as integration testing and continuous deployment.',
        },
      ],
    };
  },
  methods: {
    scrolledOn() {
      this.contactMe = true;
      this.$emit('actualActiveNav', 'contact');
    },
  }
};
</script>

<style scoped>
.sectionsContent--experience{
  margin-top: 2rem;
}
.no-bullets {
  list-style-type: none;
}
</style>
