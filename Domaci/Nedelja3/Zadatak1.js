function getMaximum(a,b,c){
    let max = a;
    if (b>max){max=b;}
    if (c>max){max=c;}
    return max;
}

console.log(getMaximum(8,14,11));