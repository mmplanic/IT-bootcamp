import axios from 'axios';


const baseURL = "	http://dummy.restapiexample.com/api/v1/";

const getAllEmployees = ()=>{
    return axios.get(baseURL+"employees");
}

const createNewEmployee=(name,salary,age)=>{
    return axios.post(baseURL+"create",{name,salary,age});
}

export {getAllEmployees, createNewEmployee}