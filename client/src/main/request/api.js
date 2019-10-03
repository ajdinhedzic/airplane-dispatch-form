import axios from 'axios';

export let get = (url) => {
    return axios.get(url)
        .then((response) => {
            return response.data;
        })
        .catch((response) => {
            return response.data;
        })
};

export let post = (url, data) => {
    return axios.post(url, data)
        .then((response) => {
            return Promise.resolve(response); //return some data here like {...response.data}
        })
        .catch((err) => {
            return Promise.reject({ errorMessage: 'something went wrong' }); //return even more data here
        })
};