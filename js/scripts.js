//Backend Logic
let caldoDeLenguaPrice = 6.99;
let caldoDeResPrice = 6.99;
let chipsAndSalsaPrice = 4;
let alPastorBurritoPrice = 7.5;
let beefEnchiladaPrice = 6.99;
let alPastorTacoPrice = 5.25;
let beefChimicangaPrice = 6.99;
let cheeseQuesadillaPrice = 4;
let fruitasConChilePrice = 3.5;

let californiaTax = 1.07250;
let washingtonTax = 1.065;
let oregonTax = 1.00;
let idahoTax = 1.06;

let subtotalArray = [0];
let taxedTotal = 0;
let taxedAmount = 0;
let subtotal = 0;

//Front-End Logic
$(document).ready(function () {
    // let menuArray = [0]

    let caldoDeLenguaClick = $("#caldoDeLengua").click(function (food) {
        event.preventDefault();
        $(".items").append("<li class='.menuItem' style='list-style-type: none';><span> <i class='fas fa-trash'></i> </span>" + "Caldo de Lengua - " + "$" + caldoDeLenguaPrice + "</li>");
        subtotalArray.push(caldoDeLenguaPrice);
        console.log("updated cart: " + subtotalArray);
    });
    let caldoDeResClick = $("#caldoDeRes").click(function (food) {
        event.preventDefault();
        $(".items").append("<li class='.menuItem' style='list-style-type: none';><span> <i class='fas fa-trash'></i> </span>" + "Caldo de Res - " + "$" + caldoDeResPrice + "</li>");
        subtotalArray.push(caldoDeResPrice);
        console.log("updated cart: " + subtotalArray);
    });
    let chipsAndSalsaClick = $("#chipsAndSalsa").click(function (food) {
        event.preventDefault();
        $(".items").append("<li class='.menuItem' style='list-style-type: none';><span> <i class='fas fa-trash'></i> </span>" + "Chips and Salsa - " + "$" + chipsAndSalsaPrice + "</li>");
        subtotalArray.push(chipsAndSalsaPrice);
        console.log("updated cart: " + subtotalArray);
    });
    let alPastorBurritoClick = $("#alPastorBurrito").click(function (food) {
        event.preventDefault();
        $(".items").append("<li class='.menuItem' style='list-style-type: none';><span> <i class='fas fa-trash'></i> </span>" + "al Pastor Burrito - " + "$" + alPastorBurritoPrice + "</li>");
        subtotalArray.push(alPastorBurritoPrice);
        console.log("updated cart: " + subtotalArray);
    });
    let beefEnchiladaClick = $("#beefEnchilada").click(function (food) {
        event.preventDefault();
        $(".items").append("<li class='.menuItem' style='list-style-type: none';><span> <i class='fas fa-trash'></i> </span>" + "Beef Enchilada - " + "$" + beefEnchiladaPrice + "</li>");
        subtotalArray.push(beefEnchiladaPrice);
        console.log("updated cart: " + subtotalArray);
    });
    let alPastorTacoClick = $("#alPastorTaco").click(function (food) {
        event.preventDefault();
        $(".items").append("<li class='.menuItem' style='list-style-type: none';><span> <i class='fas fa-trash'></i> </span>" + "al Pastor Taco - " + "$" + alPastorTacoPrice + "</li>");
        subtotalArray.push(alPastorTacoPrice);
        console.log("updated cart: " + subtotalArray);
    });
    let beefChimichangaClick = $("#beefChimichanga").click(function (food) {
        event.preventDefault();
        $(".items").append("<li class='.menuItem' style='list-style-type: none';><span> <i class='fas fa-trash'></i> </span>" + "Beef Chimichanga - " + "$" + beefChimicangaPrice + "</li>");
        subtotalArray.push(beefChimicangaPrice);
        console.log("updated cart: " + subtotalArray);
    });
    let cheeseQuesadillaClick = $("#cheeseQuesadilla").click(function (food) {
        event.preventDefault();
        $(".items").append("<li class='.menuItem' style='list-style-type: none';><span> <i class='fas fa-trash'></i> </span>" + "Cheese Quesadilla - " + "$" + cheeseQuesadillaPrice + "</li>");
        subtotalArray.push(cheeseQuesadillaPrice);
        console.log("updated cart: " + subtotalArray);
    });
    let frutasConChileClick = $("#frutasConChile").click(function (food) {
        event.preventDefault();
        $(".items").append("<li class='.menuItem' style='list-style-type: none';><span> <i class='fas fa-trash'></i> </span>" + "Frutas con Chile - " + "$" + fruitasConChilePrice + "</li>");
        subtotalArray.push(fruitasConChilePrice);
        console.log("updated cart: " + subtotalArray);
    });

    $("ol").on("click", "span", function (event) {
        console.log("Prefade: " + subtotalArray);
        $(this).parent().fadeOut(300, function () {
            console.log("Post fade: " + subtotalArray);
            $(this).remove();
            // POP BELOW ONLY REMOVES LAST ITEM OF LIST, THIS SHOULD BE CORRECTED ANOTHER DAY.
            subtotalArray.pop();

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
        });
        event.stopPropagation();
    });

    $("#payButton").click(function (event) {
        event.preventDefault();
        let subtotal = subtotalArray.reduce((a, b) => a + b).toFixed(2);
        $("#subtotal").html("<p>" + "$" + subtotal + "</p>");
        let taxedAmount = (subtotal * 0.1065).toFixed(2);
        $("#taxes").html("<p>" + "$" + taxedAmount + "</p>");
        console.log("Subtotal: " + subtotal);
        console.log("Taxes: " + taxedAmount);
        let taxedTotal = (parseFloat(subtotal) + parseFloat(taxedAmount));
        console.log("Taxed total: " + taxedTotal);
        $("#total").html("<p>" + "$" + (taxedTotal.toFixed(2)) + "</p>");
        console.log("subtotal array at pay: " + subtotalArray);
    });

    $("#resetButton").click(function (event) {
        event.preventDefault();
        // CLEAR (POSSIBLE) PREVIOUS ANSWERS IN UL:
        var list = document.getElementById("receiptList");
        while (list.hasChildNodes()) {
            list.removeChild(list.firstChild);
        };
        // RESET TOTALS:
        subtotalArray = [0]
        let subtotal = 0
        $("#subtotal").html("<p>" + "$" + subtotal.toFixed(2) + "</p>");
        let taxedAmount = 0;
        $("#taxes").html("<p>" + "$" + taxedAmount.toFixed(2) + "</p>");
        let taxedTotal = (subtotal * washingtonTax).toFixed(2);
        $("#total").html("<p>" + "$" + taxedTotal + "</p>");
        console.log("subtotal array at reset: " + subtotalArray);
    });
});
