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

 function reverseString(str){
    let result = "";
    for(let i = str.length-1;i>=0;i--){
        result += str[i];
    }
    return result;
 }

 console.log(reverseString("ammu"));


 
 
 
