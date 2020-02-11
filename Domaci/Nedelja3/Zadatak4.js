function lifeSupply(numPerMonth, age){
    let pizzaAmount = (100 - age) * 12 * numPerMonth; 
    return pizzaAmount;
    // return ((100 - age) * 12 * numPerMonth); -- moze i ovako bez uvodjenja promenljive. (isto vazi i za Zadatak2)

}

console.log(lifeSupply(10,26));
