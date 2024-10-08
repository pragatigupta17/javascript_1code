function run(){
    let a = parseInt (window.prompt("enter 1st no:"));
    let b = parseInt (window.prompt("enter 2nd no:"));
    let c = parseInt (window.prompt("enter 3rd no:"));
    console.log(a,b,c);
    let sum = a+b+c;
    let average= sum/3;
    console.log(average)
    window.alert(average);
 
 }



run();