import React from 'react'


export default function EmployeeCard({employee}){


    return(
        <div>
            <label>{employee.employee_name}</label>
            <label>{employee.employee_age}</label>
            <label>{employee.employee_salary}</label>
        </div>
    )
}