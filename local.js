//there are 4 types of function --> 1) setItem,2)getItem,3)removeItem,4)clear
//data will not show on server if code,domain and protocal will changed or different
// if key will same then data is override
localStorage.setItem("name","Pragati")
localStorage.setItem("last_name","Gupta")
localStorage.setItem("id","pr@g@ti")
let name=localStorage.getItem("name")
console.log(name);
localStorage.removeItem("id")