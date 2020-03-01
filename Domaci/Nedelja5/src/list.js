import { formatNumber, removeOutcome, removeIncome } from "./manageData";
import { updateAll } from ".";

//Generise lisu na osnovu tipa liste (prihod ili rashod "in" "out"), niza stavki (listItems) i ukoliko je lista rashoda dobija
//ukupni sumu prihoda kako bi izracunali procenat za svaku stavku. Vraca listu
export function createList(typeInOut, listItems, total){
    let listContainer = document.createElement("div");
    listContainer.id = typeInOut.toLowerCase();

    let title = document.createElement("h3");
    if (listContainer.id == "in"){
        title.innerText = "PRIHODI";
    }
    else{
        title.innerText = "RASHODI";
    }

    let list = document.createElement("ul");

    listItems.forEach(element => {
        let listItem = document.createElement("li");
        let descAndAmountCont = document.createElement("div");
        let desc = document.createElement("label");
        let amount = document.createElement("label");
        let btnRemove = document.createElement("button");
        
        btnRemove.className = "button-remove";
        listItem.className = "list-item";
        descAndAmountCont.className = "desc-and-amount";
        amount.className = "list-amount";
        desc.className = "list-desc";
        
        btnRemove.innerHTML="remove";

        desc.innerText = element.getDesc();
        amount.innerText = formatNumber(element.getAmount());

        descAndAmountCont.append(desc,amount);
        listItem.appendChild(descAndAmountCont);
        
        if (listContainer.id == "out"){
            let percentDisplay = document.createElement("label");
            percentDisplay.className = "percent-display";
            percentDisplay.innerText = element.getPercentage(total)+"%";
            listItem.appendChild(percentDisplay);
            
            btnRemove.addEventListener("click",e=>{
                removeOutcome(element.id)
                e.target.parentElement.remove();
                updateAll();
            })
        }
        else{
            btnRemove.addEventListener("click",e=>{
                removeIncome(element.id)
                e.target.parentElement.remove();
                updateAll();
            })
        }
        
        listItem.appendChild(btnRemove);

        list.appendChild(listItem);


    });
    
    listContainer.appendChild(title);
    listContainer.appendChild(list);
    return listContainer;
}