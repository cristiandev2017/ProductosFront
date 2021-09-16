import axios from 'axios';

const clientAxios = axios.create({
    baseURL:'http://localhost:8080/api/product/'
});

export default clientAxios;