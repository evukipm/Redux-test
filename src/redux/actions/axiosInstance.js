import Axios from 'axios';

const API = function () {
    return Axios.create({
        baseURL: `${process.env.API_BASE_PATH}/api`,
        timeout: 40000,
        headers: {'authorization': `bearer ${window.localStorage.getItem('auth')}`}
    });
};

export default API;