import React, { Component } from 'react'

export default class Emoji extends Component{
    render(){
        return(<img src={this.props.url} alt="Bila je slika, majke mi"style={{width:"200px", height:"200px"}}/>);
    }
}