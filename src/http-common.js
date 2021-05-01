import axios from "axios";

export default axios.create({
    baseURL: "https://vecher-evening.herokuapp.com/api",
    headers: {
        "Content-type": "application/json"
    }
});
