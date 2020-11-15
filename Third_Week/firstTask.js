let A = [10, 5, 13, 18, 51];

//1.1
for (i in A) {
    console.log(A[i]);
}

//1.2
function multiplied(A) {
    return A.map(x => x * 2);
}
let B = multiplied(A);
console.log(B);

//1.3
var even = A.filter(x => x % 2 === 0);
console.log(even);

//1.4
function lowerThan10(A) {
    for (i in A) {
        if (A[i] < 10) return true;
    }
    return false;
}
console.log(lowerThan10(A));

//1.5
var devisionByThree = A.filter(x => x % 3 === 0);
console.log(devisionByThree);

//1.6
console.log(A.reduce((sum, x) => {return sum + x;}));

//1.7
let newB = A.slice(3);
console.log(newB);