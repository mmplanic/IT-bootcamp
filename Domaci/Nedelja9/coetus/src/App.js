import React, { useState, useEffect } from 'react';
import LogInForm from './LogIn';
import List from './List';
import { getAllMessages, getMessagesByUser } from './CoetusServices';
import NewMessForm from './NewMessageForm';


var shown = false;      // boolean koji nam govori da li smo odabrali da nam poruke za izabranog korisnika budu prikazane

function App() {
  const [user, setUser] = useState(null);                // korisnik koji je ulogovan, na pocetku je null jer nije niko ulogovan
  const [messages, setMessages] = useState([]);          // sve poruke sa servera
  const [userMessages, setUserMessages] = useState([]);  // samo poruke izabranog korisnika
  

  const LogInUser = (user)=>{          //funkcija kojom logujemo korisnika, prosledjuje se LogIn elementu
    setUser(user);
    return user;
  }

  const loadAllMesages = ()=>{        //funkcija za ucitavanje svih poruka
    getAllMessages().then(response => response.data.data && setMessages(response.data.data));
  }



  const loadUserMessages = ()=>{      //funkcija za ucitavanje poruka od ulogovanog korisnika
    if(shown){
      getMessagesByUser(user).then(response=> response.data.messages && setUserMessages(response.data.messages));
    }
  }

  useEffect(() => {    // funkcija ce se izvrsavati kod prvog prikaza, ucitace ce sve poruke
    loadAllMesages();
  }, []); 




  const showUserMessages = ()=>{  //funkcija koju pazivamo klikom na dugme za prikaz poruka za ulogovanog korisnika
    
    if (user){       // provera da li je korisnik ulogovan
      shown = true;  //menjamo stanje da zelimo prikaz poruka za korisnika
      loadUserMessages();   // pozivamo funkciju za ucitavanje
      
    }
  }
  return (<>
        <div>
            <LogInForm user={user} LogInUser={LogInUser}/>
        </div>
            <List messages={messages.slice(-20)}/>
            <NewMessForm user={user} refreshAll={loadAllMesages} refreshByUser={loadUserMessages}/>
         <div>
            <button onClick={showUserMessages}>Show Users Messages</button>
            <List messages={userMessages}/>
         </div>
    </>
  )
}

export default App;
