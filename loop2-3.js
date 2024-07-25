//calculating even or odd number

let a=21;
let b=22;
if(a%2===0){
    console.log("even");
}
else {
    console.log("odd");
}
 let c = b%2===0 ? console.log("even") : console.log("odd");
 ;

//prompt tag & alert tag

 alert("hello!!!");

 let naMe =  prompt("hello!");
 console.log(naMe);

 //calculating multiple of 5

{
    let mO5 = prompt("enter a digit");
    mO5%5===0 ? console.log("it a mul of 5") : console.log("it not a mul of 5");
}

//calculating marks

let marks = prompt("enter your marks");
let grade;

 if(marks>=90 && marks<=100){
    grade ="a";
 }
 else if (marks>=80 && marks<=89){
    grade ="b";
 }
 else {
    grade = "f";
 }

 console.log(grade);