<template>
  <div class="textContainer">
    <div>
      <span class="big type">Hi,</span>
    </div>
    <span class="normal type"
      >I'm <span class="myname">Arjun</span> and I could be your next:
    </span>
    <div id="select">
      <select v-model="selected" @change="pop = true">
        <option selected hidden disabled value="">Please select...</option>
        <option>Full Stack Developer</option>
        <option>Software Engineer</option>
        <option>DevOps member</option>
      </select>
      <div id="confetti">
        <Confetti :pop="pop" />
      </div>
    </div>
    <div id="links">
      <a href="https://github.com/Harjun751" target="_blank"
        ><img src="../assets/icons/gh.png" width="61" height="61"
      /></a>
      <a
        href="https://www.linkedin.com/in/harvinder-singh-77abb5185/"
        target="_blank"
        ><img src="../assets/icons/linkedin.png" width="61" height="61"
      /></a>
    </div>
  </div>
</template>

<script>
import Confetti from "../components/Confetti.vue";

export default {
  components: {
    Confetti,
  },
  data() {
    return {
      selected: "",
      pop: false,
    };
  },
};
</script>

<style scoped>
.textContainer {
  width: 1053px;
  margin: 300px auto 0 auto;
}
div {
  text-align: left;
}

.big {
  font-size: 57px;
  width: 0;
  max-width: 64px;
  display: inline-block;
}
span.normal {
  float: left;
  font-size: 39px;
  width: 0;
  max-width: 640px;
  height: 49px;

  animation-delay: 0.7s;
}
.type {
  white-space: nowrap;
  overflow: hidden;
  animation: typing 1s forwards;
}
.myname {
  background: #ff8acc;
  color: white;
  padding: 0px 10px;
  border-radius: 10px;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
#select {
  display: inline-block;
  margin-left: 20px;
  overflow: hidden;
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  padding: 5px 20px;

  font-family: "Quicksand";
  font-size: 36px;
  color: #7c6c80;

  background: none;
  border: 1px solid #7c6c80;
  border-radius: 20px;

  position: relative;
  top: 60px;

  animation: rise 1s forwards;
  animation-delay: 1.7s;
}

#links {
  margin-top: 50px;
  opacity: 0;
  animation: appear 1s forwards;
  animation-delay: 1.7s;
}
#links a {
  margin-right: 20px;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes rise {
  0% {
    top: 60px;
  }
  100% {
    top: 0px;
  }
}

#confetti {
  width: 5px;
  margin: auto;
}

@media screen and (max-width: 1180px) {
  html{
    overflow-x:hidden;
  }
  .textContainer {
    text-align: center;
    width: 90%;
    height: 500px;
    margin-top: 50%;
  }
  .textContainer .normal,
  .textContainer .big {
    position: relative;
    left: 50%;
    right: 50%;
    transform: translate(-50%, 0%);
  }
  .textContainer span.normal {
    overflow: visible;
    white-space: normal;
    height: unset;
    width:100%;
    animation:unset;
  }
  #select {
    margin-left: 0;
    margin-top: 20px;
  }
  #select {
    width: 90%;
  }
  select {
    width: 100%;
    font-size: 30px;
  }
  #links {
    text-align: center;
  }
  select, #links{
    animation-delay: 0.7s;
  }
}
</style>
