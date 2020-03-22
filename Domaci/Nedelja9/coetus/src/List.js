import React from 'react'
import MessageLabel from './Message'

export default function List(props){


    return(
        <div className ="list">
            {props.messages.map((message)=>{return <MessageLabel message={message} key={message.id}/>})}
        </div>

    )
}