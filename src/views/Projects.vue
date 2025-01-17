<template>
  <div style="position:relative;padding-top:43px;">
    <Transition>
      <div v-if="open" class="background" @click="closeModal()"></div>
    </Transition>
    <div class="modal" :class="[open ? 'show' : '']">
        <img class="rounded" :src="getImageURL(icon)" width="557" height="276" />
        <p class="title">{{ name }}</p>
        <p class="description">{{ description }}</p>
        <p class="subtitle">Technologies Used</p>
        <div class="imglist">
            <div v-for="index in tech" :key="index" class="techList">
                <img :src="getImageURL(technologies.getTechByName(index).icon)" width="105" height="105" />
                <p class="techDesc">{{ technologies.getTechByName(index).name }}</p>
            </div>
        </div>
        <p class="subtitle">Links</p>
        <div class="imglist">
          <div v-if="links.gh" class="techList">
                <a :href="links.gh" target="_blank">
                    <img src="../assets/icons/gh.png" width="105" height="105" />
                    <figcaption>Github</figcaption>
                </a>
            </div>
            <div v-if="links.web" class="techList">
                <a :href="links.web" target="_blank">
                    <img src="../assets/icons/web.png" width="105" height="105" />
                    <figcaption>Website</figcaption>
                </a>
            </div>
            <div v-if="links.blog" class="techList">
                <a :href="links.blog" target="_blank">
                    <img src="../assets/icons/blog.png" width="105" height="105" />
                    <figcaption>Blog Post</figcaption>
                </a>
            </div>
        </div>
        <div class="closebtn" @click="closeModal()"><p>Close</p></div>
    </div>
    <p id="title">Projects</p>
    <div class="container">
        <div v-for="project in projects" :key="project.name" class="project" @click="openModal(project)"> 
        <img class="rounded" :src="require(`../assets/${project.icon}`)" width="478" height="236" />
        <p class="name">{{ project.name }}</p>
        </div>
    </div>
  </div>
</template>

<script>
import { technologies } from "../technologies.js"
export default {
  data() {
    return {
      projects: [
        {
          name: "Skyhelix Helper",
          icon: "projects/skyhelix-helper.png",
          description: "An app I created for my part-time workplace to simplify queue management.",
          tech: ["PWA","VueJS", "Docker"],
          links: {gh:"https://github.com/Harjun751/skyhelix-helper", blog:"https://harjun751.github.io/blog/2024/05/06/Optimizing-my-job-with-algorithms.html"}
        },
        {
          name: "NewsPaper",
          icon: "projects/newspaper.png",
          description: "NewsPaper is a RSS reader with web scraping for full text extraction. I built it because I was annoyed with another RSS reader I downloaded from the play store.",
          tech: ["PWA","Rust","VueJS", "Docker","CI/CD"],
          links: {gh:"https://github.com/Harjun751/rss-reader", blog:"https://harjun751.github.io/blog/2024/03/16/my-RSS-reader.html"}
        },
        {
          name: "Blogsite",
          icon: "projects/blog.png",
          description: "My blog site! I write informally about my projects and tech stuff.",
          tech: ["HTML"],
          links: {gh:"https://github.com/Harjun751/blog", web:"https://harjun751.github.io/blog/", blog:"https://harjun751.github.io/blog/2023/12/05/creating-a-blog.html"}
        },
        {
          name: "Monopoly",
          icon: "projects/monopoly.webp",
          description: "A Monopoly simulation built on Java. The backend utilizes the Spring framework. The project was made to deepen understanding of Java, and to prove a point.",
          tech: ["VueJS","Java"],
          links: {gh:"https://github.com/Harjun751/JavaMonopoly", blog:"https://harjun751.github.io/blog/2023/12/05/creating-a-blog.html"}
        },
        {
          name: "Ooper",
          icon: "projects/ooper.gif",
          description: "Ooper is a ride sharing platform created for an assignment. It utilizes a microservice architecture coded in Go for the backend of the application, and uses VueJS as the frontend framework. ",
          tech: ["VueJS","Golang","Microservices","SQL"],
          links: {gh:"https://github.com/Harjun751/ETI-Ooper"}
        },
        {
          name: "Portfolio",
          icon: "projects/portfolio.gif",
          description: "This website. Created for fun!",
          tech: ["VueJS"],
          links: {gh:"https://github.com/Harjun751/portfolio"}
        },
        {
          name: "Edufi-Timetable",
          icon: "projects/edufi-timetable.gif",
          description: "EduFi-Timetable is a microservice part of the 'EduFi' application created for the Emerging Trends in IT module assignment 2. It uses ExpressJS as the backend, with the template engine 'LiquidJS'. The frontend is a simple html page along with tailwindcss for styling. The application is Dockerized, and there is a simple lint workflow for the project.",
          tech: ["Docker","CI/CD","SQL"],
          links: {gh:"https://github.com/Harjun751/ETI-EduFi-Timetable"}
        },
        {
          name: "Simpcity",
          icon: "projects/simpcity.png",
          description: "Simpcity is a simple console application game. The project demonstrates collaborative work done on github.",
          tech: ["Python","CI/CD"],
          links: {gh:"https://github.com/notyumin/SimpCity"}
        },
      ],
      open:false,
      description:'',
      icon:'projects/ooper.gif',
      name: "",
      tech: [],
      links: {},
      technologies: technologies,
    };
  },
  methods:{
    openModal(project){
        this.description = project.description;
        this.icon = project.icon;
        this.name = project.name;
        this.tech = project.tech;
        this.links = project.links;
        this.open=true;
        document.getElementsByTagName("html")[0].style.overflowY = "hidden";
    },
    closeModal(){
        document.getElementsByTagName("html")[0].style.overflowY = "scroll";
        this.open=false;
    },
    getImageURL(img){
        return require('../assets/'+img)
    },
  }
};
</script>

