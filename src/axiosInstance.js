import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://7fdkv4-5000.csb.app/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
