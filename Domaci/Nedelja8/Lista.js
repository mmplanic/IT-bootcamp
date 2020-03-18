import React, { Component } from 'react'
import Kontakt from './Kontakt';

export default class Lista extends Component{

    render(){
        return(<div id = "contact-list">{this.props.contacts.map(contact=><Kontakt contact={contact} key={contact.id}/>)}</div>)
    }

}