
    import axios from "axios";

    export const api = axios.create({

        // http://192.168.56.1:3333 /create
        baseURL: "http://192.168.56.1:3333",
    })