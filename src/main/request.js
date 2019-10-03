const axios = require('axios');

get = url => {
    return axios.get(url)
        .then(response => response)
        .catch(reason => reason);
};

exports.get = get;