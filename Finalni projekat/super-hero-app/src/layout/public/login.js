import React from 'react'

export default function LoginForm(){
    let username = "";
    let password = "";

    const setParam = (e)=>{
        switch (e.target.name){
            case "Username": username = e.target.value; break;
            case "password": password = e.target.value;
        }
    }

    const Register = (e)=>{
        e.preventDefault();
    }

    return (<form onSubmit={Register}>
        <input type = "text" placeholder="Username" name="Username" required = {true} onInput={setParam}/>
        <input type = "password" placeholder="password" name="password" required = {true} onInput={setParam}/>
        <input type = "submit" value="Log in"/>
    </form>)
}