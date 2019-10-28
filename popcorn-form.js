function subtotal() {
  var UnpoppedQuantity = document.getElementById("unpopped").value;
  var UnpoppedCost= 3 * UnpoppedQuantity;
  var CaramelQuantity = document.getElementById("caramel").value;
  var CaramelCost= 3.5 * CaramelQuantity;

  var CaramelNutQuantity = document.getElementById("caramel-nut").value;
  var CaramelNutCost= 4.5 * CaramelNutQuantity;

  var ToffeyQuantity = document.getElementById("toffey").value;
  var ToffeyCost = 5 * ToffeyQuantity;

  var PopcornCost = UnpoppedCost + CaramelCost + CaramelNutCost + ToffeyCost;
  if (PopcornCost < 3){
    alert("You entered in an incorrect value");
  }
  document.getElementById("sub-total").value= PopcornCost;
}

// function to calculate grand total
// and any credit card charges
function grandtotal() {
	var subtotal = document.getElementsByName("subtotal");
	var grandtotal = subtotal + subtotal*.07
	return grandtotal;
}

function submit() {

}

function alerts() {
alert("button")
}
