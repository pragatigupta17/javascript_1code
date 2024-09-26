function data(){
    let name = document.querySelector('#name').value;
    let age = document.querySelector('#age').value;
    let mail = document.querySelector('#mail').value;
    let address = document.querySelector('#address').value;
    let password = document.querySelector('#password').value;
    let cpswd = document.querySelector('#cpswd').value;
    console.log(name);
    console.log(age);
    console.log(mail);
    console.log(address);
    console.log(password);
    console.log(cpswd);
    if(name === ""){
        window.alert("please enter ur name");
        return false;
    }

}