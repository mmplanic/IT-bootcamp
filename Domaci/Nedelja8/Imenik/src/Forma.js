import React, { Component } from 'react'

// fukncije koje vrse proveru ispravnosti unosa prilikom kucanja, i dalje je moguce uneti podatke pogresno uz pomoc COPY-PASTE ali 
// prilikom submitaa forma vrsi proveru po regex patternu tako da se nece realizovati unos dok god podaci ne budu u trazenom formatu 

const nameTypingChecker = (e)=> {  // Sprecava unos SPACE na pocetak ili vise od jednog SPACE-a uzastopno (maximum tri reci za ime i prezime i sta god(nadimak))
    if (e.key === " " && (e.target.value == ""  || e.target.value[e.target.value.length-1] == " " ||e.target.value.split(" ").length >=3)){
        e.preventDefault();
    }
}
const numberTypingChecker = (e)=>{  // Don't ask ali radi kako treba, ceo dan sam izgubio zezajuci se s ovim.
    let allowKeys = ["Backspace","Enter","Tab"," ","+"];

    if (e.key.match("[^0-9]") && !allowKeys.includes(e.key)){
        e.preventDefault(); return;
    }
    else if (allowKeys.slice(0,3).includes(e.key)){
        return;
    }
    else if (e.target.value.length >=14 && (!allowKeys.slice(0,3).includes(e.key))){
        e.preventDefault();
    }
    else if (e.target.value.length == 4 || e.key == " "){

        if (e.target.value.length == 4){
            e.target.value+= " ";
            if (e.key == " "){
                e.preventDefault();
            }
        }
        else{
            e.preventDefault();
        }
    }
    else if (e.key == "+" || e.target.value.length <= 0){
        if(e.target.value.includes("+")){
            e.preventDefault();
        }
        else{
            if(e.key.match("[0-9]")){
                e.target.value = "+"
            }
            else if(e.key = " "){
                e.target.value = "+"
                e.preventDefault();
            }
        }
    }

}




export default class Forma extends Component{


    render(){
        return (<form id="input-form" onSubmit = {this.props.onSubmit}>
            <input id="name" placeholder="Ime Prezime ...(3 reci max)" type="text" pattern="[^ ]* ?[^ ]* ?[^ ]+" required autoComplete="off" maxLength="40" onChange={this.props.onChange} onKeyDown={nameTypingChecker}/>
            <input id="number" placeholder="+123 123456789" pattern="\+[0-9]{3} [0-9]{8,9}" type="tel" required autoComplete="off" maxLength="14" onKeyDown={numberTypingChecker}/>
            <input id="subbmit" type="submit" value="DODAJ KONTAKT"></input>

        </form>)
    }
}