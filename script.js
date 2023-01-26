"use strict";



const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Many');
} else {
    console.log ('Ok');
}

(num == 50) ? console.log('Ok') : console.log('Error');


switch (num){
    case 49:
        console.log('Wrong');
        break;
    case 51:
        console.log('Yes');
        break;
    default:
        console.log('GoodBye');
        break;
}




// const numberofFilms = +prompt('How many films you did see?','');

// console.log(numberofFilms);

// const personalMovieDB = {
//     count: numberofFilms,
//     movies: {
        
//     },
//     actors: {},
//     genres: [],
//     privat: false
// };


// const a = prompt('What last film you did see?', '');
// const b = +prompt('Rate last film', '');
// const c = prompt('What last film you did see?', '');
// const d = +prompt('Rate last film', '');



// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);




// const answer = [];

// answer[0] = prompt('What is your name?','');
// answer[1] = prompt('What is your surname?',''); 
// answer[2] = prompt('What is your age?','');  


// document.write(answer);


// console.log(typeof(answer));

// const category = 'toys';

// console.log('https://someurl.com/' + category);


// const user = 'Ivan';
// alert(`Hello, ${user}!!!`);




// const sizeAuto1 = 50100;
// const sizeAuto2 = 40100;

// console.log('Full size auto 1: ' + sizeAuto1 + ', full siza auto 2: ' + sizeAuto2);

// const obj = {
//     name: 'John',
//     age: 24,
//     isMarried: false
// };

// console.log(obj.age);



// let arr = ['plump', 'orange', 'apple'];

// arr[10] = 'banana';

// console.log(arr);

// const arrObj = {
//     0: 'plump',
//     1: 'orange',
//     2: 'apple'
// };

// arrObj.b = '1234';



//  console.log(arrObj['b']);
//  console.log(arrObj);

//  const storeName = 'Foods';
// const storeDescription = {
//     budget: 10000,
//     employees: ['Artur', 'Anton', 'Vladimir'],
//     products: {
//         milk: 50,
//         meat: 150
//     }
    
// };
// storeDescription.open = true;

// console.log(storeDescription);

