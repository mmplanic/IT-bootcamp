
// ZADATAK 1

// Objekti pokemona

var pok0 = {
    name: "Pikachu",
    type: "Electric",
    abilities: ["Static"],
    stats: {
        HP:	35,	
        Attack:	55,	
        Defense: 40,
        Speed: 90,	
    },
    img: "pikachu.jpg"
}
var pok1 = {
    name: "Persian",
    type: "Normal",
    abilities: ["Limber", "Technician"],
    stats: {
        HP:	65,	
        Attack:	70,	
        Defense: 60,
        Speed: 115,	
    },
    img: "persian.jpg"
}
var pok2 = {
    name: "Vileplume",
    type: "Grass/Poison",
    abilities: ["Chlorophyll"],
    stats: {
        HP:	75,	
        Attack:	80,	
        Defense: 85,
        Speed: 50,	
    },
    img: "vileplume.jpg"
}
var pok3 = {
    name: "Lickitung",
    type: "Normal",
    abilities: ["Own Tempo", "Oblivious"],
    stats: {
        HP:	90,	
        Attack:	55,	
        Defense: 75,
        Speed: 30,	
    },
    img: "lickitung.jpg"
}
var pok4 = {
    name: "Linoone",
    type: "Normal",
    abilities: ["Pickup", "Gluttony"],
    stats: {
        HP:	78,	
        Attack:	70,	
        Defense: 61,
        Speed: 100,	
    },
    img: "linoone.jpg"
}
var pok5 = {
    name: "Mightyena",
    type: "Dark",
    abilities: ["Intimidate", "Quick Feet"],
    stats: {
        HP:	70,	
        Attack:	90,	
        Defense: 70,
        Speed: 70,	
    },
    img: "mightyena.jpg"
}

// napomena: Moglo je biti reseno i bez img property-a. Npr. src = pok.name.toLowerCase()+".jpg" tj. da fajlovi imaju naziv kao i ime pokemona
//           ali ovako se ostavlja mogucnost da fajl nosi bilo koje ime i da bude nezavisno.

//END objekti pokemona


var pokemons = [pok0,pok1,pok2,pok3,pok4,pok5]; //niz pokemona

//-------------------------------------------------------------------------


//ZADATAK 2

function getAbilities(arr){
    let newArr = [];
    pokemons.forEach(el=>{
        newArr.push(el.abilities);
    });
    return newArr;
}

//-------------------------------------------------------------------------


//ZADATAK 3

pokemons.sort((a,b) => {
    return a.stats.Speed-b.stats.Speed;
})


//-------------------------------------------------------------------------


//ZADATAK 4

function getWinner(arr){
    let winner = arr[0];
    
    arr.forEach(el =>{
        if (el.stats.Attack > winner.stats.Attack){winner = el;}
    });

    return winner;

}

//-------------------------------------------------------------------------


//ZADATAK 5

// kreiranje i selektovanje elemenata
let body = document.querySelector("body");
let wrapper = document.querySelector(".wrapper");
let btnPrikaz = document.querySelector("#prikaz");
let btnPobednik = document.querySelector("#pobednik");
let pokemonListContainer = document.createElement("div");
let pokemonWinnerContainer = document.createElement("div");

//stilizovanje
wrapper.style.cssText = "display: flex; justify-content: space-around; width:100%; margin-bottom:30px;";
pokemonListContainer.style.cssText = "max-width: 49%;  width: 49%; max-height: 90vh; overflow-y: scroll; overflow-x: hidden; text-align: center; float: left";
pokemonWinnerContainer.style.cssText = "max-width: 49%; width: 49%; max-height: 90vh; text-align: center; float:right;";

//event listeneri za dugmice - izvrsavaju prikaz
btnPrikaz.addEventListener("click",()=>{
    pokemonListContainer.innerHTML = "";
    pokemons.forEach(el =>{
        pokemonListContainer.appendChild(createPokemonHTML(el));
    });
    body.appendChild(pokemonListContainer);
});


btnPobednik.addEventListener("click",()=>{
    pokemonWinnerContainer.innerHTML = "";
    pokemonWinnerContainer.appendChild(createPokemonHTML(getWinner(pokemons)));
    body.appendChild(pokemonWinnerContainer);
});


//funkcija generise (kreira) html elemente sa svojstvima iz prosledjenog objekta (pokemon) i vraca glavni (parent) element koji u sebi sadrzi sve ostale
function createPokemonHTML(pok){
    let pokemonContainer = document.createElement("div");
    let slika = document.createElement("img");
    let ime = document.createElement("h1");
    let tip = document.createElement("h2");
    let opis = document.createElement("p");


    opis.style.marginBottom = "20px";
    slika.style.maxWidth = "50%";
    slika.style.marginBottom = "30px";


    ime.innerHTML = pok.name;
    tip.innerHTML = pok.type
    opis.innerHTML = `${pok.abilities}<br><br>${JSON.stringify(pok.stats).replace(/"|{|}/g,"").replace(/,/g,"<br>")}`;
    slika.src = pok.img;

    pokemonContainer.appendChild(ime);
    pokemonContainer.appendChild(tip);
    pokemonContainer.appendChild(opis);
    pokemonContainer.appendChild(slika);

    return pokemonContainer;

}