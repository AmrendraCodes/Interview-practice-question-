// Find the largest number in an array without using Math.max()

let n = [0,1,2,3];
let largest = n[0];

for (let i = 1; i<n.length; i++){
    if(n[i] >largest) {
        largest =n[i];

    }
}
console.log(largest);