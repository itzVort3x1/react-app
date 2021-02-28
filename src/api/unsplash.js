import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID H1lFBK01dNYSPQuN5nlAHr2UGV00zMwwpVuZg_ZlFCw',
    },
});

 