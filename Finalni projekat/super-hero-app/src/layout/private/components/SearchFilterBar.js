import React from 'react'
import './SearchFilterBar.css'
export default function SearchFilterBar(props){

    const generateOptions = (options)=>{
        return options.map((option)=>{return(<option value={option} key = {option}>{option.toUpperCase()}</option>)});
    }

    return (<div className="search-bar">
        <input type="text" name="search" placeholder="name" onInput={props.changeFilterParam}/>
        
        <select name="race" onChange={props.changeFilterParam}>{generateOptions(props.filterOptions.race)}</select>
        <select name="gender" onChange={props.changeFilterParam}>{generateOptions(props.filterOptions.gender)}</select>
        <select name="alignment" onChange={props.changeFilterParam}>{generateOptions(props.filterOptions.alignment)}</select>
        <select name="publisher" onChange={props.changeFilterParam}>{generateOptions(props.filterOptions.publisher)}</select>


    </div>)
}