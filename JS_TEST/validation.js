function data(){
   let cpswd = document.querySelector('#cpswd').value
    console.log(cpswd);
    
    if(cpswd === ""){
        window.alert("please enter ur password");
        document.querySelector('#errorcpswd').innerHTML = "please enter ur pasword";
        let selectname = document.querySelector('#cpswd');
        selectname.style.borderColor = "red"
        selectname.style.outlineColor = "red"
        return false;
     }
     else if(cpswd === ""){
        document.querySelector('#errorcpswd').innerHTML = "please enter ur cpswd";
        let selectage = document.querySelector('#cpswd');
        selectage.style.borderColor = "red"
        selectage.style.borderColor = "red"
        return false;
    }
    else if
    (!(cpswd.match(/[1234567890]/)
     && 
     cpswd.match(/[!@#$%^&*_()-]/) 
     && 
     cpswd.match(/[qwertyuiopasdfghjklzxcvbnm]/) 
     && 
     cpswd.match(/[QWERTYUIOPASDFGHJKLZXCVBNM]/)))
     {
        document.querySelector('#errorcpswd').innerHTML = "password contains atleast 1 lower, upper,special and number";
        let selectage = document.querySelector('#cpswd');
        selectage.style.borderColor = "red"
        selectage.style.borderColor = "red"
        return false;
    }
    let selectedcpswd = document.querySelector('#cpswd');
    let selecterrorcpswd = document.querySelector('#errorcpswd');
    selecterrorcpswd.innerHTML = "";
    selectedcpswd.style.borderColor ="black";
     selectedcpswd.style.outlineColor = "black";




function p(arg){
    console.log(arg)
    let selectedinput = document.querySelector(`#${arg}`);
    console.log(selectedinput);
    selectedinput.style.borderColor='black';
    selectedinput.style.outlineColor = 'black';

    document.querySelector(`#error${arg}`).innerHTML="";
}
    
    
    
}