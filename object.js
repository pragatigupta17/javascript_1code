// OBJECT : 1) collection of key and value pair.
//          2) axis with . and  represent with {} .
let obj = {
    "name" : "pragati",
    "age" : 24
};
console.log(obj.name)
console.log(obj.age)

let obj1 = {
    "name" : "sajal",
    "age" : 25
};
console.log(obj1.name)
console.log(obj1.age)
// let document ={
// "querySelector" : function(){
    // console.log("hello")
// },
// "getElementById":function(){
// }
// }
// document1.querySelector();
let object =[
    {
        "id":1,
        "img":"./pic.jpg",
        "name":"Pragati",
        "course":"Python",
        "mobno":123434678890,
    },
    {
        "id":2,
        "img":"./pic.jpg",
        "name":"Aditi",
        "course":"Python",
        "mobno":989765432456,
    },
    {
        "id":3,
        "img":"./pic.jpg",
        "name":"Shambhavi",
        "course":"teaching",
        "mobno":54678976543,
    },
];
// console.log(object[0])
// console.log(object[1].course)
// console.log(object[2].name)
let selecttable = document.querySelector('#output')
selecttable.innerHTML = object.map((e)=>`
<tr>
<td>${e.id}</td>
<td><img width="100" src = "${e.img}"</td>
<td>${e.name}</td>
<td>${e.course}</td>
<td>${e.mobno}</td>
</tr>`).join(" ")

