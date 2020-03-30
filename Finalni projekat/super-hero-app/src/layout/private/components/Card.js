import React from 'react'
import {checkOption} from '../../../utils/utils';

export default function Card({hero}){

    const {images,name,appearance,biography} = hero;


    return(
        <div className="card">
            <img src={images.sm} alt="bla"/>
            <label>{name}</label>
            <label>{checkOption(appearance.race)}</label>
            <label>{checkOption(appearance.gender)}</label>
            <label>{checkOption(biography.alignment)}</label>
            <label>{checkOption(biography.publisher)}</label>

        </div>
    )

}