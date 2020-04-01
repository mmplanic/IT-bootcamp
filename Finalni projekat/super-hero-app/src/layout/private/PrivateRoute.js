import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import {isLogedIn} from '../../services/auth.service'
import Header from '../header'



export default function PrivateRoute({component:Component, ...rest}){
    return(

    <Route {...rest} >{isLogedIn()?<><Header /><Component {...rest}/></>:<Redirect to="/welcome"/>}</Route>   
    )
}