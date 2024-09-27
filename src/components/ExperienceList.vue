<template>
  <div class="Projects--mainContent" id="ExperienceMainContent">
    <div class="sectionsTittle--text__contactMe">
      >{{ $t('experience.title') }}
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
          title: this.$t('experience.jobs.first.title'),
          date: this.$t('experience.jobs.first.date'),
          company: this.$t('experience.jobs.first.company'),
          description: this.$t('experience.jobs.first.description'),
          link: this.$t('experience.jobs.first.link'),
        },
        {
          title: this.$t('experience.jobs.second.title'),
          date: this.$t('experience.jobs.second.date'),
          company: this.$t('experience.jobs.second.company'),
          description: this.$t('experience.jobs.second.description'),
        },
      ],
    };
  },
  methods: {
    scrolledOn() {
      this.contactMe = true;
      this.$emit('actualActiveNav', 'contact');
    },
  },
  watch: {
    // check if language has changed to update the experience list
    '$i18n.locale': function () {
      this.EXPERIENCE = [
        {
          title: this.$t('experience.jobs.first.title'),
          date: this.$t('experience.jobs.first.date'),
          company: this.$t('experience.jobs.first.company'),
          description: this.$t('experience.jobs.first.description'),
          link: this.$t('experience.jobs.first.link'),
        },
        {
          title: this.$t('experience.jobs.second.title'),
          date: this.$t('experience.jobs.second.date'),
          company: this.$t('experience.jobs.second.company'),
          description: this.$t('experience.jobs.second.description'),
        },
      ];
    },
  },
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
