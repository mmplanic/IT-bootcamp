import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../header';

export default function PublicRoute({ component: Component, ...rest }) {
    return (<Route {...rest}><Header /><Component {...rest} /></Route>);
}
