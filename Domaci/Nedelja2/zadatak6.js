let brojevi = new Array(100);

for (let i = 1; i <= brojevi.length; i++) {
    
    if (i%3 == 0 && i%5 == 0) {
        brojevi[i-1] = "FizzBuzz";
    }
    else if (i%3 == 0) {
        brojevi[i-1] = "Fizz";
    }
    else if (i%5 == 0){
        brojevi[i-1] = "Buzz";
    }
    else{
        brojevi[i-1] = i;
    }
    
}

console.log(brojevi);