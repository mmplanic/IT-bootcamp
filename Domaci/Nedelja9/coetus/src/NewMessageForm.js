import React, {useState} from 'react'
import { addMessage } from './CoetusServices';

export default function NewMessForm(props){

    const [message, setMessage] = useState("")

    const typeMessage=(e)=>{      //funkcija koja uzima novu vrednost iz polja za korisnika prilikom svakog unetog karaktera
        setMessage(e.target.value);
    }

    const sendMessage=()=>{           //funkcija proverava ispravnost unosa poruke i da li je korisnik ulogovan, ako jeste salje poruku na server i nakon toga vrsi ponovno ispisivanje poruka sa servera
        let temp = message.trim();
        if (temp !== "" && props.user){

            addMessage(props.user,message).then(()=>{props.refreshAll();props.refreshByUser()});
            setMessage("");
            
        }
        else{
            alert("Nepravilan unos poruke ili niste ulogovani!");
        }
        
    }
    return(
        <div className = "new-message">
            <input type = "text" value={message} onChange={typeMessage}/>
            <button onClick={sendMessage}>Add Message</button>
        </div>
    )
}