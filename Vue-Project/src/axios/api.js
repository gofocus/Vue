import axios from 'axios';

let base = '';
// let base = '/api';


export const requestLogin = params => axios.post(`${base}/user/loginTest`, params, {headers: {'Content-Type': 'application/json'}}).then(res => res) ;

// export const requestLogin = params => axios.post(`${base}/user/loginTest`, params, {headers: {'Content-Type': 'application/json'}}).then(res => res) ;

/*export const requestLogin = function (params) {
   return axios.post(`${base}/user/loginTest`, params, { headers: {'Content-Type': 'application/json'} }).then( res=>res);
};*/



