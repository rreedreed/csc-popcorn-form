function Subtotal{
  var UnpoppedQuantity = document.getElementById("unpopped");
  var UnpoppedCost= 3 * UnpoppedQuantity;
  var CaramelQuantity = document.getElementById("caramel");
  var CaramelCost= 3.5 * CaramelQuantity;
  var CaramelNutQuantity = document.getElementById("caramel-nut");
  var CaramelNutCost= 4.5 * CaramelNutQuantity;
  var ToffeyQuantity = document.getElementById("toffey");
  var ToffeyCost = 5 * ToffeyQuantity;
  var PopcornCost = UnpoppedCost + CaramelCost + CaramelNutCost+ ToffeyCost;
}
