<template>
  <section>
    <Nav />
  </section>
  <div class="page" id="Home">
    <HomeText />
  </div>
  <div class="page" id="Timeline">
    <Timeline />
  </div>
  <div class="page" id="Skills">
    <Skills />
  </div>
  <div class="page" id="Projects">
    <Projects />
  </div>
</template>

<script>
import HomeText from "./views/HomeText.vue";
import Timeline from "./views/Timeline.vue";
import Skills from "./views/Skills.vue";
import Projects from "./views/Projects.vue";
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    HomeText,
    Nav,
    Timeline,
    Skills,
    Projects,
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
  min-height: 100vh;
  height:100vh;
  scroll-snap-align: start;
  overflow: hidden;
}
@media only screen and (max-width: 1919px) {
  .page{
    height: unset;
  }
  html{
    overflow-x:hidden;
    scroll-snap-type: initial;
  }
}
</style>
