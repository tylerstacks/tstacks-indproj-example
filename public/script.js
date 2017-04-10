function calcTotal(){
  var itemSubtotal = 0; /* defines the variable to a beginning total of 0 */
  var items = document.getElementsByTagName("input"); /* defines the variable to any elements in the html with the tag "input" */
  for (var i=0; i<4; i++) { //counts how many are present, starting at 0 and ending at 4
    if(items[i].checked) { //determines what items are checked 
      itemSubtotal += (items[i].value * 1); //the value of those that are checked are added to the variable itemSubtotal 
    }
  }
  document.getElementById("subtotal").innerHTML = "Subtotal : $" + itemSubtotal.toFixed(2); //writes out the subtotal

  var salesTaxRate = 0.06; /*defines the variable salesTaxRate to .07, or 7% */
  var itemTax = itemSubtotal * salesTaxRate; /*defines the variable itemTax to the outcome of the subtotal multiplied by the tax rate */
  document.getElementById("tax").innerHTML = "Tax : $" + itemTax.toFixed(2); /* will write out what the tax is in the html file with the id "tax" to two decimal places */

  var itemTotal = itemSubtotal + itemTax;
  document.getElementById("total").innerHTML = "Total : $" + itemTotal.toFixed(2); /* will write out what the total is in the html file with the id "subtotal" */
}

var products = ["Pelusa Fuzz", "Restrar Delay", "Marcha Overdrive", "Toro Boost"]; //array of the products available

function processProducts() { //funtion to process the products array
  for (var i=0; i<4; i++) { 
    var listProducts = "products" + (i + 1);
    document.getElementById(listProducts).innerHTML = products[i]; //will write out the products in the array as up to 4 times before stopping based off the html id listProducts
  }
  
}

//event listeners
var submitButton = document.getElementById("sButton"); //initializes the variable submitButton to the id sButton
window.addEventListener("load", processProducts, false); //products
submitButton.addEventListener("click", calcTotal, false); //submit button




