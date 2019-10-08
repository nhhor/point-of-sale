//Backend Logic

let taco = 1.99;
let burrito =2.99;

let californiaTax = 1.07250;
let washingtonTax = 1.065;
let oregonTax = 1.00;
let idahoTax = 1.06;

let subtotalArray = [0];
let subtotal = 0


// let total = subtotal  // * STATE_tax;

//Front-End Logic

$(document).ready(function () {

  // let menuArray = [0]

  // EVENTUALLY THESE WILL EACH HAVE THIER OWN IDS
  $("#tacoButton").click(function (event) {
    event.preventDefault();
    // alert("Taco added!");
    $(".items").append("<li>" + "Taco - " + taco + "</li>");
    subtotalArray.push(taco);

    });

    $("#burritoButton").click(function (event) {
      event.preventDefault();
      // alert("Burrito added!");
      $(".items").append("<li>" + "Burrito - " + burrito + "</li>");
      subtotalArray.push(burrito);
    });



      $("#subtotalButton").click(function (event) {
        // alert("Subtotal Requested:");
        let subtotal = subtotalArray.reduce((a, b) => a + b);
        $(".money").append("<li>" + "Subtotal - " + subtotal + "</li>");
        console.log(subtotalArray);
        // let subtotal = subtotalArray.reduce((a, b) => a + b);
        console.log(subtotal);
      });




      // CHRIS, YES, IT MAY APPEAR like EACH OF THESE CLICK LISTENERS SHOULD BE IN-SET WITHIN EACHOTHER FOR THE SUBTOTAL FUNCTION TO WORK???



});

// CHRIS' SKETCHPAD:
//
// https://www.sitepoint.com/jquery-loop-select-options/
//
// subtotalFunction(10);
// event.click(function () {
//   return "x"
// });
//
// let userInput = parseInt($("input#").val());
// let result = subtotal(userInput);
//
// $(".beepBoopResult").add();
// $(".beepBoopResult").append("<li style='list-style-type: none';>" + numArray + "</li>");
