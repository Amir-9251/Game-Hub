import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];
}
const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0177a411d2c44baf8e3b5dabe1b7c5da'
    }
});



class APIClint<T> {
    endpoint: string;
    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }
    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config)
            .then(response => response.data);
    }
}
export default APIClint;