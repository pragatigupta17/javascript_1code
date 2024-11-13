function save(){
    let name = document.querySelector("#name").Value;
    let age = document.querySelector("#age").value;
    let mail= document.querySelector("#mail").value;
    let address = document.querySelector("#address").value;
    let no = document.querySelector("#no").value;
   let cpswd = document.querySelector("#cpswd").value;
   localStorage.setItem("name",name)
   localStorage.setItem("age",age)
   localStorage.setItem("mail",mail)
   localStorage.setItem("address",address)
   localStorage.setItem("no",no)
   localStorage.setItem("cpswd",cpswd)
   localStorage.getItem("name",name)
   localStorage.getItem("age",age)
   localStorage.getItem("mail",mail)
   localStorage.getItem("address",address)
   localStorage.getItem("no",no)
   localStorage.getItem("cpswd",cpswd)
}