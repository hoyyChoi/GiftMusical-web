import axios from "axios";


const conduitAxios = axios.create({
    baseURL : 'http://ec2-43-200-222-144.ap-northeast-2.compute.amazonaws.com:8080'
});



const postRegisterUser=(user)=>conduitAxios.post('/api/v1/auth/signup',{user});

export {postRegisterUser}