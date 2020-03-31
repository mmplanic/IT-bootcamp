import React, { useState, useEffect } from 'react'
import {getAllHeroes} from '../../services/heroes.api.services';
import SearchFilterBar from './components/SearchFilterBar';
import CardList from './components/CardList';
import {checkOption} from '../../utils/utils';
//import HeroProfile from './hero.profile';


let allHeroes = [];
let search = "";
let race = "all";
let gender = "all";
let alignment = "all";
let publisher = "all";

export default function Home(){

    const [shownHeroes, setShownHeroes] = useState([]);
    const [filterOptions, setFilterOptions] = useState({race:["all"],gender:["all"],alignment:["all"],publisher:["all"]});

    





    useEffect(()=>{
        getAllHeroes().then((res)=>{  
            
            allHeroes = res.data;
            setShownHeroes(getHerosToShow());
            setFilterOptions(getFilterOptions()); 
        }) 

    },[]) 

    const getHerosToShow=()=>{
        let temp = [];
        allHeroes.forEach(hero=>{
            
            
            const {name,appearance,biography} = hero;

            if (
                        (search === "" || name.toLowerCase().includes(search.toLowerCase()))&&
                        (race === "all" || checkOption(appearance.race) === race) &&
                        (gender === "all" || checkOption(appearance.gender) === gender)&&
                        (alignment === "all" || checkOption(biography.alignment) === alignment )&&
                        (publisher === "all" || checkOption(biography.publisher) === publisher)
                    
                ){
                    temp.push(hero);                  
                    
                }
        });
        return temp.slice(0,50);

    }

    const getFilterOptions = ()=>{

        let options = {race:[],gender:[],alignment:[],publisher:[]};

        allHeroes.forEach(hero=>{

            const {appearance,biography} = hero;

            if (!options.race.includes(checkOption(appearance.race))){
                options.race.push(checkOption(appearance.race));
            }
            if(!options.gender.includes(checkOption(appearance.gender))){
                options.gender.push(checkOption(appearance.gender))
            }
            if(!options.alignment.includes(checkOption(biography.alignment))){
                options.alignment.push(checkOption(biography.alignment))
            }
            if(!options.publisher.includes(checkOption(biography.publisher))){
                options.publisher.push(checkOption(biography.publisher));
            }

        });

        const sortOptions = (arr)=>{
            arr.sort();
            if (arr.includes("other")){arr.push(...arr.splice(arr.indexOf("other"), 1))};
            arr.unshift("all");

            return arr;
        }
       
        options.race = sortOptions(options.race);
        options.gender = sortOptions(options.gender);
        options.alignment = sortOptions(options.alignment);
        options.publisher = sortOptions(options.publisher);
        
        return options;

    }
    


    const changeFilterParam = (e)=>{
        
        switch (e.target.name){
            case "search": search = e.target.value; break;
            case "race": race = e.target.value; break;
            case "gender": gender = e.target.value; break;
            case "alignment": alignment = e.target.value; break;
            case "publisher": publisher = e.target.value;
        }
        setShownHeroes(getHerosToShow());
    }



    return(<>
        <SearchFilterBar changeFilterParam={changeFilterParam} filterOptions = {filterOptions}/>
        {/* {shownHeroes[2]?(<HeroProfile hero={shownHeroes[2]}/>):null} */}
        <CardList heroes = {shownHeroes} />
        
        </>


    )

}