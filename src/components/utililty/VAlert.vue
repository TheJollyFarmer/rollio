<template>
  <div
    :class="['modal', isActive]"
    @click="closeEvent">
    <div class="box">
      <span class="icon is-medium">
        <i class="fas fa-bomb fa-2x"/>
      </span>
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "VAlert",

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
    }
  },

  methods: {
    closeEvent() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  justify-content: flex-end;
  transition: 0.5s ease;
  opacity: 0;

  &.is-active {
    opacity: 1;
  }

  .box {
    align-items: center;
    border: 1px solid $grey-light;
    border-left-width: 0;
    border-radius: 3px;
    display: flex;
    margin-bottom: 1em;
    padding: 0.8em 1em 0.8em 2em;
    position: relative;

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
}
</style>
