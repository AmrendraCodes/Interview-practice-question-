// Find the largest number in an array without using Math.max()

let n = [0,1,2,3];
let largest = n[0];

for (let i = 1; i<n.length; i++){
    if(n[i] >largest) {
        largest =n[i];

    }
}
console.log(largest);

 // Reverse a string with simple method

//  function reverseString(str){
//     let result = "";
//     for(let i = str.length-1;i>=0;i--){
//         result += str[i];
//     }
//     return result;
//  }

//  console.log(reverseString("ammu"));

//  Write a function that return sum of numbers 
// let a = 5;
// let b = 6;
// let sum  = 0;
//  sum = a+b;
//  console.log(sum);

// function num(a,b){
//     const sum = a+b;

// return sum;

// }
// console.log(num(2,3));

//  Write a Function to check numbe is even or odd 

function Checknumber(n){
    if (n%2==0){
        console.log("even");
        
    }
    else {
        console.log("odd");
        
    }
}

console.log(Checknumber(4));
console.log(Checknumber(7));

// Check largest number array in function 
function largestnum(n){

    let largest = n[0];

    for(let i = 0; i < n.length; i++){

        if(n[i] > largest){
            largest = n[i];
        }

    }

    return largest;
}

console.log(largestnum([2,5,1,9,3]));

// Reverse string using function 

function reverseString(str){
    let rev = "";
    for (let i = str.length-1; i>=0; i--){
        rev+= str[i];
    }
    return rev;

}

console.log(reverseString("Hello"));












 
 
 
