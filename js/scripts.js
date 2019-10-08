// https://www.sitepoint.com/jquery-loop-select-options/

//Backend Logic

let taco = 1.99;

let californiaTax = 1.07250;
let washingtonTax = 1.065;
let oregonTax = 1.00;
let idahoTax = 1.06;

let menuArray = [];



// let total = subtotal  // * STATE_tax;

//Front-End Logic

$(document).ready(function () {

  // let menuArray = []

  // EVENTUALLY THESE WILL TURN INTO IDS
  $(".h4").click(function (event) {
    event.preventDefault();
    alert("item added!");
    $(".items").append("<li>" + "Taco - " + taco + "</li>");
    menuArray.push(taco)

    console.log(menuArray);

    let subtotal = menuArray.reduce((a, b) => a + b)
    console.log(subtotal);

    // subtotalFunction(10);
    // event.click(function () {
    //   return "x"
    // });
    // let userInput = parseInt($("input#").val());
    // let result = subtotal(userInput);


    // $(".beepBoopResult").add();
    // $(".beepBoopResult").append("<li style='list-style-type: none';>" + numArray + "</li>");
  });
});
// });
