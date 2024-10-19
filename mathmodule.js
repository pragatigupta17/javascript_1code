// let a = Math.PI;
// console.log(a)
// let b = Math.SQRT2;
// console.log(b)
// let c = Math.SQRT1_2;
// console.log(c)
// let d = 56.7;
// console.log(Math.round(d));
// console.log(Math.floor(d));
// console.log(Math.ceil(d));
// console.log(Math.trunc(d));
// console.log(Math.abs(d));
// console.log(Math.pow(5,5));
// console.log(Math.random());

// create random string otp 
let selectbtn = document.querySelector('#btn');
selectbtn.addEventListener('click',show)
function show(){
let str = '1234567890asdfghjklpoiuytrewqzxcvbnmASDFGHJKLPOIUYTREWQZXCVBNM,!@#$%^&*()';
let store = ''
for(let i=0;i<6;i++){
let random = Math.random();
let ans = random * str.length;
let afterfloor = Math.floor(ans);
let cha = str.charAt(afterfloor);
store = store + cha
}
console.log(store);
let selecth1 = document.querySelector('#output');
selecth1.innerHTML = store
}