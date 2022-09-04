<template>
  <section>
    <Nav />
  </section>
  <div class="page">
    <HomeText />
  </div>
  <div class="page">
    <Timeline />
  </div>
</template>

<script>
import HomeText from "./views/HomeText.vue";
import Timeline from "./views/Timeline.vue";
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    HomeText,
    Nav,
    Timeline,
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
  width: 100vw;
  max-width: 100%;
  height:100vh;
  overflow-y:scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}
.page{
  height:100vh;
  scroll-snap-align: start;
  overflow: hidden;
}
</style>
