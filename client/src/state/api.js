
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5001' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
//redux toolkit is used inorder to set url path
//backend url is taken and set the baserurl to that
//now user -> http://localhost/5001/general/user/${id} so to call the function that is executing in this url 
//endpoints are set using build querys and tagtypes tell different type of endpoints 
//when client connects to frontend server and call the reducer function or dispatches the function which is reducerpath
//the above url are called and backend part is executed 