import axios from 'axios';


// const url = "https://superheroapi.com/api/";
// const key = "10157396979806872";

// export async function getHeroByDI(id){
//     return await axios.get(url+key+"/"+id)
// }

const url = "https://akabab.github.io/superhero-api/api/all.json";

export default async function getAllHeroes(){
    return await axios.get(url);
}