import {createHeader,upadeteTotalIn,upadeteTotalOut,updateState, updatePercentage} from "./header";
import {createForm} from "./form";
import {addIncome, addOutcome,incomes,outcomes, getTotalIn,getTotalOut} from "./manageData";
import {createList} from "./list";
import { v1 as newRandomID } from 'uuid';




let body = document.querySelector('body');

body.appendChild(createHeader()); // Ucitavanje hedera u HTML
body.appendChild(createForm());   //Ucitavanje forme u HTML


//"hvatanje" elemenata

let form = document.querySelector("#form");
let inputSelect = document.querySelector("#input-selector");
let inputDesc = document.querySelector("#input-desc");
let inputAmount = document.querySelector("#input-amount");

let table = document.createElement("div");  // kreiranje kontejnera za liste
table.id = "table-lists";
body.appendChild(table);



renderLists(); // Ucitavanje listi u HTML


// novi unos na dogadjaj submit
form.addEventListener("submit",e =>{
    e.preventDefault();
    if (addNew(inputSelect.value, inputDesc.value, parseFloat(inputAmount.value))){ //ako uspesno izvrsi unos poziva funciju za prikaz novih vrednosti
        updateAll();
    }
    inputDesc.value = "";
    inputAmount.value = "";
})






//////////////// funkcije ////////////////


//Dodaje novu stavku, ukoliko dodje do nepravinog unosa izbacuje upozorenje i vraca false, a ako je unos uspesan vraca true 
function addNew(inOut, desc, amount){
     desc = desc.trim(" ");
     if (desc == "" || desc.length == 0){
        alert("Nepravilan unos");
        return false;
     }
     else{
         let id = newRandomID();
         if (inOut == "-"){
            addOutcome(id, desc, ((-1) * amount));
         }
         else{
             addIncome(id,desc,amount);
         }
         return true;
     }
}

//Prikaz listi u HTML
function renderLists(){
    table.innerHTML = "";
    table.append(createList("in",incomes),createList("out",outcomes,getTotalIn()));
}

//Prikazuje nove vrednosti nakon unosa ili brisanja
export function updateAll(){
    let x = getTotalIn();
    let y = getTotalOut();
    upadeteTotalIn(x);
    upadeteTotalOut(y);
    updateState(parseFloat(x)+parseFloat(y));
    updatePercentage(x,y);
    renderLists();
}

