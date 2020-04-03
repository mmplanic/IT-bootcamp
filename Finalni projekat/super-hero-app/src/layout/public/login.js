import React,{useState} from 'react'
import {LogIn,setLogedIn, isLogedIn} from '../../services/auth.service'
import {useHistory, Redirect} from 'react-router-dom'
import './LogRegForms.css'

let username = "";
let password = "";

export default function LoginForm(){
    
    const [message, setMessage] = useState("");
    let history = useHistory();
    if (isLogedIn()){return (<Redirect to="/home"/>)};


    const setParam = (e)=>{
        switch (e.target.name){
            case "Username": username = e.target.value; break;
            case "password": password = e.target.value; break;
            default:;
        }
    }

    const LogInUser = (e)=>{
        e.preventDefault();
        LogIn({username,password}).then((res)=>{
            if(res.data.success){
                setLogedIn(true);
                history.push('home');
            }
            else setMessage("Failed. Try again later or contact support.");
        }).catch((err)=>{setMessage(err.response.data.message)});
     
    }

    return (<>
    <div className="nav-bar form-title">LOGIN</div>
    <div className = "log-reg-wrapper">
                <form className="log-reg-form" onSubmit={LogInUser}>
                    <input type = "text" placeholder="username" name="Username" required = {true} onInput={setParam}/>
                    <input type = "password" placeholder="password" name="password" minLength="8" required = {true} onInput={setParam}/>
                    <input type = "submit" value="Log in"/>
                    <label>{message}</label>
                </form>
            </div>
            </>
    )
}