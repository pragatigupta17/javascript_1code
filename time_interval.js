// setTimeout and setInterval
// higerorder- its a function which take a another function with it self

function kuchbhi(){
    setTimeout(show,4000);

    function show(){
        let selectwebsite = document.querySelector('#website');
        selectwebsite.style.display ="block";
        let selectimg = document.querySelector('#img');
        selectimg.style.display = "none";
    }
}
// setTimeout(run,3000);
// function run(){
//     console.log("called")
// }
// setTimeout(()=>{
//     console.log("second time called");
// },5000)