let str="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi in molestias voluptatum odit nisi quas laborum explicabo corporis distinctio iusto obcaecati alias eum recusandae, ipsam cupiditate perferendis. Debitis, omnis totam!";

for(let i= 0; i<str.length;i++){
    if (!(str[i] === " ")){
        store = store+str[i];
    }
    else{
        store = store+"hello";
    }
}
console.log(store)
console.log(str.replaceAll(" ",","))
