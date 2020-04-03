import React, {useState} from 'react'
import {Register, setLogedIn, isLogedIn} from '../../services/auth.service'
import {useHistory, Redirect} from 'react-router-dom'
import './LogRegForms.css'

let name = "";
let surname = "";
let username = "";
let email = "";
let password = "";

export default function RegisterForm(){
    const [message, setMessage] = useState("")
    let history = useHistory();
    if (isLogedIn()){return (<Redirect to="/home"/>)};


    const setParam = (e)=>{
        switch (e.target.name){
            case "Name": name = e.target.value; break;
            case "Lastname": surname = e.target.value; break;
            case "Username": username = e.target.value; break;
            case "email": email = e.target.value; break;
            case "password": password = e.target.value; break;
            default:;
        }
    }

    const RegisterNewAccount = (e)=>{
        e.preventDefault();
        Register({name, surname, username, password, email}).then(res=>{
            if(res.data.success){
                setLogedIn(true);
                history.push('home');
            }
            else{
                setMessage("Failed. Try again later or contact support.");
            }
            
        });
                
        
    }

    return (<>
    <div className="nav-bar form-title">REGISTER</div>
    <div className = "log-reg-wrapper">
                <form className="log-reg-form" onSubmit={RegisterNewAccount}>
                    <input type = "text" placeholder="Name" name="Name" required = {true} onInput={setParam}/>
                    <input type = "text" placeholder="Surname" name="Lastname" required = {true} onInput={setParam}/>
                    <input type = "text" placeholder="username" name="Username" required = {true} onInput={setParam}/>
                    <input type = "text" placeholder="e-mail" name="email" required = {true} onInput={setParam} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                    <input type = "password" placeholder="password" name="password" minLength="8" required = {true} onInput={setParam}/>
                    <input type = "password" placeholder="password" name="re-password" minLength="8" required = {true} onInput={(e)=>{e.target.setCustomValidity(e.target.value !== password?"password must match":"");}}/>
                    <input type = "submit" value="Confirm"/>
                    <label>{message}</label>
                </form>
            </div>
            </>
    )
}