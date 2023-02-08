"use strict";

// let result = '';
// const lenght = 8;

// for(let i=1; i <= lenght; i++){
//     for( let j=0; j < i; j++){
//         result +='*';
        
//     }
    
//     result +='\n';   //перенос строки
                     
// }

// console.log(result); 


let k = 0;
while ( k < 5) {
    k++;
    if (k === 3) continue;
    console. log('k=' + k);
    
    
}

let sum = 0;
let p = 0;

while (p <= 3) {
    
    sum = sum + p;
    console.log(sum);
    p++;
}

console.log(sum);           // 1+2+3     (6)      


let g = 0;
let outStr = '';
let flag = 3;

while (g<4){
    let p1 = 0;
    while(p1 < 4) {
        if (p1 < flag) {
            outStr += '0';
        } else {
            outStr += '*';
        }
        p1++;
    }
    flag --;
    outStr +='\n'; 
    g++;
}

console.log(outStr);




let resultN = '';
const lenghtN = 5;

for(let i=0; i <= lenghtN; i++){
   
    for( let j=0; j <= i; j++){
        if ( i % 2 === 0) {
            resultN +='*';
        }  else {
            resultN +='!';
        }
            
            
      
        //resultN +='*';
        console.log('i= ' + i);
        console.log('j= ' + j);
        //console.log(resultN); 
    }
    
    resultN +='\n';   //перенос строки
                     
}

console.log(resultN); 

// var i = 0,
//   j = 0;
// // Желаемое количество строк
// var max = 5;
// var space = "",
//   star = "";

// while (i < max) {
//   space = "";
//   star = "";
//   for (j = 0; j < max - i; j++) space += "0";
//   for (j = 0; j < 2 * i + 1; j++) star += "*";
//   console.log(space + star);
//   i++;
// }

const lines = 5;
let result = '';

let i = 0;
let j = 0;

let space = '';
let star = '';

for (i =0; i <= lines; i++ ){
    
    for(j=0; j < lines - i; j++){
        space += '0';
       console.log(space);
    }
    for (j = 0; j < 2 * i + 1; j++){
        star += "*";
        console.log(star);
    }
    
        result += space + star;
        result += '\n';
        //i++;
        
}

console.log (result);


// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)

