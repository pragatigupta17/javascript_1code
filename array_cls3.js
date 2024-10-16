// SORTING 
let arrstr = ["ajb","ebgh","hklo","zxk","av"];
arrstr.sort();
console.log(arrstr);
let arr = [90,78,98,50,40,2,4,87,6785,1,0];
arr.sort(function(a,b){return a-b});
console.log(arr);
let arr1 =[90,78,98,50,40,2,4,87,6785,1,0];
arr1.sort(function(a,b){return b-a });
console.log(arr1);
let output = arr1.reduce(function(a,b){return a+b});
console.log(output);
let answerstr = arr1.toString()
console.log(answerstr);
let answerjoin = arr1.join(" ")
console.log(answerjoin);

// higher order method
// map
// reduce
// number sort
// find
// filter
// foreach