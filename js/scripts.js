//Backend Logic
let californiaTax = 1.07250;
let washingtonTax = 1.065;
let oregonTax = 1.00;
let idahoTax = 1.06;
let menuArray = [1,2,3];
let subtotal = menuArray.reduce((a, b) => a + b)
console.log(subtotal);
// let total = subtotal  // * STATE_tax;

//Front-End Logic
$(document).ready(function () {
    $("form#menu").submit(function (event) {

        event.preventDefault();
        // subtotalFunction(10);
        // event.click(function () {
        //   return "x"
        // });
        // let userInput = parseInt($("input#").val());
        // let result = subtotal(userInput);

        let foodOrder = []



        // $(".beepBoopResult").add();
        // $(".beepBoopResult").append("<li>" + "You entered: " +
        //     userInput + "</li>");
        // $(".beepBoopResult").append("<li style='list-style-type: none';>" + numArray + "</li>");

    });
});