<style scoped>
#title {
  font-size: 43px;
  margin: 0;
}
.project {
  width: 529px;
  height: 322px;
  border: 1px solid #7c6c80;
  border-radius: 30px;
  position: relative;
  top:0px;
  left:0px;
  transition: background 0.3s, box-shadow 0.3s, top 0.3s, left 0.3s;
  cursor: pointer;
}
.name {
  font-size: 43px;
  margin: 0;
  transition: color 0.3s;
}
.title{
  font-size:43px;
  margin-top:20px;
  margin: 20px 0;
  text-align: left;
}
.description{
    margin-top:0px;
    text-align:left;
    font-size:20px;
}
.subtitle{
    font-size:30px;
    margin: 20px 0;
    text-align:left;
}
.container {
  margin-top:20px;
  display: grid;
  grid-template-columns: 530px 530px 530px;
  grid-template-rows: 330px 330px;
  row-gap: 20px;
  column-gap: 50px;
  justify-content: center;
}
.rounded {
  margin-top: 20px;
  border: none;
  border-radius:30px;
  object-fit: contain;
}
.project:hover {
  background: #ff8acc;
  box-shadow: 5px 10px #7c6c80;
  top:-3px;
  left:-3px;
}
.project:hover > .name {
  color: white;
}
.imglist{
  display:flex;
  overflow-x: auto;
}
.modal {
  position: fixed;
  height: 100vh;
  top: 0;
  width: 540px;
  z-index:2;
  background: #FDF6FF;
  filter: drop-shadow(0 0 3px #333);
  padding: 20px 30px;

  transform: translateX(100%);
  transition: transform 0.3s;
  right:-20px;
  will-change: transform;  
  overflow-y:auto;
}
.techList{
    margin-right:20px;
    height:150px;
    display:inline-block;
}
.techDesc{
    font-size:30px;
    text-align: center;
    margin:0;
}
.modal.show{
  transform: none;
}

.background{
  position: absolute;
  top:0;
  left:0;
  width:100vw;
  height:100%;
  z-index:1;
  /* backdrop-filter laggy on firefox... */
  backdrop-filter: blur(5px);
}

.closebtn{
  display: none;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}


@media screen and (max-width: 1919px) {
  .container {
    grid-template-columns: 530px 530px;
    grid-template-rows: 330px 330px 330px;
  }
  .modal{
    position:fixed;
  }
  .background{
    position: fixed;
  }
}
@media screen and (max-width: 1120px) {
  .container {
    grid-template-columns: 530px;
    grid-template-rows: 330px 330px 330px 330px 330px;
  }
}
@media screen and (max-width: 540px) {
  .container {
    grid-template-columns: 100%;
    grid-template-rows: 220px 220px 220px 220px 220px;
    justify-items:center;
  }
  .project {
    width: 90%;
    height: 220px;
  }
  img.rounded{
    width:100%;
    height:170px;
    margin-top:0px;
  }
  .name{
    font-size:35px;
  }
  .modal{
    position:fixed;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    z-index:4;
  }
  .closebtn{
    display: block;
    width: 100%;
    color:white;
    background:#7c6c80;
    cursor: pointer;
    position:sticky;
    bottom: 0;
    left:0;
    height:30px;
  }
  .closebtn > p{
    padding-top:4px;
  }
  .imglist{
    overflow:scroll;
  }
}
</style>
