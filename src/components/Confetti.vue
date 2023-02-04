<template>
  <div v-for="item in items" :key="item.id" 
    class="confetti"
    :class="[pop ? 'pop' : 'notpop']"
    v-bind:color="item.color"
    v-bind:xmove="item.xmove"
    v-bind:ymove="item.ymove"
    v-bind:duration="item.duration"
  >
    <div class="inner" :style="{ background : '#'+item.color }"></div>
  </div>
</template>

<script>
export default {
  props: ['pop'],
  data(){
    return{
      items: [
      ],
    }
  },
  created(){
    // Create 500 confetti items
    for (let i = 0; i < 250; i++) {
      // Randomize color
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
      // Get random numbers for how much they move horizontally & diagonally 
      var xmove = (Math.random()- 0.5 ) * 700
      var ymove = (Math.random()+0.3) * 400
      var duration = Math.floor(((Math.random()) * 10)+7)*100;
      this.items.push({id:i, color:randomColor,xmove:xmove,ymove:ymove, duration:duration})
    }
  },
  watch: {
    pop(newPop, oldPop){
      if (newPop===true && oldPop===false){
        this.popConfetti();
      }
    }
  },
  methods:{
    popConfetti() {
      Array.from(document.getElementsByClassName("confetti")).forEach(element => {
        let duration = parseFloat(element.getAttribute("duration"))
        // Web Animations API to animate each confetti element
        // Using individual attributes
        element.animate(
          [{ transform: 'translateX('+element.getAttribute("xmove")+'px)'}],
          { duration: duration, fill: "forwards", easing: "ease-in"  }
        )
        let child = element.firstChild;
        let anim = child.animate(
          [{ transform: 'translateY(-'+element.getAttribute("ymove")+'px)'}],
          { duration: duration/2, fill: "forwards", easing: "ease-out"  }
        )
        // Once translateY animation is done, animate confetti falling
        anim.addEventListener("finish", () => {
          child.animate([{transform:'translateY(0px)'}],{duration:duration/2,fill:"forwards", easing: "ease-in"})
        })
      });
    }
  },
}
</script>

<style>
.confetti{
  width:5px;
  height:5px;
  display: block;
  position: absolute;
}
.inner{
  content: "";
  width:5px;
  height:5px;
  display: block;
  position: absolute;
}
.notpop{
  display: none;
}
.pop{
  display: initial;
}
</style>