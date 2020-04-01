import React from 'react'
import './HeroProfile.css'
import { Redirect } from 'react-router-dom';
import { extractHero } from '../../utils/utils';
import NavBar from './components/NavBar';

export default function HeroProfile(props){
    console.log(props);
    
    const {hero} = props.location;
    if (!hero){return (<Redirect to="/home"/>)}

    // const {name, powerstats,appearance,biography,work,connections,images} = hero;

    // const {intelligence, strength, speed, durability, power, combat} = powerstats;
    // const {gender, race, height, weight, eyeColor, hairColor} = appearance;
    // const {fullName, alterEgos, aliases, placeOfBirth, firstAppearance, publisher, alignment} = biography;
    // const {occupation, base} = work;
    // const {groupAffiliation, relatives} = connections;

    const {name, images, intelligence,strength,speed,durability,power,combat,gender,race,height,weight:weight,eyeColor,hairColor,fullName,alterEgos,aliases,placeOfBirth,firstAppearance,publisher,alignment,occupation,base,groupAffiliation,relatives}=extractHero(hero);


    

    return(<>

<NavBar/>
        <div className="hero-page">

            

            <img src={images.md} alt="no image"></img>
            <div className="generals">
                <label className="name">Name: {name}</label>
                <label className="gender">Gender: {gender}</label>
                <label className="race">Race: {race}</label>
                <label className="alignment"> alignment: {alignment}</label>
                <label className="publisher">Publisher: {publisher}</label>
            </div>
            <div className="group">
                <label className="group-title">Powers:</label>
                    <div className="group-items">
                        <label>Intelligence: {intelligence}</label>
                        <label>Strength: {strength}</label>
                        <label>Speed: {speed}</label>
                        <label>Durability: {durability}</label>
                        <label>Power: {power}</label>
                        <label>Combat{combat}</label>
                    </div>
            </div>

            <div className="group">
                <label className="group-title">Appearance:</label>
                <div className="group-items">
                        
                        <label>Height: {height}</label>
                        <label>Weight: {weight}</label>
                        <label>Hair color: {hairColor}</label>
                        <label>Eye color: {eyeColor}</label>

                    </div>
            </div>

            <div className="group">
                <label className="group-title">Biography:</label>
                <div className="group-items">
                        
                        <label>Full name: {fullName}</label>
                        <label>Alter Egos: {alterEgos}</label>
                        <label>Aliases: {aliases}</label>
                        <label>Place of Birth: {placeOfBirth}</label>
                        <label>First appearance: {firstAppearance}</label>

                    </div>
            </div>

            <div className="group">
                <label className="group-title">Work:</label>
                <div className="group-items">
                        
                        <label>Occupation: {occupation}</label>
                        <label>Base: {base}</label>

                    </div>
            </div>

            <div className="group">
                <label className="group-title">Connections:</label>
                <div className="group-items">
                        
                        <label>Group affiliation: {groupAffiliation}</label>
                        <label>Relatives: {relatives}</label>

                    </div>
            </div>


        </div>
        
        </>
    )
}