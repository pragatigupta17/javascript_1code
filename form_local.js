function save(){
    let ob={
     name:document.querySelector("#name").value,
     age:document.querySelector("#age").value,
     mail:document.querySelector("#mail").value,
     address:document.querySelector("#address").value,
     no:document.querySelector("#no").value,
    cpswd:document.querySelector("#cpswd").value,
    }

   localStorage.setItem("data",JSON.stringify(ob))
   }

   let m=JSON.parse(localStorage.getItem("data"))
   console.log(m);
 let myname=document.querySelector("#myname")
 let myage=document.querySelector("#myage")
 let mymail=document.querySelector("#mymail")
 let myaddress=document.querySelector("#myaddress")
let myno=document.querySelector("#myno")
let mycpswd=document.querySelector("#mycpswd")
myname.innerHTML=m.name
myage.innerHTML=m.age
mymail.innerHTML=m.mail
myaddress.innerHTML=m.address
myno.innerHTML=m.no
mycpswd.innerHTML=m.cpswd