function add(a,b){
    console.log(a+b);
}
let a=2,b=4;
add(a,b);

//arrow functions
const sum =(a,b,c)=>{
    c= a+b;
    return c;
}
let x=3;
let y=9;
let z;
console.log(sum (x,y,z));
console.log(sum);

//Q1 create a input function which return no. of vowels in string.

function countvw(str) {
    let count=0;
    str = prompt("enter your text");
    for(const element of str){
        console.log(element);
        if(element == "a" || element== "e" || element == "i" || element == "o" || element == "u" ){
            count++;
        }
    }    
    console.log("their are",count,"vowel");
}
countvw();