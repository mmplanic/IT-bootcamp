import { calcPercentage,formatNumber } from "./manageData";

//Kreiranje HTML elemenata

var headerContainer = document.createElement("div");
var title = document.createElement("h3");
var state = document.createElement("h1");
var income = document.createElement("div");
var incomeTitle = document.createElement("label");
var incomeAmount = document.createElement("label");
let inDescAndAmountCont = document.createElement("div");
var outcome = document.createElement("div");
var outcomeTitle = document.createElement("label");
let outDescAndAmountCont = document.createElement("div");
var outcomeAmount = document.createElement("label");
var outcomePercentage = document.createElement("label");

//Generise Header sa potrebnim elementima i vraca ga
export function createHeader(){ 

    
    headerContainer.id = "header-container";

    title.className = "white-text";
    title.innerText = "Dostupan Budzet";


    state.className = "white-text"
    state.innerHTML = "0.00";


    income.className = "header-display";
    income.id="header-display-in";

    incomeTitle.innerHTML = "PRIHOD";
    incomeAmount.innerHTML = "0.00";
    incomeAmount.className = "white-text";

    outcome.className = "header-display";
    outcome.id = "header-display-out";

    outcomeTitle.innerHTML = "RASHOD";
    outcomeAmount.innerHTML = "0.00";
    outcomeAmount.className = "white-text";
    outcomePercentage.className = "percent-display";
    outcomePercentage.innerHTML = "0%";
    
    inDescAndAmountCont.className = "desc-and-amount";
    outDescAndAmountCont.className = "desc-and-amount";

    inDescAndAmountCont.append(incomeTitle,incomeAmount);
    income.append(inDescAndAmountCont);

    outDescAndAmountCont.append(outcomeTitle,outcomeAmount)
    outcome.append(outDescAndAmountCont, outcomePercentage);

    headerContainer.append(title,state,income,outcome);

    return headerContainer;

}

//Unosi novu vrednost za raspolozivi budzet
export function updateState(amount){
    state.innerHTML = formatNumber(amount);
}
//Unosi novu vrednost za ukupan prihod
export function upadeteTotalIn(amountIn){
    incomeAmount.innerHTML = formatNumber(amountIn);
}
//Unosi novu vrednost za ukupan rashod
export function upadeteTotalOut(amountOut){
    outcomeAmount.innerHTML = formatNumber(amountOut);
}
//Unosi novu vrednost procenta rashoda od prihoda
export function updatePercentage(amountIn,amountOut){
    outcomePercentage.innerHTML = calcPercentage(amountOut,amountIn)+"%";
} 