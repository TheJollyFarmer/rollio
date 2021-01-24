<template>
  <nav
    class="navbar is-primary is-fixed-top"
    role="navigation"
    aria-label="main navigation">
    <span class="navbar-title"> ROLLIO </span>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style lang="scss" scoped>
.navbar {
  align-items: center;
  box-shadow: 0px -2px 20px 0px #4a4a4a;
  display: flex;
  font-size: 2em;
  font-weight: bold;
  justify-content: center;
  padding: 0.3em 0;
  text-shadow: 0 3px 4px rgba(0, 0, 0, 0.18);
}
</style>
