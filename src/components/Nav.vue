<template>
  <span id="burgerButton" @click="showNav = !showNav" :class="[showNav ? 'show' : 'hide']">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </span>

  <div id="navContainer" :class="[showNav ? 'show' : 'hide']">
    <div><a @click="showNav=false" href="#Home">Home</a></div>
    <div><a @click="showNav=false" href="#Timeline">Timeline</a></div>
    <div><a @click="showNav=false" href="#Skills">Skills</a></div>
    <div><a @click="showNav=false" href="#Projects">Projects</a></div>
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

  
  transform: translateX(-100%);
  transition: transform 0.3s;
  will-change: transform; 
  
}
#navContainer a{
  cursor: pointer;
}

#navContainer.show {
  backdrop-filter: blur(5px);
  z-index: 2;
}
#navContainer.show div {
  /* left: 0px; */
  transform: none;
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
a{
  color:unset;
  text-decoration: none;
}

@media screen and (max-width: 540px) {
  #burgerButton {
    top:10px;
    left:10px;
    transform: scale(0.8);
  }
  #navContainer div {
    padding-top:90px;
    font-size: 36px;
    text-align: left;
    margin-left: 20px;

    position: relative;
    left: -300px;
  }
  #navContainer.show {
    backdrop-filter: blur(50px);
  }
}
@media only screen and (max-width: 1280px) {
  #navContainer div {
    padding-top:100px;
  }
  #navContainer.show {
    backdrop-filter: blur(50px);
  }
}
</style>
