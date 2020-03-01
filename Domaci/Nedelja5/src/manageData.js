import { number_format } from "./numberFormat";

//Sablon za stavke (prihod ili rashod)

export class Transaction{
    constructor(id, desc, amount){
        this.id = id;
        this.desc = desc;
        this.amount = amount;
    }
    getID(){
        return this.id;
    }
    getDesc(){
        return this.desc;
    }
    getAmount(){
        return this.amount;
    }
    getPercentage(total){   //vraca procenat svog iznosa(amount) od nekog zadatog broja(total) 
        return calcPercentage(this.amount,total);
    }
}


export let incomes = []; //niz prihoda
export let outcomes = []; // niz rashoda

//Dodaje stavku u prihod
export function addIncome(id,desc,amount){
    incomes.push(new Transaction(id,desc,amount));
}
//Dodaje stavku u rashod
export function addOutcome(id,desc,amount){
    outcomes.push(new Transaction(id,desc,amount));
}
//Brise stavku iz prihoda
export function removeIncome(id){
    incomes.splice(incomes.findIndex( el => el.id == id),1);
}
//Brise stavku iz rashoda
export function removeOutcome(id){
    outcomes.splice(outcomes.findIndex( el => el.id == id),1);
}
//Vraca ukupnu vrednost prihoda
export function getTotalIn(){
    let total = 0;
    incomes.forEach(el => {total+=parseFloat(el.getAmount());});
    return total;
}
//Vraca ukupnu vrednost rashoda
export function getTotalOut(){
    let total = 0;
    outcomes.forEach(el => {total+=parseFloat(el.getAmount());});
    return total;
}

//Vraca pozitivnu celobrojnu vrednost procenta prvog zadatog broja u odnosu na drugi zadati broj
export function calcPercentage(percentFor,percentOf){
    var percent = Math.abs(Math.round(percentFor/percentOf*100));
    if (percent == Infinity){
        return 0;
    }
    else {
        return percent;
    } 
}
//funkcija koja vraca zadati broj u zadatom formatu ( +- 123,456.78 ) 
export function formatNumber(n){
    return (n>0 ? ("+ " + number_format(n,2)) : number_format(n,2).replace("-","- "));
}