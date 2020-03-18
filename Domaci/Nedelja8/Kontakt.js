import React from 'react'

export default function Kontakt(props){

    let {id,name,number} = props.contact; 

    return(<div id={id} className = "contact"><label className="name">{name}</label><label className="number">{number}</label></div>)
    
}