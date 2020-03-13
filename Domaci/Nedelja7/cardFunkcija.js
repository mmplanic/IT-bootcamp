import React from 'react'
import Emoji from './emojiFunkcija'
import Desc from './descriptionFunkcija'

export default function Card(props){
    
    return (<><Emoji url={props.url}/><br/>  <Desc desc={props.desc}/><br/></>);
}