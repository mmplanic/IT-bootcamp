import React, {useState, useEffect} from 'react';
import {getAllEmployees} from './DummyServices';
import EmployeeCard from './Employee';
import PageSelector from './PageSelector';
import NewForm from './NewEmployeeForm';


export default function UsersForm(){
    const [emplyees, setEmployees] = useState([]);
    const [options, setOptions] = useState([]);
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(1);
    const [amount, setAmount] = useState(10);

    useEffect(() => {
        getAllEmployees().then(res=>{ console.log(res.data.data);
         setEmployees(res.data.data); setOptions(getOptions(res.data.data)); setPages(getPages(res.data.data))
    });  
        

    }, []) 


    const getOptions=(arr)=>{
        let count = 1;

        return arr.map(()=>{return (<option value={count} key={count}>{count++}</option>)});

    }
    const getPages=(arr, bug)=>{
        
        return bug?Math.ceil(arr.length/bug):Math.ceil(arr.length/amount);
    }

    const changeAmount=(e)=>{

        setAmount(e.target.value);
        setPage(1)
        setPages(getPages(emplyees,e.target.value));

    }

    const changePage=(e)=>{
        setPage(e.target.value);
    }


    return(<div>
            <select onChange={changeAmount} value = {amount}>
                {options}
            </select>
            <div>
                {emplyees.slice(((page-1)*amount),(page*amount)).map(emp=><EmployeeCard employee={emp} key = {emp.id}/>)}
            </div>
            <div>
                <PageSelector changePage={changePage} numOfPages={pages}/>
            </div>
            <NewForm/>

        </div>
    )

}