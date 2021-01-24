<template>
  <form
    class="upload-form"
    method="POST"
    enctype="multipart/form-data">
    <label
      for="file"
      class="button is-primary">
      Select Files
    </label>
    <input
      id="file"
      type="file"
      multiple
      accept="image/*"
      class="hidden-input"
      @change="onChange">
  </form>
</template>
<script>
export default {
  name: "UploadForm",

  methods: {
    onChange(e) {
      let files = e.target.files;

      this.$emit("change", files);
    }
  }
};
</script>

<style lang="scss" scoped>
.upload-form {
  align-items: center;
  display: flex;
  justify-content: center;

  .hidden-input {
    display: none;
  }
}
</style>
