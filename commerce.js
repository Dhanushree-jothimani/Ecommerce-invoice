let pname = document.getElementById("pname")
let pqty = document.getElementById("pqty")
let price= document.getElementById("prate");
let tbody = document.getElementById("tbody");
let pcat = document.getElementById("category");
let img = document.getElementById("img");
let tamount = document.getElementById("tamount");
let invoice = document.getElementById("invoice");

price.addEventListener('keyup',()=>{
    tamount.value=price.value*pqty.value
})

let print = () => {
    let r = new FileReader();
    r.readAsDataURL(img.files[0]);
    r.onloadend = function () {
        document.getElementById(`img1`).src = r.result;
    };

    tbody.innerHTML = `<tr>
    <td>1</td>
    <td>${pcat.value}</td>
    <td>${pname.value}</td>
    <td><img id="img1" src ="" height="50px" width="50px"/></td>
    <td>${pqty.value}</td>
    <td>${price.value}</td>
    <td>${tamount.value}</td>
    </tr>`;

    pname.value="";
    pqty.value="1";
    price.value="1";
    tamount.value='1'
    img.value="";


}
invoice.addEventListener('click',print)


