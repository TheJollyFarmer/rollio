<template>
  <div class="gallery">
    <DropAreaGalleryImage
      v-for="(image, index) in images"
      :key="index"
      :image="image"
      @close="removeEvent(index)"/>
  </div>
</template>

<script>
import DropAreaGalleryImage from "@/components/DropAreaGalleryImage";

export default {
  name: "DropAreaGallery",

  components: { DropAreaGalleryImage },

  props: {
    images: {
      type: Array,
      required: true
    }
  },

  methods: {
    removeEvent(image) {
      this.$emit("remove", image);
    }
  }
};
</script>

<style lang="scss" scoped>
.gallery {
  align-content: flex-start;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
}
</style>
