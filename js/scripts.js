//Backend Logic
let taco = 1.99;
let burrito = 2.99
let californiaTax = 1.07250;
let washingtonTax = 1.065;
let oregonTax = 1.00;
let idahoTax = 1.06;
let subtotalArray = [0];
let subtotal = 0;
// let total = subtotal  // * STATE_tax;


//Front-End Logic
$(document).ready(function () {
  // let menuArray = [0]

  // EVENTUALLY THESE WILL EACH HAVE THIER OWN IDS
  let tacoClick = $("#tacoButton").click(function (food) {
    event.preventDefault();
    // alert("Taco added!");
    $(".items").append("<li><span> X </span>" + "Taco - " + taco + "</li>");
    subtotalArray.push(taco);
    console.log("updated cart: " + subtotalArray);
  });
  let burittoClick = $("#burritoButton").click(function (food) {
    event.preventDefault();
    // alert("Burrito added!");
    $(".items").append("<li><span> X </span>" + "Burrito - " + burrito + "</li>");
    subtotalArray.push(burrito);
    console.log("updated cart: " + subtotalArray);
  });

  $("ol").on("click", "span", function (event) {
    console.log("Prefade: " + subtotalArray);
    $(this).parent().fadeOut(300, function () {
      console.log("Post fade: " + subtotalArray);
      $(this).remove();
      // subtotalArray.remove(this);
      // console.log("Post remove " + subtotalArray);
    })
    event.stopPropagation();
  });


  $("#subtotalButton").click(function (event) {
    // alert("Subtotal Requested:");
    let subtotal = subtotalArray.reduce((a, b) => a + b).toPrecision(4);
    $(".money").append("<li style='list-style-type: none';>" + "Subtotal - " + subtotal + "</li>");
    // let subtotal = subtotalArray.reduce((a, b) => a + b);
    console.log("Subtotal: " + subtotal);
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
