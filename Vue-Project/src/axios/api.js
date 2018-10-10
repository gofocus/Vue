import axios from 'axios';

// let base = 'localhost:8081';
// let base = 'http://127.0.0.1:80';
let base = '';

export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data).catch(err => alert("error")); };
