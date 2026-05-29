let count = 0;

function addToCart() {
  count++;
  document.getElementById("cart").innerText = count;
}

function checkout() {
  alert("Order Placed Successfully!");
}