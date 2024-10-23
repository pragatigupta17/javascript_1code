let a ={
    "id":1,
    "name":"pragati",
    "age":24,
    "course":"python",
}
a.name;
let{name,age,id,course} = a;
console.log(name)
console.log(age);
console.log(id);
console.log(cousre);
// QUSTION : 1) What is the difference b/w method and function ?
//   ANSWER: 1) method: when we create any function inside object is called method.
//           2) object: when we create any function outside object is called function.

let b= {
    "sum":function(){

    }
}
b.sum()
function show(){

}
// QUESTION : what is function and its type ?
// ANS : four types 1) regular function , 2) arrow function ,
//                  3) IIFE(imediatly invoked function expression), 4) higher order function
  
//  regular function
function show (){
    
}
show();
// arrow function
const run = () =>{

}
run();
// IIFE function
(function(){

})();
// higher order function : r those function function in which we can create one function in another function
// setInterval,setTimeout,map,fil
