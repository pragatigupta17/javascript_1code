//POP --> to remove the last element no of list array
//PUSH --> to add the last element no of list aaray
//SHIFT --> TO add the starting element no of list array
//UNSHIFT --> to remove the element in array from starting 
//DELETE --> to delete the value but we not used to bcz it leave empty
//SPLICE --> to add element in the middle of array list
let arr = [78,89,90,5677,45,987,78]
console.log(arr.length);
arr.pop();
arr.pop();
console.log(arr);
arr.push("hello");
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift(777777);
console.log(arr);
delete arr [2];
console.log(arr);
// arr.splice(startfrom,howmany,addhowmany)
arr.splice(0,1);
console.log(arr);