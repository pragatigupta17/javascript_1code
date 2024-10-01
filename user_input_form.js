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
     else if(age === ""){
        document.querySelector('#errorage').innerHTML = "please enter ur age";
        let selectage = document.querySelector('#age');
        selectage.style.borderColor = "red"
        selectage.style.borderColor = "red"
        return false;
    }

   else if(mail === ""){
        document.querySelector('#errormail').innerHTML = "please enter ur mail";
        let selectage = document.querySelector('#mail');
        selectage.style.borderColor = "red"
        selectage.style.borderColor = "red"
        return false;
    }

   else if(address === ""){
        document.querySelector('#erroraddress').innerHTML = "please enter ur address";
        let selectage = document.querySelector('#address');
        selectage.style.borderColor = "red"
        selectage.style.borderColor = "red"
        return false;
    }

    else if(no === ""){
        document.querySelector('#errorno').innerHTML = "please enter ur no";
        let selectage = document.querySelector('#no');
        selectage.style.borderColor = "red"
        selectage.style.borderColor = "red"
        return false;
    }

    else if(cpswd === ""){
        document.querySelector('#errorcpswd').innerHTML = "please enter ur cpswd";
        let selectage = document.querySelector('#cpswd');
        selectage.style.borderColor = "red"
        selectage.style.borderColor = "red"
        return false;
    }
    //name
    function s(){
        let selectedinput = document.querySelector('#name');
        let selecterrorname = document.querySelector('#errorname');
        selecterrorname.innerHTML = "";
        selectedinput.style.borderColor ="black";
        selectedinput.style.outlineColor = "black";
    
    //age
    
        let selectedage = document.querySelector('#age');
        let selecterrorage = document.querySelector('#errorage');
        selecterrorage.innerHTML = "";
        selectedage.style.borderColor ="black";
        selectedage.style.outlineColor = "black";
    
     //mail
    
    let selectedmail= document.querySelector('#mail');
    let selecterrormail = document.querySelector('#errormail');
    selecterrormail.innerHTML = "";
    selectedmail.style.borderColor ="black";
    selectedmail.style.outlineColor = "black"; 
    
 
 //address
    
    let selectedaddress = document.querySelector('#address');
    let selecterroraddress = document.querySelector('#erroraddress');
    selecterroraddress.innerHTML = "";
    selectedaddress.style.borderColor ="black";
    selectedaddress.style.outlineColor = "black";

 //no
 
   let selectedno= document.querySelector('#no');
   let selecterrorno = document.querySelector('#errorno');
    selecterrorno.innerHTML = "";
    selectedno.style.borderColor ="black";
    selectedno.style.outlineColor = "black";
 
 //cpswd
 
    let selectedcpswd = document.querySelector('#cpswd');
    let selecterrorcpswd = document.querySelector('#errorcpswd');
    selecterrorcpswd.innerHTML = "";
    selectedcpswd.style.borderColor ="black";
     selectedcpswd.style.outlineColor = "black";
}
}

function s(arg){
    console.log(arg)
    let selectedinput = document.querySelector(`#${arg}`);
    console.log(selectedinput);
    selectedinput.style.borderColor='black';
    selectedinput.style.outlineColor = 'black';

    document.querySelector(`#error${arg}`).innerHTML="";
}
    
