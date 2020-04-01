import axios from 'axios';

let logedIn = false;
const url = "https://coetus.herokuapp.com/api/users";

export function isLogedIn(){
    return logedIn || localStorage.getItem('loged');
}

export function setLogedIn(status){
    logedIn = status;
    localStorage.setItem('loged','loged');
}

export async function Register(data){
    return await axios.put(url, data);
}

export async function LogIn(data){
    return await axios.post(url, data);
}

export function LogOut(){
    localStorage.removeItem('loged');
    logedIn = false;
    
}


