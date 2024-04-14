const technologies = {
  list: [
    {
      name: "PWA",
      icon: "tech/pwa.png",
    },
    {
      name: "Rust",
      icon: "tech/rust.png",
    },
    {
      name: "VueJS",
      icon: "tech/vue.png",
    },
    {
      name: "Golang",
      icon: "tech/golang.png",
    },
    {
      name: "C#",
      icon: "tech/csharp.png",
    },
    {
      name: "Java",
      icon: "tech/java.png",
    },
    {
      name: "C++",
      icon: "tech/cplusplus.png",
    },
    {
      name: "Python",
      icon: "tech/python.png",
    },
    {
      name: "SQL",
      icon: "tech/sql.png",
    },
    {
      name: "CI/CD",
      icon: "tech/cicd.png",
    },
    {
      name: "Microservices",
      icon: "tech/microservice.png",
    },
    {
      name: "Docker",
      icon: "tech/docker.png",
    },
    {
      name: "HTML",
      icon: "tech/html.png",
    },
  ],
  getList(num){
    return this.list[num];
  },
  getTechByName(name){
    return this.list.find(x=>x.name==name);
  }
};
export { technologies };
