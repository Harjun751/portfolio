<template>
  <p id="title">Timeline</p>
  <div id="timeline" :class="[inView ? 'animationActive' : 'not']">
    <div id="line"></div>
    <div v-for="event in events" class="event" :key="event.year" :style="{ 'margin-top': event.margin }">
      <span class="year">{{ event.year }}</span>

      <div class="overlay" :style="{ 'animation-delay': event.animationDelay }"></div>

      <div class="fill" :style="{ width: event.width }">
        <div class="line"></div>
      </div>
      <div class="info">
        <p class="header">{{ event.name }}</p>
        <p class="body">
          {{ event.desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [
        {
          year: "2019",
          name: "Information Technology @ NP",
          desc: "My first foray into the IT space. Learnt about the fundamentals of IT, such as Databases, Cybersecurity, and some programming languages",
          width: '75%',
          margin: '50px',
          animationDelay: '0ms'
        },
        {
          year: "2020",
          name: "6-Month Internship @ Security-Risk Solutions",
          desc: "Gained much industry experience at a Singapore-based SME. Did full-stack development, and created websites.",
          width: '50%',
          margin: '50px',
          animationDelay: '0.25s'
        },
        {
          year: "2021",
          name: "Graduated from NP",
          desc: "With a GPA of 3.86",
          width: '40%',
          margin: '50px',
          animationDelay: '0.5s'
        },
        {
          year: "2022",
          name: "National Service",
          desc: "Served my country for 2 years",
          width: '30%',
          margin: '70px',
          animationDelay: '0.8s'
        },
        {
          year: "2024",
          name: "Computer Science @ NUS",
          desc: "Continued IT at NUS",
          width: '25%',
          margin: '100px',
          animationDelay: '1.3s'
        },
      ],
      inView: false,
    };
  },
  created(){
    window.addEventListener('scroll',this.checkVisible)
  },
  methods:{
    checkVisible() {
      var elm = document.getElementById("timeline")
      var rect = elm.getBoundingClientRect();
      var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
      var visible = !(rect.bottom < 0 || rect.top - viewHeight >= 0);
      if (visible===true){
        this.inView=true;
        window.removeEventListener('scroll',this.checkVisible)
      }
    }
  },
  watch:{

  }
};
</script>

<style scoped>
#title{
  font-size:43px;
}
#timeline {
  position: relative;
  margin-top: 80px;
  height: 0vh;
  overflow:clip
}
#line {
  position: absolute;
  left: 150px;
  border-left: 7px solid #ff8acc;
  height: 80vh;
}
.event {
  text-align: left;
  display: flex;
  align-content: center;
  position: relative;
}
.event:before {
  content: "";
  display: inline-block;
  width: 60px;
  height: 60px;
  border-radius: 60px;
  background-color: #ff8acc;
  position: absolute;
  left: 123px;
  top: 50%;
  margin-top: -30px;
}
.year {
  font-size: 37px;
  color: #7c6c80;
  margin-left: 25px;
  margin-top: auto;
  margin-bottom: auto;
}
.info {
  width: 741px;
  display: inline-block;
  text-align: left;
}
.header {
  font-size: 29px;
  margin: 0px;
}
.body {
  font-size: 21px;
  margin: 0px;
}
.fill {
  display: inline-block;
  margin: auto 0;
}
.fill > .line {
  border: 5px dashed #ff8acc;
  margin-right: 15px;
  margin-left: 80px;
}

/* animation styles */
.animationActive#timeline{
  height: 80vh;
}

.animationActive #line{
  animation: slide 3s forwards;
}

@keyframes slide{
  from {height:0}
  to {height:80vh}
}
.animationActive .overlay{
  position: absolute;
  background: #FDF6FF;
  width: 100%;
  height:100%;
  animation: wslide 2s forwards;
}
@keyframes wslide{
  from {left:0}
  to {left:100%}
}

@media screen and (max-width: 1000px) {
  #line{
    left:10px;
    height: 100%;
  }
  .fill{
    display: none;
  }
  .event::before{
    display: none;
  }
  .event{
    flex-wrap: wrap;
  }
  .year{
    margin-top:unset;
    border-bottom: 4px solid #ff8acc;
    padding-left:10px;
    margin-left:10px;
    display: block;
  }
  .info{
    margin-left:25px;
  }
  .animationActive#timeline{
    height: 100%;
  }
  @keyframes slide{
    from {height:0}
    to {height:100%}
  }
}
</style>
