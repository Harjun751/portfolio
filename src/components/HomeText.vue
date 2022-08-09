<template>
  <div class="textContainer">
    <div>
      <span class="big type">Hi,</span>
    </div>
    <span class="normal type">I'm Arjun and I could be your next: </span>
    <div id="select">
      <select v-model="selected" @change="pop=true">
          <option selected hidden disabled value="">Please select... </option>
          <option>Full Stack Developer</option>
          <option>Software Engineer</option>
          <option>DevOps member</option>
      </select>
      <div id="confetti">
        <Confetti :pop="pop"/>
      </div>
    </div>
  </div>
</template>

<script>
import Confetti from './Confetti.vue'

export default {
  components:{
    Confetti
  },
  data(){
    return{
      selected:'',
      pop:false
    }
  }
}
</script>

<style scoped>
.textContainer{
  width: 1124px;
  margin: 300px auto 0 auto;
}
div{
  text-align: left;
}


.big{
  font-size: 57px;
  width:0;
  max-width:64px;
  display: inline-block;
}
span.normal{
  float:left;
  font-size:39px;
  width:0;
  max-width:615px;
  height:49px;

  animation-delay: 0.7s;
}
.type{
  white-space: nowrap;
  overflow: hidden;
  animation: typing 1s forwards;
}

@keyframes typing{
  from {width:0}
  to {width:100%}
}
#select{
  display:inline-block;
  margin-left:20px;
  overflow: hidden;
}
select{
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  

  padding:5px 20px;

  font-family: "Quicksand";
  font-size: 36px;
  color: #7C6C80;

  background: none;
  border: 1px solid #7C6C80;
  border-radius: 20px;

  position:relative;
  top:60px;

  animation: rfd 1s forwards;
  animation-delay: 1.7s;

}

@keyframes rfd{
  0%{
    top:60px;
  }
  100%{
    top:0px;
  }
}

#confetti{
  width:5px;
  margin:auto;
}
</style>