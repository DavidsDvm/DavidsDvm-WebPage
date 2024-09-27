<template>
  <Scrollwatcher sentinal-name="{{ `experience-${title}` }}" @on-intersection-element="scrolledOn()" />
  <transition enter-active-class="animate__animated animate__jackInTheBox" leave-active-class="animate__animated animate__hinge">
    <div v-if="actualItem" class="container">
      <div class="timeline">
        <div class="timeline-content">
          <span class="bullet">&bull;</span>

          <h3 class="title">{{ title }}</h3>
          <h4 class="company">{{ company }}</h4>
          <time class="date">{{ date }}</time>
        </div>
      </div>
      <div class="description-section">
        <p>{{ description }}</p>
        <LinkInline v-if="link" :href="link">
          {{ $t('experience.readMore') }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="chevron-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 6l6 6l-6 6" />
          </svg>
        </LinkInline>
      </div>
    </div>
  </transition>
</template>

<script>
import LinkInline from './LinkInline';
import Scrollwatcher from './ScrollWatcher';

export default {
  name: 'ExperienceItem',
  components: {
    LinkInline,
    Scrollwatcher
  },
  props: {
    title: {
      type: String,
      required: true
    },
    company: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: null
    },
    date: {
      type: String,
      required: true
    }
  },
  data(){
    return {
      actualItem: false
    }
  },
  methods: {
    scrolledOn() {
      this.actualItem = true;
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;
  margin: 0 3rem;
  padding-bottom: 3rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
}

.timeline {
  position: relative;
  padding-bottom: .25rem;
}

.container::before {
  content: '';
  position: absolute;
  left: -35px;
  height: 100%;
  border-left: 2px solid #8D8E91;
  border-style: dashed;
}

.bullet {
  position: absolute;
  left: -56px;
  color: #0E0E11;
  text-shadow: -0.1vh -0.1vh 0 #8D8E91, 0.1vh -0.1vh 0 #8D8E91, -0.1vh 0.1vh 0 #8D8E91, 0.1vh 0.1vh 0 #8D8E91;
  font-size: 3.5rem;
  border-radius: 50%;
}

.title {
  font-size: 1.8rem;
  font-weight: bold;
  color: #fff;
  text-shadow: -0.2vh -0.2vh 0 #000, 0.2vh -0.2vh 0 #000, -0.2vh 0.2vh 0 #000, 0.2vh 0.2vh 0 #000;
}

.company {
  font-size: 1.25rem;
  font-weight: 600;
  color: #fff;
}

.date {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
}

.description-section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.568);
}

.chevron-icon {
  width: 1.25rem;
  height: 1.25rem;
}
</style>
