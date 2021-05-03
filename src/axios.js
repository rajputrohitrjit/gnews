import axios from 'axios';

const instance = axios.create({
    baseURL: ' https://gnews.io/api/v4/'
});

// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// instance.interceptors.request...

export default instance;