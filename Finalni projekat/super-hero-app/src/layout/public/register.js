import React from 'react'
import {Register} from '../../services/auth.service'


export default function RegisterForm(){
    let name = "";
    let surname = "";
    let username = "";
    let email = "";
    let password = "";

    const setParam = (e)=>{
        switch (e.target.name){
            case "Name": name = e.target.value; break;
            case "Lastname": surname = e.target.value; break;
            case "Username": username = e.target.value; break;
            case "email": email = e.target.value; break;
            case "password": password = e.target.value;
        }
    }

    const RegisterNewAccount = (e)=>{
        e.preventDefault();
        Register({name, surname, username, password, email}).then(res=>console.log(res));
                
        
    }

    return (<form onSubmit={RegisterNewAccount}>
        <input type = "text" placeholder="Name" name="Name" required = {true} onInput={setParam}/>
        <input type = "text" placeholder="Surname" name="Lastname" required = {true} onInput={setParam}/>
        <input type = "text" placeholder="Username" name="Username" required = {true} onInput={setParam}/>
        <input type = "text" placeholder="e-mail" name="email" required = {true} onInput={setParam} pattern="[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}"/>
        <input type = "password" placeholder="password" name="password" minLength="8" required = {true} onInput={setParam}/>
        <input type = "password" placeholder="password" name="re-password" minLength="8" required = {true} onInput={(e)=>{e.target.setCustomValidity(e.target.value !== password?"password must match":"");}}/>
        <input type = "submit" value="Confirm"/>
    </form>)
}