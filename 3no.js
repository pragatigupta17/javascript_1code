function threenumber(){
    let num1 = parseInt(window.prompt("Enter first number"));
    let num2 = parseInt(window.prompt("Enter second number"));
    let num3 = parseInt(window.prompt("Enter third number"));
     if (num1>num2 && num1>num3){
        window.alert("number first is greater");
     }else if(num2>num1 && num2>num3){
        window.alert("number second is greater");
     }else if(num3>num1 && num3>num2){
        window.alert("number third is greater");
     }
}
threenumber();