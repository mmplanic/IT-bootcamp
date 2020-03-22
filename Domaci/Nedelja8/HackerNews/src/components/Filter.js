import React, {useState} from 'react'

export default function Filter(props){

    const [num, setNum] = useState(20)     // izabrani broj clanaka za prikaz
    const [type, settType] = useState(0)   // izabrani tip clanaka za prikaz

    const changeType = (e) =>{
        settType(e.target.value)
    }
    const changeNumber = (e) =>{
        setNum(e.target.value);
    }

    const sendParam= ()=>{         //saljemo parametre za filtriranje roditelju (StoriesContainer elementu) koji ce na osnovu njih izvrsiti promenu svojih stejova za filtere i ponovno ucitavanje.
        props.setFilters(num,type)
    }

    return(<div className="filter">
                <label className="number-label">Number of articles to show: 

                    
                    <select id = "number" value={num} onChange={changeNumber}>
                            <option value="20">20</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                            <option value="200">200</option>
                            <option value="300">300</option>
                            <option value="400">400</option>
                        </select> 
                </label>

                
                <label >Type of articles to show: 
                    <select id="type" value={type} onChange={changeType}>
                        <option value="0">Latest</option>
                        <option value="1">Top</option>
                        <option value="2">Best</option>
                    </select>
                </label>

                <button onClick={sendParam}>LOAD ARTICLES</button>
        </div>
    )
}