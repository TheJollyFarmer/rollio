<template>
  <VSection>
    <div
      :class="['drop-area', isActive]"
      @dragenter.prevent="setHighlightTrue"
      @dragover.prevent="setHighlightTrue"
      @dragleave.prevent="setHighlightFalse"
      @drop.prevent="onDrop">
      <DropAreaHead v-if="noImages"/>
      <DropAreaGallery
        v-else
        :images="images"
        @remove="removeEvent"/>
    </div>
    <VAlert
      :active="alert"
      @close="toggleAlert">
      You can only add a maximum of 40 images!
    </VAlert>
  </VSection>
</template>

<script>
import DropAreaGallery from "@/components/DropAreaGallery";
import DropAreaHead from "@/components/DropAreaHead";
import VAlert from "@/components/utililty/VAlert";
import VSection from "@/components/utililty/VSection";

export default {
  name: "DropArea",

  components: {
    VSection,
    DropAreaGallery,
    DropAreaHead,
    VAlert
  },

  props: {
    images: {
      type: Array,
      required: false,
      default: () => []
    }
  },

  data() {
    return {
      highlight: false,
      alert: false
    };
  },

  computed: {
    isActive() {
      return this.highlight ? "highlight" : "";
    },

    maxImages() {
      return this.images.length >= 40;
    },

    noImages() {
      return this.images.length === 0;
    }
  },

  methods: {
    onDrop(e) {
      let files = e.dataTransfer.files;

      this.maxImages ? this.toggleAlert() : this.handleImages(files);
    },

    toggleAlert() {
      this.alert = !this.alert;
    },

    handleImages(files) {
      [...files].forEach(this.loadedEvent);

      this.setHighlightFalse();
    },

    loadedEvent(file) {
      let reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = e => {
        let image = e.target.result;

        this.$emit("loaded", image);
      };
    },

    setHighlightTrue() {
      this.highlight = true;
    },

    setHighlightFalse() {
      this.highlight = false;
    },

    removeEvent(image) {
      this.$emit("remove", image);
    }
  }
};
</script>

<style lang="scss" scoped>
.drop-area {
  border: 2px dashed $grey-dark;
  border-radius: 5px;
  display: flex;
  height: calc(100% - 2em);
  margin: 1em;
  padding: 0.5em;
  transition: 0.2s ease-in;

  &.highlight {
    border-color: $primary;
    transition: 0.2s ease-out;
  }
}
</style>
