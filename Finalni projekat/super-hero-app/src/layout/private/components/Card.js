import React from 'react'
import {checkOption} from '../../../utils/utils';
import { Link } from 'react-router-dom';


export default function Card({hero}){

    const {images,name,appearance,biography} = hero;


    return(
        <div className="card">
            <img src={images.sm} alt="bla"/>

            <div className="card-info">
                <div className="card-info-labels">
                    <label>Name:</label>
                    <label>Race:</label>
                    <label>Gender:</label>
                    <label>Alignment:</label>
                    <label>Publisher:</label>
                </div>
                <div className="card-info-generals">
                    <label>{name}</label>
                    <label>{checkOption(appearance.race)}</label>
                    <label>{checkOption(appearance.gender)}</label>
                    <label>{checkOption(biography.alignment)}</label>
                    <label>{checkOption(biography.publisher)}</label>
                </div>
            </div>
            <Link className="btn-profile" to={{
                        pathname:"/heroprofile",
                        hero:hero
                    }}><div >GO TO PROFILE</div></Link>


        </div>
    )

}