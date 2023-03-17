import axios from "axios";


const conduitAxios = axios.create({
    baseURL : 'http://ec2-43-200-222-144.ap-northeast-2.compute.amazonaws.com'
});


const postRegisterUser=({email,password})=>conduitAxios.post('/api/v1/auth/login',{email,password});

const getLoginUser=()=>conduitAxios.get('/api/v1/users/me',{headers:{authorization:`Bearer ${localStorage.getItem('token')}`}});

export {postRegisterUser,getLoginUser}