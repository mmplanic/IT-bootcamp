import React from 'react'
import { Link } from 'react-router-dom'
import './Welcome.css'



export default function Welcome(){


    return (
        <div className="welcome">
            <div className="welcome-card">
                <h1>Welcome to the world of superheroes</h1>
                <h2>This is the best plaice you could be</h2>
                <h3>Please register first or log in if you are already member</h3>
                <Link className="btn-link" to="/login">LOG IN</Link>
                <Link className='btn-link' to="/register">REGISTER</Link>
            </div>
        </div>
    )
}