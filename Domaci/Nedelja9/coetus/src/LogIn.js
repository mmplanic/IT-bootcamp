import React, { useState } from 'react'

export default function LogInForm(props){

    const [logMessage, setLogMessage] = useState("Please Log in"); //poruka za ispisivanje da li je korisnik ulogovan i slicno....
    const [user, setUser] = useState("");                          //vrednost koja je uneta u polje za korisnika

    const typeUser=(e)=>{        //funkcija koja uzima novu vrednost iz polja za korisnika prilikom svakog unetog karaktera
        setUser(e.target.value);
    }

    const logIn=()=>{    // funkcija koja izvrsava logovanje korisnika

        let temp = user.trim();  // privremena promenjiva koja uzima trimovanu vrednost user-a;
        if (temp !== ""){       //provera da nakon trimovanja nije ostao prazan string(prazan unos ili samo spejsovi)
            setLogMessage("User: "+ props.LogInUser(temp)+" is loged in.")  //logovanje novog usera i ispisivanje poruke
        }
        else{
            setLogMessage("Wrong user name input! " + (props.user?("User: "+props.user+" is still loged in."):(""))); //ako unos nije pravilan ispis greske i korisnika koji je vec ulogovan ako postoji
        }
        setUser("");  // reset polja za unos korisnika
    }

    return (
            <div className="log-in">
                <input type="text" placeholder="Username" value = {user} onChange={typeUser}/>
                <button onClick={logIn}>Log In</button>
                <label>{logMessage}</label>
            </div>
    )
}

//Napomena: props.LogInUser je funkcija iz App elementa i uz pomoc nje prosledjujemo App elementu usera, i ona nam nakog prihvatanja vraca istu vrednost