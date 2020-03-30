import React from 'react'
import Card from './Card'
import './CardList.css'


export default function CardList({heroes}){


    return(
        <div className="card-list">
            {heroes.map((hero)=>{return <Card hero = {hero} key={hero.id}/>})}
        </div>
    )
}