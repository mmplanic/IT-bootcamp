function getMaximum(a,b,c){
    let max = a;
    if (b>max){max=b;}     // moguce je uraditi i jednostavnije koristeci gotovu funkciju Math.max(a,b,c);
    if (c>max){max=c;}
    return max;
}

console.log(getMaximum(8,14,11));