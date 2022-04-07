import axios from "axios";

const instance = axios.create({
  baseURL:"http://localhost:8085"
  //baseURL: "http://ec2-18-118-3-205.us-east-2.compute.amazonaws.com/",
});

export default instance;
