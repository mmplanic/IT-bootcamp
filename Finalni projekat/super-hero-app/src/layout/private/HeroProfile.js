import React from 'react'
import './HeroProfile.css'
import { Redirect } from 'react-router-dom';
import { extractHero } from '../../utils/utils';
import NavBar from './components/NavBar';
import ProfileGroup from './components/ProfileGroup';

export default function HeroProfile(props){
    
    const {hero} = props.location;
    if (!hero){return (<Redirect to="/home"/>)}


    const {name, images, intelligence,strength,speed,durability,power,combat,gender,race,height,weight,eyeColor,hairColor,fullName,alterEgos,aliases,placeOfBirth,firstAppearance,publisher,alignment,occupation,base,groupAffiliation,relatives}=extractHero(hero);
   

    const Generals=[
        {prop:"Name:", value:name},
        {prop: "Gender:", value: gender},
        {prop: "Race:", value: race},
        {prop: "Alignment:", value: alignment},
        {prop: "Publisher:", value: publisher}
    ]
   
    const Powers=[
        {prop:"Intelligence:", value:intelligence},
        {prop: "Strength:", value: strength},
        {prop: "Speed:", value: speed},
        {prop: "Durability:", value: durability},
        {prop: "Power:", value: power},
        {prop: "Combat:", value: combat}
    ]

    const Appearance=[
        {prop: "Height:", value: height},
        {prop: "Weight:", value: weight},
        {prop: "Hair color:", value: hairColor},
        {prop: "Eye color:", value: eyeColor}
    ]
    const Biography=[
        {prop: "Full name:", value: fullName},
        {prop: "Alter Egos:", value: alterEgos},
        {prop: "Aliases:", value: aliases},
        {prop: "Place of Birth:", value: placeOfBirth},
        {prop: "First appearance:", value: firstAppearance}
    ]
    const Work=[
        {prop: "Occupation:", value: occupation},
        {prop: "Base:", value: base}
    ]
    const Connections=[
        {prop: "Group affiliation:", value: groupAffiliation},
        {prop: "Relatives:", value: relatives}
    ]

    

    return(<>

        <NavBar/>
        <div className="nav-bar form-title">HERO PROFILE</div>


        <div className="hero-page">

            <div className="left-col col">
                <ProfileGroup title="Powers:" items={Powers}/>
                <ProfileGroup title="Appearance:" items={Appearance}/>
            </div>


            <div className="group-gen">
                <img src={images.md} alt="error"></img>
                
                <ProfileGroup title="GENERALS" items={Generals}/>

            </div>


            <div className ="right-col col">
                <ProfileGroup title="Work:" items={Work}/>
                <ProfileGroup title="Biography:" items={Biography}/>
                <ProfileGroup title="Connections:" items={Connections}/>
            </div>



        </div>
        
        </>
    )
}