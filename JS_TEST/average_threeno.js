// average test
function average(){
    let number1 = parseInt(window.prompt("Enter 1st no"));
    let number2 = parseInt(window.prompt("Enter 2nd no"));
    let number3 = parseInt(window.prompt("Enter 3rd no"));
    console.log(number1,number2,number3);
    let sum = number1+ number2+number3;
    let average = sum/3;
    console.log(average);
    window.alert(average);
}
average();