<template>
  <VImage :image="image">
    <div
      class="overlay"
      @click="close">
      <span class="icon is-medium">
        <i class="fas fa-times fa-2x"/>
      </span>
    </div>
  </VImage>
</template>

<script>
import VImage from "@/components/utililty/VImage";

export default {
  name: "DropAreaGalleryImage",

  components: { VImage },

  props: {
    image: {
      type: String,
      required: true
    }
  },

  methods: {
    close(image) {
      this.$emit("close", image);
    }
  }
};
</script>

<style lang="scss" scoped>
.image {
  margin-bottom: 0.5em;
  margin-right: 0.53em;
  position: relative;

  &:nth-child(8n) {
    margin-right: 0;
  }

  &:hover .overlay {
    opacity: 1;

    .icon {
      transform: rotate(0);
    }
  }

  .overlay {
    align-items: center;
    background-color: $primary;
    color: $white;
    cursor: default;
    display: flex;
    font-size: 1.5em;
    font-weight: bold;
    height: 100%;
    justify-content: center;
    opacity: 0;
    position: absolute;
    transition: 0.5s ease;
    top: 0;
    width: 100%;

    .icon {
      transition: 0.5s ease;
      transform: rotate(-90deg);
    }
  }
}
</style>
