<template>
  <div class="drop-area-head">
    <DropAreaSvg/>
    <p class="drop-area-label">
      Upload Images
    </p>
  </div>
</template>
<script>
import DropAreaSvg from "@/components/DropAreaSvg";

export default {
  name: "DropAreaHead",

  components: { DropAreaSvg }
};
</script>

<style lang="scss" scoped>
.drop-area-head {
  align-self: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  .drop-label {
    font-size: 2em;
  }
}
</style>
