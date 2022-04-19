<template>
  <figure :class="['image', isSize]">
    <img
      :src="image"
      alt="Image">
    <slot/>
  </figure>
</template>

<script>
export default {
  name: "VImage",

  props: {
    image: {
      type: String,
      required: true
    },

    dimension: {
      type: String,
      required: false,
      default: "62"
    }
  },

  computed: {
    isSize() {
      return `is-${this.dimension}x${this.dimension}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.image {
  align-items: center;
  border: 2px solid $black;
  border-radius: 3px;
  box-shadow: $shadow;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
</style>
