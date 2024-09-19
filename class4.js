//boolean
function check1(){
    let res = window.confirm("Do You really want to logout")
    console.log(res);


if (res){
    window.location.href="login.html"
}
else{
    window.alert("invalid output")
}
}
check1();
