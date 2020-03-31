import React from 'react';
import {BrowserRouter, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Home from './layout/private/Home';
import Header from './layout/header';
import PrivateRoute from './layout/private/PrivateRoute';
import PublicRoute from './layout/public/PublicRoute';
import Welcome from './layout/public/Welcome';
import LoginForm from './layout/public/Login';
import RegisterForm from './layout/public/Register';
import About from './layout/public/About';
import HeroProfile from './layout/private/HeroProfile';
import {isLogedIn} from './services/auth.service';
import Quiz from './layout/private/Quiz';


function App() {
  return (<>
              <Header/>
              <BrowserRouter>
                <Switch>
                    <PrivateRoute component={Home} path="/home"/>
                    <PrivateRoute component={About} path="/about"/>
                    <PrivateRoute component={HeroProfile} path="/heroprofile"/>
                    <PrivateRoute component={Quiz} path="/quiz"/>
                    <PublicRoute component={Welcome} path="/welcome"/>
                    <PublicRoute component={LoginForm} path="/login"/>
                    <PublicRoute component={RegisterForm} path="/register"/>
                    <Redirect from="/" to={isLogedIn()?"/home":"/welcome"}/>
                </Switch>
              </BrowserRouter>
          </>
  );
}

export default App;
