// let str = 'we are developer';
// let str1 = "we are developers";
// let str2 = `we are developers`;

// console.log(str);
// console.log(str[0]);
// console.log(str[8]);
// count = 0;

// for (let i =0; i<str.length;i++){
//     console.log(i);
//     console.log(str[i]);
//     count++;
// }
// console.log(count);


function output(){
    let str = document.querySelector('#str').Value;
    let count = 0;
    for (let i = 0; i<str.length; i++){
        if (str[i] === " "){
            count = count + 1;
        }
        
    }
document.querySelector('#answer').innerHTML = count;
return false;
}