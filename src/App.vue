<template>
  <HomeText />
</template>

<script>
import HomeText from "./components/HomeText.vue";

export default {
  name: "App",
  components: {
    HomeText,
  },
};
</script>

<style>
#app {
  font-family: "Quicksand";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #7C6C80;
}
html{
  background: #FDF6FF;
}
</style>
