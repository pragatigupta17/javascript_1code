function data(){
    let name = document.querySelector('#name').value;
    let age = document.querySelector('#age').value;
    let mail = document.querySelector('#mail').value;
    let address = document.querySelector('#address').value;
    let no = document.querySelector('#no').value;
    let cpswd = document.querySelector('#cpswd').value;
    console.log(name);
    console.log(age);
    console.log(mail);
    console.log(address);
    console.log(no);
    console.log(cpswd);
    if(name === ""){
       // window.alert("please enter ur name");
       document.querySelector('#errorname').innerHTML = "please enter ur name";
       let selectname = document.querySelector('#name');
       selectname.style.borderColor = "red"
       selectname.style.outlineColor = "red"
       return false;
    }
    if(age === ""){
        document.querySelector('#errorage').innerHTML = "please enter ur age";
        let selectage = document.querySelector('#age');
        selectage.style.borderColor = "red"
        selectage.style.borderColor = "red"
        return false;
    }

    if(mail === ""){
        document.querySelector('#errormail').innerHTML = "please enter ur mail";
        let selectage = document.querySelector('#mail');
        selectage.style.borderColor = "red"
        selectage.style.borderColor = "red"
        return false;
    }

    if(address === ""){
        document.querySelector('#erroraddress').innerHTML = "please enter ur address";
        let selectage = document.querySelector('#address');
        selectage.style.borderColor = "red"
        selectage.style.borderColor = "red"
        return false;
    }

    if(no === ""){
        document.querySelector('#errorno').innerHTML = "please enter ur no";
        let selectage = document.querySelector('#no');
        selectage.style.borderColor = "red"
        selectage.style.borderColor = "red"
        return false;
    }

    if(cpswd === ""){
        document.querySelector('#errorcpswd').innerHTML = "please enter ur cpswd";
        let selectage = document.querySelector('#cpswd');
        selectage.style.borderColor = "red"
        selectage.style.borderColor = "red"
        return false;
    }
}
