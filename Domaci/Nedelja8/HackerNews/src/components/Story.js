import React, { useState, useEffect } from 'react'
import { getStory } from '../services/HackerNewsSevices'
import { mapTimeString } from '../util/mapTimeString'

export default function Story({storyId}) {
    const [story,setStory] = useState({})

    useEffect(() => { // na osnovu ID-a ucitavamo objekat clanak u state story

        getStory(storyId).then(data => data && setStory(data)) // eslint-disable-next-line
    },[])


    const createElement = ()=>{            //izdvojena funkcija koja generise elemente za renderovanje
        return (  <div className="card">
                    <a href={story.url} target="_blank" rel="noopener noreferrer">   {/* rel="noopener noreferrer" je bezbednosni atribut koji kaze da sajtu koji otvaramo ne saljemo podatke o nasoj aplikaciji iz koje saljemo zahtev za otvaranje, React izbacuje upozorenje bez toga */ }
                        <h3>{story.title}</h3>
                    </a>
                    <p className="autor-label">Autor:</p>
                    <p className="autor">{story.by}</p>
                    <p className="score-label">Score:</p>
                    <div className="star"><p>{story.score}</p></div>
                    <p>Uploaded: {mapTimeString(story.time)} ago</p>
                
                </div>)
    }
    
    return ((story && story.url)?createElement():null); //proveravamo ispravnost objekta story i njegovog url propertija i ako su dobri generisemo element(desava se da sa servera dobijemo los podatak za url)

}