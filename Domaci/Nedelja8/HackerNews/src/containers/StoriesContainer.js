
import './container.css';
import React, { useState, useEffect } from 'react';
import { getStoryIds} from '../services/HackerNewsSevices';


import Filter from '../components/Filter';
import StoryList from '../components/StoryList';

export const StoriesContainer = () => {
    const [storyIds,setStoryIds] = useState([]);   //niz ID-eva clanaka
    const [Type,setType] = useState(0);            //index zahtevanog tipa clanka  (u servisima su definisani tipovi za prosledjen index)
    const [Amount,setAmount] = useState(20);       //broj poruka koje zelimo da prikazemo
    
    useEffect(() => {

        async function loadData(){
            const response = await getStoryIds(Type); //moze i bez ove funkcije i responsa koriste .then(...)
            
            setStoryIds(response);
            
        }

        loadData();    
         
       
  },[Type,Amount]) //povezali smo useEffect sa ova dva stejta kako izvrsila ponovno ucitavanje prilikom njihove promene


  const changeFilters=(number,type)=>{  //funkcija koja menja stejtove tipa i broja poruka, poziva se iz komponente filter kojoj je prosledjena kao props
            setAmount(number);
            setType(type);
  }


  return (
    <>
        <header><h1><span>Welcome to</span><br/>Hacker News</h1></header>
        <Filter setFilters={changeFilters}/>
        <div className="list-cont"><StoryList storyIds={storyIds} Amount = {Amount}/></div>
    </>
  )
}