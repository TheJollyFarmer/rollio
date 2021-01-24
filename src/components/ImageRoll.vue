<template>
  <VSection class="image-roll">
    <VImage
      :image="image"
      dimension="128"/>
    <button
      class="button is-primary"
      @click="randomiseImage">
      Roll
    </button>
    <VAlert
      :active="alert"
      @close="toggleAlert">
      {{ alertText }}
    </VAlert>
  </VSection>
</template>

<script>
import VImage from "@/components/utililty/VImage";
import VAlert from "@/components/utililty/VAlert";
import VSection from "@/components/utililty/VSection";

export default {
  name: "ImageRoll",

  components: { VSection, VAlert, VImage },

  props: {
    images: {
      type: Array,
      required: false,
      default: () => []
    }
  },

  data() {
    return {
      number: 1,
      alert: false
    };
  },

  computed: {
    image() {
      return this.count ? this.userImage : this.placeholder;
    },

    userImage() {
      return this.images[this.number - 1];
    },

    placeholder() {
      return require(`@/assets/images/placeholder.png`);
    },

    count() {
      return this.images.length;
    },

    alertText() {
      return this.count > 0
        ? "You need to add more images!"
        : "You need to add at least two images!";
    }
  },

  methods: {
    randomiseImage() {
      this.count > 1 ? this.randomiseNumber() : this.toggleAlert();
    },

    randomiseNumber() {
      let step = 0;
      let self = this;

      let interval = setInterval(function() {
        step += 1;

        let number = self.generateNumber();

        if (step === self.count * 10) clearInterval(interval);

        self.number = number;
      }, 75);
    },

    generateNumber() {
      return Math.floor(Math.random() * this.count) + 1;
    },

    toggleAlert() {
      this.alert = !this.alert;
    }
  }
};
</script>

<style lang="scss" scoped>
.image-roll {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .button {
    margin-top: 1em;
    transition: 0.2s ease-out;
    width: 128px;

    &:hover {
      transition: 0.2s ease-in;
    }
  }
}
</style>
