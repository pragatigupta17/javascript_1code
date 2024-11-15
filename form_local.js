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
