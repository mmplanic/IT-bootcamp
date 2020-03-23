import React from 'react'

export default function PageSelector({changePage, numOfPages}){



    const createOptions = ()=>{
        let pages = [];

        for (let i = 1; i <= numOfPages; i++) {
            pages.push(<button type="button" onClick={changePage} value={i} key={i}>{i}</button>)
            
        }
        return pages;
    }

    return(<>{createOptions()}</>)
}