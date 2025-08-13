
const priceInput = document.getElementById("price");
const litersInput = document.getElementById("liters");
const calculateBtn = document.getElementById("calculate-btn");
const resultP = document.getElementById("result");


calculateBtn.addEventListener("click", calculateTotalPrice);

function calculateTotalPrice() {

  const price = parseFloat(priceInput.value);
  const liters = parseFloat(litersInput.value);

  
  const totalCost = price * liters;


  resultP.innerText = `total price: $${totalCost.toFixed(2)}`;
}
