import React from 'react'
import './header.css'
import { isLogedIn, LogOut } from '../services/auth.service'

export default function Header(){
    const logOutUser=()=>{
        LogOut(); 
    }
    return(
            <header className="main-header">
                { isLogedIn()?<a href="/welcome"><div onClick={logOutUser} className="log-out">LOG OUT</div></a>:null}
                <div className="header-title"/>
            </header>
        )
}