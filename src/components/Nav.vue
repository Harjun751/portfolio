<template>
  <span id="burgerButton" @click="showNav = !showNav" :class="[showNav ? 'show' : 'hide']">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </span>

  <div id="navContainer" :class="[showNav ? 'show' : 'hide']">
    <div>Home</div>
    <div>Qualifications</div>
    <div>Projects</div>
    <div>About Me</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNav: false,
    };
  },
};
</script>

<style scoped>
#burgerButton {
  position: fixed;
  top: 40px;
  left: 40px;
  z-index: 3;
  cursor: pointer;
}
#burgerButton > .line {
  width: 61px;
  height: 1px;
  background: #7c6c80;
  margin-top: 15px;
  transition: transform 0.5s, margin-top 0.5s;
}
#burgerButton:hover > .line {
  
}

#navContainer {
  position: fixed;
  top:0px;
  left: 0px;
  z-index: -1;

  width:100%;
  height: 100vh;

  transition: backdrop-filter 0.5s;
}
#navContainer div {
  padding-top:145px;
  font-size: 36px;
  text-align: left;
  margin-left: 40px;

  position: relative;
  /* depends on font size.. */
  left: -300px;
  transition: left 0.5s;
}
#navContainer div:hover {
  cursor: pointer;
}

#navContainer.show {
  backdrop-filter: blur(5px);
  z-index: 2;
}
#navContainer.show div {
  left: 0px;
}

#navContainer.hide {
  backdrop-filter: blur(0px);
}
#navContainer.hide div {
  left: -300px;
}

/* Styles to create a cross */
#burgerButton .line:nth-child(3){
  transition: opacity 0.5s;
}
#burgerButton.show .line:nth-child(3){
  opacity: 0;
}
#burgerButton.hide .line:nth-child(3){
  opacity: 1;
}

#burgerButton.show .line:nth-child(1){
  transform: rotate(45deg);
}
#burgerButton.hide .line:nth-child(1){
  transform: rotate(0deg);
}
#burgerButton.show .line:nth-child(2){
  margin-top:0px;
  transform: rotate(-45deg);
}
#burgerButton.hide .line:nth-child(2){
  transform: rotate(0deg);
}
</style>
