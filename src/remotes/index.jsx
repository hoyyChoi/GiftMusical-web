import axios from "axios";


const MusicalAxios = axios.create({
    baseURL : 'http://ec2-43-200-222-144.ap-northeast-2.compute.amazonaws.com'
});


const postRegisterUser=({email,password})=>MusicalAxios.post('/api/v1/auth/login',{email,password});

const getLoginUser=()=>MusicalAxios.get('/api/v1/users/me',{headers:{authorization:`Bearer ${localStorage.getItem('token')}`}});

const postSchedules=(schedule)=>MusicalAxios.post('/api/v1/schedules',schedule,{headers:{authorization:`Bearer ${localStorage.getItem('token')}`}})

export {postRegisterUser,getLoginUser,postSchedules}