<template>
  <div style="position:relative;padding-top:43px;">
    <p id="title">Skills & Technologies</p>
    <div class="container">
        <div v-for="skill in technologies.list" :key="skill.name" class="skill">
        <img :src="require(`../assets/${skill.icon}`)" width="160" height="160" />
        <p class="name">{{ skill.name }}</p>
        </div>
    </div>
  </div>
</template>

<script>
import { technologies } from "../technologies.js"
export default {
  data() {
    return {
      technologies: technologies,
    };
  },
};
</script>

<style scoped>
#title {
  font-size: 43px;
  margin: 0;
}
.skill {
  border-radius: 30px;
  transition:transform 0.3s;
  transform: scale(1);
}

.skill:hover{
  transform: scale(1.3);
}

.name {
  font-size: 35px;
  margin: 0;
  transition: color 0.3s;
}
.title{
  font-size:43px;
  margin-top:0;
}
.container {
  margin-top:80px;
  display: grid;
  grid-template-columns: 15% 15% 15% 15% 15%;
  grid-template-rows: 20% 20% 20%;
  row-gap: 20px;
  column-gap: 50px;
  justify-content: space-around;
}
img {
  margin-top: 5px;
  border: none;
}

@media screen and (max-width: 1180px) {
  .container {
    grid-template-columns: 25% 25% 25%;
    grid-template-rows: 20% 20% 20% 20% 20%;
    row-gap: 20px;
    column-gap: 50px;
  }
}
@media only screen and (max-width: 768px) {
  .container {
    grid-template-columns: 40% 40%;
    grid-template-rows: 20% 20% 20% 20% 20% 20% 20% 20% 20%;
    row-gap: 20px;
    column-gap: 50px;
  }
  .skill{
    transform: scale(0.7);
  }
  .skill:hover{
    transform: scale(0.8);
  }
  .name{
    font-size:1.7em;
  }
}
</style>
