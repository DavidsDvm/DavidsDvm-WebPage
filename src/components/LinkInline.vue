<template>
  <a
    :href="href"
    role="link"
    class="link-inline"
  >
    <slot />
  </a>
</template>

<script>
export default {
  name: 'LinkInline',
  props: {
    href: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.link-inline {
  display: inline-flex;
  align-items: center;
  font-size: 1.125rem; /* Equivalent to text-lg */
  font-weight: 500; /* Equivalent to font-medium */
  color: #8D8E91;
  transition: color 0.3s ease;
}

.link-inline:hover {
  color: #6B7280; /* A darker shade for hover effect */
}
</style>
