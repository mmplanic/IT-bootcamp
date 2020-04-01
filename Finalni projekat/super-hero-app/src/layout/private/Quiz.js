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

export default function Quiz(){
        const [time, setTime] = useState(0);
        const [hints, setHints] = useState([]);
        

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
        const {publisher, race, gender, alignment, height, weight, hairColor, eyeColor, placeOfBirth, occupation, fullName, image, name} = extractHero(hero);
        attributes = [publisher, race, gender, alignment, height, weight, hairColor, eyeColor, placeOfBirth, occupation, fullName];
        heroName = name;
        heroImage = image;
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
        
        
        let timer = window.setInterval(()=>{ if (counter === attributes.length){window.clearInterval(timer)} counter++; setHints(attributes.slice(0,counter)); setTime(counter)},3000);
        
    }

    const setName=(e)=>{
        tryName = e.target.value;
    }

    const Guess=(e)=>{
        e.preventDefault();
        if(tryName === heroName){
            console.log("pogodak");
            
        }
        else{
            console.log("zajeb");   
            
        }
    }
    

    return(<div className="quiz">
        <NavBar/>
        <div className="nav-bar form-title">QUIZ</div>
        <button onClick={startQuiz}>START</button>
        <form onSubmit={Guess}>
            <input type="text" onInput={setName}/>
        </form>
        <div>{time}</div>
        <div className="hints">{hints.map((hint,index)=>{return(<p key ={index} >{hintsNames[index]}: {hint}</p>)})}</div>

    
    </div>)

}