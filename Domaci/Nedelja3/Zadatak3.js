<<<<<<< HEAD
// ------ V1 ----------

// function divisibleByFive(arr){
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 5 == 0){
//             console.log(arr[i]);
//         }    
//     }
// }

// ------ V2 -----------// prema primeru

function divisibleByFive(arr){
    let n = new Array();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 5 == 0){
            n.push(arr[i]);
        }
        
    }
    console.log(`${n}`);
    
}



=======
// ------ V1 ----------

// function divisibleByFive(arr){
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 5 == 0){
//             console.log(arr[i]);
//         }    
//     }
// }

// ------ V2 -----------// prema primeru

function divisibleByFive(arr){
    let n = new Array();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 5 == 0){
            n.push(arr[i]);
        }
        
    }
    console.log(`${n}`);
    
}



>>>>>>> 8684678037fc33e3d7d3660537ac531240640994
divisibleByFive([1,2,3,4,5,10,15,23,1,5]);