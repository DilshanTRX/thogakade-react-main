import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8080/thogakade/api/v1/",
});
