import React,{useEffect,useState} from 'react'
import { generateRandomNum, extractHero, checkOption } from '../../utils/utils'
import { getAllHeroes, getHeroByID } from '../../services/heroes.api.services';
import './Quiz.css';
import NavBar from './components/NavBar';


let allHeroesIDs = [];
let hero = {};
let attributes;
const attributesNames = ["Publisher", "Race", "Gender", "Alignment", "Height", "Weight", "Hair Color", "Eye Color", "Place Of Birth", "Occupation", "Full name"]
let Names = [];
let heroName;
let tryName="";
let heroImage;
let hintsNames = [];
let timer;

export default function Quiz(){
        const [time, setTime] = useState(0);
        const [hints, setHints] = useState([]);
        const [suggests, setSuggests] = useState([]);
        

    useEffect(()=>{
        getAllHeroes().then((res)=>{  
            
            res.data.forEach(hero=>{allHeroesIDs.push(hero.id); Names.push(hero.name)});
        }) 

    },[]) 



    const startQuiz=async()=>{
        let randomizeAgain = true;
        while(randomizeAgain){
            await pickRandomHero();
            randomizeAgain = checkAttributes().length<9;
        }
        attributes = checkAttributes();
        console.log(attributes);
        Game();
    }


    const pickRandomHero=async()=>{
        let response = await getHeroByID(allHeroesIDs[generateRandomNum(0,allHeroesIDs.length-1)]);
        hero = response.data;
        setAttributes();
    }
    const setAttributes=()=>{
        const {publisher, race, gender, alignment, height, weight, hairColor, eyeColor, placeOfBirth, occupation, fullName, images, name} = extractHero(hero);
        attributes = [publisher, race, gender, alignment, height, weight, hairColor, eyeColor, placeOfBirth, occupation, fullName];
        heroName = name;
        heroImage = images.sm;
    }
    const checkAttributes = ()=>{
        
        let goodAttributes= [];
        hintsNames = []
        attributes.forEach((attr,index)=>{if(checkOption(attr) !== "other"){goodAttributes.push(attr); hintsNames.push(attributesNames[index])}});
        return goodAttributes;
    }
    
    const Game = ()=>{
        let counter = 0;
        console.log(attributes);
        console.log(heroName);
        onTick();
        
        timer = window.setInterval(()=>{ if (counter === attributes.length-1){window.clearInterval(timer)} onTick()},3000);
        function onTick(){
            counter++;
            setHints(attributes.slice(0,counter)); 
            setTime(counter);
        }
    }

    const setName=(e)=>{
        tryName = e.target.value;
        setSuggests(Names.filter((name)=>{
            return name.toLowerCase().includes(tryName.toLowerCase())
        }))
    }

    const Guess=(e)=>{
        e.preventDefault();
        if(tryName.toLowerCase() === heroName.toLowerCase()){
            console.log("pogodak");
            window.clearInterval(timer);
            
        }
        else{
            console.log("zajeb");   
            
        }
    }
    

    return(<div className="quiz">
        <NavBar/>
        <div className="nav-bar form-title">QUIZ</div>
        <button className="start" onClick={startQuiz}>START NEW GAME</button>

        <form onSubmit={Guess}>
            <input type="text" placeholder="?" onInput={setName}/>
            <input type="submit"/>
        </form>
        
        <div>{time}</div>
        <div className="suggests">
            {suggests.map((sug,index)=><label key={"sug"+index}>{sug}</label>)}
        </div>
        
        <div className="hints">{hints.map((hint,index)=>{return(<div className="hint" key={"hint"+index}>
            <label key ={"hn"+index} >{hintsNames[index]}: </label>
            <label key ={"hh"+index} >{hint}</label></div>
            )})}
        </div>


        <img src={heroImage} alt="bla"/>

    
    </div>)

}