import Axios from 'axios';

const API = function () {
    return Axios.create({
        baseURL: `${process.env.API_BASE_PATH}`,
        timeout: 40000,
        headers: {'authorization': `bearer ${window.localStorage.getItem('auth')}`}
    });
};

export default API;