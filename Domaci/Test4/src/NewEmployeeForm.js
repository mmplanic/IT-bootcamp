import React, {useState} from 'react'
import {createNewEmployee} from './DummyServices';


export default function NewForm(){

    const [message, setMessage] = useState("")
    const [name, setName] = useState("");
    const [salary, setSalary] = useState(0);
    const [age, setAge] = useState(1);


    


    const addNew=(e)=>{
        e.preventDefault();
        createNewEmployee(name,salary,age).then(res=>setMessage( "New employee was created:" +JSON.stringify(res.data.data))); //Nisam stigao da lepse prikazem :( ali radi poenta zadatka
        

    }

    const changeName=(e)=>{
        setName(e.target.value);
    }
    const changeSalary=(e)=>{
        setSalary(e.target.value);
    }
    const changeAge=(e)=>{
        setAge(e.target.value);
    }

    return (<form onSubmit={addNew}>
                <label>Name:</label><input  type="text" value={name} onChange={changeName} required="true"/>
                <label>Salary:</label><input type="number" value={salary} onChange={changeSalary} required="true"/>
                <label>Age:</label><input type="number" value={age} onChange={changeAge} required="true"/>

                <input type="submit"/>
                <label>{message}</label>
            
        </form>)
}