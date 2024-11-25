import axios from "axios";
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:'0177a411d2c44baf8e3b5dabe1b7c5da'
    }
})