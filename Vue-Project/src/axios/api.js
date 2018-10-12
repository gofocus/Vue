import axios from 'axios';

// let base = 'localhost:8081';
let base = '/api';
// let base = 'http://127.0.0.1:80';
// let base = '';



export const requestLogin = params => axios.post(`${base}/user/login`, params, {headers: {'Content-Type': 'application/json'}}).then(res => res) ;
/*export const requestLogin = function (params) {
   return axios.post(`${base}/user/loginTest`, params, { headers: {'Content-Type': 'application/json'} }).then( res=>res);
};*/



