const technologies = {
  list: [
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
  ],
  getList(num){
    return this.list[num];
  }
};
export { technologies };
