import axios from 'axios';

let logedIn = true;
const url = "https://coetus.herokuapp.com/api/users";

export function isLogedIn(){
    return logedIn;
}

export function setLogedIn(status){
    logedIn = status;
}

export async function Register(data){
    return await axios.put(url, data);
}

export async function LogIn(data){
    return await axios.post(url, data);
}

export function LogOut(){
    logedIn = false;
}


