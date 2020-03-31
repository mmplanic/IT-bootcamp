import React from 'react'
import {LogIn} from '../../services/auth.service'

export default function LoginForm(){
    let username = "";
    let password = "";

    const setParam = (e)=>{
        switch (e.target.name){
            case "Username": username = e.target.value; break;
            case "password": password = e.target.value;
        }
    }

    const LogInUser = (e)=>{
        e.preventDefault();
        LogIn({username,password}).then((res)=>console.log(res)).catch((err)=>{console.log(err.response.data.message)});
     
    }

    return (<form onSubmit={LogInUser}>
        <input type = "text" placeholder="Username" name="Username" required = {true} onInput={setParam}/>
        <input type = "password" placeholder="password" name="password" minLength="8" required = {true} onInput={setParam}/>
        <input type = "submit" value="Log in"/>
    </form>)
}