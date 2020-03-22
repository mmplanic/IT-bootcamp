import React, { Component } from 'react'
import Forma from './Forma'
import Lista from './Lista'
import './Imenik.css';


class Contakt{
    constructor(id, name, number){
        this.id=id;
        this.name=name;
        this.number = number;
    }

}


export default class Imenik extends Component{
    constructor(props){
        super(props);
        this.newContact = null;
        this.allContacts=this.props.contacts;
        this.state ={
            contacts: this.allContacts,
            showMessage:"hide"
        }
        
    }
    
    getFiltered = (e)=>{ 

        this.setState({contacts:this.allContacts.filter(contact=>(contact.name.toLowerCase().includes(e.target.value.toLowerCase())))});
    }
    
    handleSubmit = (e)=>{ 
        e.preventDefault();
        const nameInput = e.target.childNodes[0];
        const numberInput = e.target.childNodes[1];
        this.newContact = new Contakt(this.allContacts.length+1, nameInput.value, numberInput.value);
        if (this.chechMatch(nameInput.value)){
            this.setState({showMessage:"show"});
        }
        else{
            this.addContact(this.newContact);
        }

        nameInput.value = "";
        numberInput.value = "";
        
    }
    handleMatch = (e)=>{
        if(e.target.value == "Da"){
            this.allContacts = this.allContacts.map(cont=>{return (cont.name == this.newContact.name)?{...cont,number:this.newContact.number}:cont});
        }
        this.setState({showMessage:"hide"});

        this.setState({contacts:this.allContacts});
        
    }


    chechMatch = (newName)=>{ 
        let is = false;
        this.state.contacts.forEach(cont => {
            if (cont.name === newName){
                is = true;
            }
        });
        return is;
    }
    addContact = (newCont)=>{ 
        
        this.allContacts = [...this.allContacts,{...newCont}]
        this.setState({contacts:this.allContacts});
        
    }
    render(){
        return (<div id="imenik"><Forma onChange={this.getFiltered} onSubmit={this.handleSubmit}/>
        <div id = "list-container"><Lista contacts={this.state.contacts} /></div>
        <div id="dialog-box" className={this.state.showMessage}> Ovaj kontakt vec postoji, da li ste sigurni da zelite da promenite njegov broj? <input type="button" value="Da" onClick={this.handleMatch}/><input type="button" value="Ne" onClick={this.handleMatch}/></div></div>)
    }

}