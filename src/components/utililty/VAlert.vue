<template>
  <TransitionFade v-if="active">
    <div class="box">
      <span class="icon is-medium">
        <FontAwesomeIcon
          :icon="icon"
          size="2x"/>
      </span>
      <slot/>
    </div>
  </transitionfade>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBomb } from "@fortawesome/free-solid-svg-icons";
import TransitionFade from "@/components/TransitionFade";

export default {
  name: "VAlert",

  components: { TransitionFade, FontAwesomeIcon },

  props: {
    active: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  computed: {
    isActive() {
      return this.active ? "is-active" : "";
    },

    icon() {
      return faBomb;
    }
  },

  mounted() {
    document.addEventListener("click", this.closeEvent);
  },

  beforeDestroy() {
    document.removeEventListener("click", this.closeEvent);
  },

  methods: {
    closeEvent(event) {
      if (!this.$el.contains(event.target)) {
        this.$emit("close");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.box {
  align-items: center;
  border: 1px solid $grey-light;
  border-left-width: 0;
  border-radius: 3px;
  bottom: 1em;
  box-shadow: $shadow;
  display: flex;
  left: 50%;
  padding: 0.8em 1em 0.8em 2em;
  position: absolute;
  transform: translateX(-50%);

  .icon {
    margin-right: 0.5em;
  }

  &::before {
    background-color: $danger;
    border-right-width: 0;
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
    content: "";
    height: calc(100% + 2px);
    left: 0;
    margin-top: -1.5px;
    position: absolute;
    top: 0;
    width: 1em;
  }
}
</style>
