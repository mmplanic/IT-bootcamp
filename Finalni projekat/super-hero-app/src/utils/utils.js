const checkOption = (data)=>{
    return (!data || data === "-" || data === "0 cm" || data === "0 kg")?"other":data;
}

const generateRandomNum = (min, max)=>{
    if(max<min){let temp = max; max=min;min=temp}
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const extractHero = (hero)=>{
    const {name, powerstats,appearance,biography,work,connections,images} = hero;

    const {intelligence, strength, speed, durability, power, combat} = powerstats;
    const {gender, race, height, weight, eyeColor, hairColor} = appearance;
    const {fullName, alterEgos, aliases, placeOfBirth, firstAppearance, publisher, alignment} = biography;
    const {occupation, base} = work;
    const {groupAffiliation, relatives} = connections;

    return {name, images, intelligence,strength,speed,durability,power,combat,gender,race,height:height[1],weight:weight[1],eyeColor,hairColor,fullName,alterEgos,aliases,placeOfBirth,firstAppearance,publisher,alignment,occupation,base,groupAffiliation,relatives}

}

export {checkOption, generateRandomNum, extractHero}