import React, { Component } from 'react'

import Emoji from './emojiKlasa'
import Desc from './descriptionKlasa'

export default class Card extends Component{
    render(){
        return(<><Emoji url={this.props.url}/> <br/> <Desc desc={this.props.desc}/><br/></>);
    }
}