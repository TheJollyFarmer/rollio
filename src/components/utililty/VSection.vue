<template>
  <section>
    <slot/>
  </section>
</template>

<script>
export default {
  name: "VSection"
};
</script>

<style lang="scss" scoped>
section {
  border-top: 5px solid $primary;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.18);
  height: 52.5%;
  margin: 0 auto;
  width: calc(100% - 4em);
  background-color: rgba(187, 107, 255, 0.2);

  &:first-of-type {
    margin-right: 1.35em;
  }

  &:last-of-type {
    margin-left: 1.35em;
  }
}
</style>
