import React from 'react'
import { Link } from 'react-router-dom'



export default function Welcome(){


    return (
        <div>
            <Link to="/login">LogIn</Link>
            <Link to="/register">Register</Link>
        </div>
    )
}