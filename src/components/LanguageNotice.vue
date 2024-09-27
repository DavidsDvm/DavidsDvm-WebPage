<template>
  <transition name="presentation" appear enter-active-class="animate__animated animate__backInRight"
  leave-active-class="animate__animated animate__rollOut">
    <div v-if="visible" class="language-notice" @click="closeNotice">
      <span class="message"> {{  $t('home.languageNotice') }}</span>
      <span class="icon">🌐</span>
      <button>✖</button>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'LanguageNotice',
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    closeNotice() {
      this.visible = false;
    },
  },
};
</script>

<style scoped>
.language-notice {
  position: fixed;
  bottom: 24px;
  left: 60px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  z-index: 1000;
}

.icon {
  margin-left: 10px;
}

button {
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-left: 10px;
}

/* dont show if is mobile */
@media (max-width: 768px) {
  .language-notice {
    display: none;
  }
}
</style>
