import React from 'react'

export default function MessageLabel(props){

    let {username, message, timestamp} = props.message;

    timestamp = new Date(timestamp).toLocaleString();

    return(
        <div className="message-label">
            <label className="message">{message}</label>
            <label className="username">{username}</label>
            <label className="time">{timestamp}</label>
        </div>
    )
}