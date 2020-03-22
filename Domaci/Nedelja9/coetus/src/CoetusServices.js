import axios from 'axios';

const baseURL = "https://coetus.herokuapp.com/api/message";

export function getAllMessages(){
    return axios.get(baseURL);
}

export const getMessagesByUser = (username)=>{
    return axios.post(baseURL,{username});
}

export const addMessage = (username, message)=>{
    return axios.put(baseURL,{username,message});
}
