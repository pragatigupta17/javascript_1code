let arrofobj =[
    {
        "id":1,
        "imageurl":"https://images.pexels.com/photos/5944199/pexels-photo-5944199.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        "pname":"flower",
        "bname":"lotus",
        "pprice":999
    },
    {
        "id":2,
        "imageurl":"https://images.pexels.com/photos/5944199/pexels-photo-5944199.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        "pname":"flower",
        "bname":"lotus",
        "pprice":999
    },
    {
        "id":3,
        "imageurl":"https://images.pexels.com/photos/5944199/pexels-photo-5944199.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        "pname":"flower",
        "bname":"lotus",
        "pprice":999
    },
    {
        "id":4,
        "imageurl":"https://images.pexels.com/photos/5944199/pexels-photo-5944199.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        "pname":"flower",
        "bname":"lotus",
        "pprice":999
    },
    {
        "id":5,
        "imageurl":"https://images.pexels.com/photos/5944199/pexels-photo-5944199.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        "pname":"flower",
        "bname":"lotus",
        "pprice":999
    },
    {
        "id":6,
        "imageurl":"https://images.pexels.com/photos/5944199/pexels-photo-5944199.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        "pname":"flower",
        "bname":"lotus",
        "pprice":999
    },
    {
        "id":7,
        "imageurl":"https://images.pexels.com/photos/5944199/pexels-photo-5944199.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        "pname":"flower",
        "bname":"lotus",
        "pprice":999
    },
    {
        "id":8,
        "imageurl":"https://images.pexels.com/photos/5944199/pexels-photo-5944199.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        "pname":"flower",
        "bname":"lotus",
        "pprice":999
    }
];
let selectdiv = document.querySelector('#ans');
selectdiv.innerHTML = arrofobj.map((card)=>`
<div style="margin:10px; box-shadow:0px 0px 1px 2px brown" >
<img width="300px" height="150px" src="${card.imageurl}" alt="">
<div>${card.bname}</div>
<div>${card.pname}</div>
<div>${card.pprice}</div>
<button>add to cart</button>
<button>buy now</button>
</div>`).join(" ");