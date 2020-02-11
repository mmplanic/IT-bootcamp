function getSquarePrice(r, fullPrice){
    let price = fullPrice / (r**2 * Math.PI); // ili samo 3.14 umesto Math.PI
    return price; 
}

console.log(getSquarePrice(10, 600));
