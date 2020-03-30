import React from 'react'

export default function RegisterForm(){
    let name = "";
    let lastname = "";
    let username = "";
    let email = "";
    let password = "";
    let repassword = "";

    const setParam = (e)=>{
        switch (e.target.name){
            case "Name": name = e.target.value; break;
            case "Lastname": lastname = e.target.value; break;
            case "Username": username = e.target.value; break;
            case "email": email = e.target.value; break;
            case "password": password = e.target.value; break;
            case "re-password": repassword = e.target.value; break;
        }
    }

    const Register = (e)=>{
        e.preventDefault();

        
    }

    return (<form onSubmit={Register}>
        <input type = "text" placeholder="Name" name="Name" required = {true} onInput={setParam}/>
        <input type = "text" placeholder="Lastname" name="Lastname" required = {true} onInput={setParam}/>
        <input type = "text" placeholder="Username" name="Username" required = {true} onInput={setParam}/>
        <input type = "text" placeholder="e-mail" name="email" required = {true} onInput={setParam}/>
        <input type = "password" placeholder="password" name="password" required = {true} onInput={setParam}/>
        <input type = "password" placeholder="password" name="re-password" required = {true} onInput={setParam}/>
        <input type = "submit" value="Confirm"/>
    </form>)
}