import axios from 'axios';
import 'dotenv';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ${process.env}',
    },
});

 