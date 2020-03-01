//Generise formu za unos i vraca je
export function createForm(){

    let form = document.createElement("form");
    form.id = "form";

    let selectInOut = document.createElement("select");
    selectInOut.id = "input-selector";    
    selectInOut.innerHTML = '<option value="+">+</option> <option value = "-">-</option>';

    let desc = document.createElement("input");
    desc.id = "input-desc";
    desc.type = "text";
    desc.placeholder = "Opis";
    desc.required = true;

    let amount = document.createElement("input");
    amount.id = "input-amount";
    amount.type = "number";
    amount.placeholder = "Iznos";
    amount.required = true;
    amount.min = 0.01;
    amount.step = 0.01;

    let btnSubmit = document.createElement("input");
    btnSubmit.type = "submit";
    btnSubmit.id = "submit-button";
    btnSubmit.value = "OK";


    form.append(selectInOut,desc,amount,btnSubmit);

    return form;
}
