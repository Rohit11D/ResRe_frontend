import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://d8twdt-5000.csb.app/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
