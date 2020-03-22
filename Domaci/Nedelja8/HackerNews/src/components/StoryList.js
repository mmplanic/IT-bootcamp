import React from 'react'
import Story from '../components/Story';



export default function StoryList(props){ // dobijamo niz ID-eva i broj clanaka koji zelimo prikazati (props.Amount) - izdvajamo ih funkcijom slice()

    return (<div className="list">{props.storyIds.slice(0,props.Amount).map(storyId => <Story storyId={storyId} key={storyId}/>)}</div>);

}