function evenodd(){
    let num1=parseInt(window.prompt("enter a number"))
    if(num % 2 == 0)
    {
        window.alert("even" + num)
    }else{
        window.alert("odd" + num)
    }
}
evenodd();