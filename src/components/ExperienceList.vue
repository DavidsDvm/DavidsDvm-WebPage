<template>
  <div class="Projects--mainContent" id="experienceMainContent">
    <div class="sectionsTittle--text__contactMe">
      >{{ $t('experience.title') }}
    </div>
    <Scrollwatcher sentinal-name="Experience" @on-intersection-element="scrolledOn()" />
    <div class="sectionsContent--experience">
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
        {
          title: this.$t('experience.jobs.third.title'),
          date: this.$t('experience.jobs.third.date'),
          company: this.$t('experience.jobs.third.company'),
          description: this.$t('experience.jobs.third.description'),
        },
        {
          title: this.$t('experience.jobs.fourth.title'),
          date: this.$t('experience.jobs.fourth.date'),
          company: this.$t('experience.jobs.fourth.company'),
          description: this.$t('experience.jobs.fourth.description'),
        },
        {
          title: this.$t('experience.jobs.fifth.title'),
          date: this.$t('experience.jobs.fifth.date'),
          company: this.$t('experience.jobs.fifth.company'),
          description: this.$t('experience.jobs.fifth.description'),
        }
      ],
    };
  },
  methods: {
    scrolledOn() {
      this.$emit('actualActiveNav', 'experience');
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
        {
          title: this.$t('experience.jobs.third.title'),
          date: this.$t('experience.jobs.third.date'),
          company: this.$t('experience.jobs.third.company'),
          description: this.$t('experience.jobs.third.description'),
        },
        {
          title: this.$t('experience.jobs.fourth.title'),
          date: this.$t('experience.jobs.fourth.date'),
          company: this.$t('experience.jobs.fourth.company'),
          description: this.$t('experience.jobs.fourth.description'),
        },
        {
          title: this.$t('experience.jobs.fifth.title'),
          date: this.$t('experience.jobs.fifth.date'),
          company: this.$t('experience.jobs.fifth.company'),
          description: this.$t('experience.jobs.fifth.description'),
        }
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

/* remove ul padding on small devices */
@media (max-width: 680px) {
  .relative {
    padding-left: 0;
  }
}
</style>
