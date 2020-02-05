let cena = 150;
let kolNovca = 500;


if (cena > kolNovca) {
    console.log("Nemate dovoljno novca");
}
else{
    kolNovca -= cena;
    console.log("Uspesno ste kupili proizvod")
}

console.log("Trenutno stanje: " + kolNovca);    