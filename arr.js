// let hero =["a","b","c","d","e","f"];
// for(let i=0; i<hero.length; i++){
//     console.log(hero[i]);
// }

// //for of 

// let phone=["apple","samsung","oppo","IQOO","vivo"];
// for(let mobile of phone){
//     console.log(mobile);
// }

// //average of array elements

// let marks=[22,33,55,66,87,3,46];
// let sum=0;
// for(mark of marks){
//     sum += mark;
// }
// console.log(sum);
// let avg = sum/marks.length;
// console.log(avg);

// //appling offer of 10%

// let price = [200,350,980,360,120];
// for(let amount of price){
//     console.log(amount-amount/10);
// }

//using push and unshift

// let phoneNumber=[7,8,3,6,8,3,6,9,4,9];
// phoneNumber.push(0);
// console.log(phoneNumber);

// phoneNumber.unshift(78);
// console.log(phoneNumber);

// //using pop and shift 
// phoneNumber.pop();
// console.log(phoneNumber);


// phoneNumber.shift();
// console.log(phoneNumber);

// using slice and splice
// phoneNumber.slice(5,9);
// console.log(phoneNumber.slice(5,9));
// console.log(phoneNumber.splice(5,4,1,2,3,4));

////practice question

// let company=["bloomberg","microsoft","uber","google","ibm","netlix"];
// //Q1 remove the first company
// company.shift();
// console.log(company);
// //Q2 rem uber and ola
// company.splice(2,1,"ola");
// console.log(company);
// //Q3 add amazon at end
// company.push("amazon");
// console.log(company);

// // foreach method || foreach function (chapter 5 me h)

// // what are higher order function||method 
// // the function which take another function as parameter are hof||hom

// let int=[1,2,3,4,5];
// int.forEach(val => {
//     console.log(val);    
// });

 // //Q4 print the square of each element of array
// let arrAy=[11,22,33,44];
// arrAy.forEach(element=> {
//     console.log(element*element);
// })

// //filter
let cod = [5,56,88,62];
let cod2 = cod.filter(cal=>{
    return cal%2 === 0;
})
console.log(cod2);