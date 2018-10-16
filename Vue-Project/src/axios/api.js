import axios from 'axios';

// let base = '';
export const base = '';
// let base = '/api';

export const requestLogin = params => axios.post(`${base}/user/loginTest`, params, {headers: {'Content-Type': 'application/json'}}).then(res => res) ;
// export const requestLogin = params => axios.post(`${base}/user/loginTest`, params, {headers: {'Content-Type': 'application/json'}}).then(res => res) ;

/*export const requestLogin = function (params) {
   return axios.post(`${base}/user/loginTest`, params, { headers: {'Content-Type': 'application/json'} }).then( res=>res);
};*/

// Q:这种写法会映射到/localhost:8082/(本机地址)，而不会映射到mock上
// export const getCarousel = axios.get(`${base}/carouselList`);

