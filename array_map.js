// MAP ---> arr.map(e) => e*10
// let ans = arr.map((e) => e*10)

// let arr = [89,90,12,34,56,8,544];
// let newarr = arr.map((items)=>{return items*2});
// console.log(newarr);
// let ansarr = arr.map((items){return items+10});
// console.log(ansarr);
function run (){
let arr =["https://images.pexels.com/photos/5944199/pexels-photo-5944199.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    "https://images.pexels.com/photos/10462/pexels-photo-10462.jpeg?cs=srgb&dl=flower-bloom-spring-10462.jpg&fm=jpg",
    "https://wallpapercave.com/wp/wp2657699.jpg","http://hdwpro.com/wp-content/uploads/2020/04/Free-Flower.jpeg",
    "http://www.pixelstalk.net/wp-content/uploads/2016/06/Flower-Wallpaper-High-Resolution.jpg",
    "https://cdn.wallpapersafari.com/44/39/VwbHXd.jpg"];
    let output = document.querySelector('#answer');
    output.innerHTML = arr.map((imgurl)=>`<img style = "width:200px;height:200px" src="${imgurl}" alt="not found">`).join(" ")}
     
