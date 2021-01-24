<template>
  <div id="app">
    <NavBar/>
    <main class="content-main">
      <ImageRoll :images="images"/>
      <DropArea
        :images="images"
        @loaded="addImage"
        @remove="removeImage"/>
    </main>
  </div>
</template>

<script>
import DropArea from "@/components/DropArea";
import ImageRoll from "@/components/ImageRoll";
import NavBar from "@/components/NavBar";

export default {
  name: "App",

  components: {
    DropArea,
    ImageRoll,
    NavBar
  },

  data() {
    return {
      images: []
    };
  },

  methods: {
    addImage(image) {
      this.images.push(image);
    },

    removeImage(index) {
      this.images.splice(index, 1);
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  height: calc(100vh - 3.25em);
}

.content-main {
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  height: 100%;
  justify-content: center;
}
</style>
