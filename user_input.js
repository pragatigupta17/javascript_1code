function data(){
    let name = document.querySelector('#name').value;
    let age = document.querySelector('#age').value;
    console.log(name);
    console.log(age);
    if(name === ""){
        window.alert("please enter ur name");
        return false;
    }

}