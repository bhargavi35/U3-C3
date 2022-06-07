async function getItem() {
  let url = "https://masai-vouchers-api.herokuapp.com/api/vouchers";

  let res = await fetch(url);

  let data = await res.json();

  append(data[0].vouchers;
  console.log(data);
}
getItem();

function append(data) {
  data.map(function (el, i) {
    let box = document.createElement("div");
    box.setAttribute("id", "box");

    let name = document.createElement("h3");
    name.setAttribute("class", "voucher");
    name.textContent = el.name;

    let img = document.createElement("img");
    img.setAttribute("class", "image");
    img.src = el.image;

    let price = document.createElement("p");
    price.setAttribute("class", "price");
    price.textContent = el.price;

    let btn = document.createElement("button");
    btn.setAttribute("class", "buy_voucher");
    btn.textContent = "buy";
    btn.addEventListener("click", function () {
      add(el, i);
    });
    box.append(name, img, price, btn);
    document.querySelector("#voucher_list").append(box);
  });

  function add(el,i){
      var data=JSON.parse(localStorage.getItem("purchase"))||[]
  }

  data.push(el)
  localStorage.setItem("purchase",JSON.stringify(data))

  let count=document.querySelector("#wallet_balance>p")
  count.innerHTML=JSON.parse(localStorage.getItem("purchase")).length
}
