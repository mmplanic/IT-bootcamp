import React from 'react'
import './SearchFilterBar.css'
export default function SearchFilterBar(props){

    const generateOptions = (options)=>{
        return options.map((option)=>{return(<option value={option} key = {option}>{option.toUpperCase()}</option>)});
    }

    const setTitle=(e)=>{
        e.target.title = e.target.value;
    }

    return (<div className="search-bar">
        
        <div className="filter-group">
            <div id="sel-1" className="select-cloud"><select name="race" title='ALL' onChange={(e)=>{props.changeFilterParam(e);setTitle(e)}}>{generateOptions(props.filterOptions.race)}</select></div>
            <div id="sel-2" className="select-cloud"><select name="gender" title='ALL' onChange={(e)=>{props.changeFilterParam(e);setTitle(e)}}>{generateOptions(props.filterOptions.gender)}</select></div>
        </div>
        <input type="text" name="search" placeholder="SEARCH" onInput={props.changeFilterParam}/>
        <div className="filter-group">
            <div id="sel-3" className="select-cloud"><select name="alignment" title='ALL' onChange={(e)=>{props.changeFilterParam(e);setTitle(e)}}>{generateOptions(props.filterOptions.alignment)}</select></div>
            <div id="sel-4" className="select-cloud"><select name="publisher" title='ALL' onChange={(e)=>{props.changeFilterParam(e);setTitle(e)}}>{generateOptions(props.filterOptions.publisher)}</select></div>
        </div>

    </div>)
}