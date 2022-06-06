

document.querySelector("form").addEventListener("submit", signupfun);
let userData=JSON.parse(localStorage.getItem("user"))||[]

// function myFun() {
//   window.location.href = "voucher.html";
// }
  function signupfun() {
    event.preventDefault();
    let Obj = {
        name: document.querySelector("#name"),
        email: document.querySelector("#email"),
        address: document.querySelector("#address"),
        amount:document.querySelector("#amount"),
      
    };
    // window.location.assign("voucher.html")
    userData.push(Obj);
    localStorage.setItem("user",JSON.stringify(userData));
    
  }
// let submit = async (e) => {
//   e.preventDefault();

//   let userData = {
//     name: document.getElementById("name").value,
//     email: document.getElementById("email").value,
//     address: document.getElementById("address").value,
//   };

//   userData = JSON.stringify(userData);

//   //   let API="https://masai-vouchers-api.herokuapp.com/api/vouchers";
//   let res = await fetch(
//     "https://masai-vouchers-api.herokuapp.com/api/vouchers",
//     {
//       method: "POST",
//       body: userData,

//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   let data = await res.json();
//   console.log(data);
// //   info(data.items);
// };

// document.getElementById("submit").addEventListener("click", submit);
