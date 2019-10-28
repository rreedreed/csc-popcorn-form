function subtotal() {
  var UnpoppedQuantity = document.getElementById("unpopped");
  var UnpoppedCost= 3 * UnpoppedQuantity;

  var CaramelQuantity = document.getElementById("caramel");
  var CaramelCost= 3.5 * CaramelQuantity;

  var CaramelNutQuantity = document.getElementById("caramel-nut");
  var CaramelNutCost= 4.5 * CaramelNutQuantity;

  var ToffeyQuantity = document.getElementById("toffey");
  var ToffeyCost = 5 * ToffeyQuantity;

  var PopcornCost = UnpoppedCost + CaramelCost + CaramelNutCost + ToffeyCost;
  document.getElementById("sub-total").value = PopcornCost;
}

// function to calculate grand total 
function grandtotal() {
	var subtotal = document.getElementById("sub-total").value;
	var grandtotal = subtotal + subtotal*.07;
	document.getElementById("grand-total").value = grandtotal;
}

// function to add credit charge if necessary
function finished() {
	var payMethod = document.getElementById("check").checked;
	var grandtotal = document.getElementById("grand-total").value;

	if (payMethod === false) {
		grandtotal = grandtotal + 2.5;
		var confirmation = confirm("Credit cards incur an extra charge of $2.50.");
		if (confirmation === false) {
			grandtotal = grandtotal - 2.5;
			document.getElementById("check").checked = true;
			return false;
			}
		document.getElementById("grand-total").value = grandtotal;
	}

}