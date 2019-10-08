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
    $(".items").append("<li class='taco'><span> X </span>" + "Taco - " + taco + "</li>");
    subtotalArray.push(taco);
    console.log("updated cart: " + subtotalArray);
  });
  let burittoClick = $("#burritoButton").click(function (food) {
    event.preventDefault();
    // alert("Burrito added!");
    $(".items").append("<li class='burrito'><span> X </span>" + "Burrito - " + burrito + "</li>");
    subtotalArray.push(burrito);
    console.log("updated cart: " + subtotalArray);
  });

  $("ol").on("click", "span", function (event) {
    console.log("Prefade: " + subtotalArray);
    $(this).parent().fadeOut(300, function () {
      console.log("Post fade: " + subtotalArray);
      $(this).remove();


      // subtotalArray.forEach(function(item) {
      //   console.log(subtotalArray);
      //   if($("li").hasClass("burrito")){
      //     subtotalArray - 2.99;
      //     console.log("Subtotal - burrito: " + subtotalArray)
      //   } else if ($("li").hasClass("taco")) {
      //     subtotalArray - 1.99;
      //   }
      // }); 
      // None of this code seems to work, ideally it'd be checking to see if an element that was removed has the class of "burrito" or "taco," and if so it subtracts the hard-coded value from the array. Not entirely sure what the best option is for removing specific values from an array in a list that could be seemingly unordered. I know (subtotal - 1.99) doesn't work but I'm not sure how to make the values interact
    })
    event.stopPropagation();
  });

  $("#subtotalButton").click(function (event) {
    let subtotal = subtotalArray.reduce((a, b) => a + b).toPrecision(4);
    $(".money").append("<li style='list-style-type: none';>" + "Subtotal - " + subtotal + "</li>");
    console.log("Subtotal: " + subtotal);
  });

  // CHRIS, YES, IT MAY APPEAR like EACH OF THESE CLICK LISTENERS SHOULD BE IN-SET WITHIN EACHOTHER FOR THE SUBTOTAL FUNCTION TO WORK???
});