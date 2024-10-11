
function dropdown() {
  document.querySelector("#submenu").classList.toggle("hidden");
  document.querySelector("#arrow").classList.toggle("rotate-0");
}
dropdown();

function openSidebar() {
  document.querySelector(".sidebar").classList.toggle("hidden");
}

function toggleCart(){
  var cart = document.getElementById("cart")
  cart.classList.toggle('hidden')
}
