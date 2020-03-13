import React, { Component } from 'react'

export default class Desc extends Component{
    render(){
        return(<label>{this.props.desc}</label>);
    }
}