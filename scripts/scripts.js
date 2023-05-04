"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const getIceCreamBtn = document.querySelector("#getIceCream");
  const toppingsContainer = document.querySelector("#toppings-container");
  const toppingsCheckboxes = toppingsContainer.querySelectorAll(".topping-checkbox");
  const coneSizeCheckbox = document.querySelector("#coneSize");
  const scoopNumInput = document.querySelector("#scoopNum");
  const basePriceEl = document.querySelector("#basePrice");
  const toppingsPriceEl = document.querySelector("#toppingPrice");
  const salesTaxEl = document.querySelector("#salesTax");
  const totalDueEl = document.querySelector("#totalDue");

  function updatePrices() {
    const numScoops = parseInt(scoopNumInput.value);
    const pricePerScoop = 1.25;
    const basePrice = numScoops * pricePerScoop;

    let toppingsPrice = 0;
    toppingsCheckboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        toppingsPrice += parseFloat(checkbox.dataset.price);
      }
    });

    const salesTaxRate = 0.10;
    const salesTax = basePrice * salesTaxRate;
    const totalPrice = basePrice + toppingsPrice + salesTax;

    basePriceEl.textContent = `Base price: $${basePrice.toFixed(2)}`;
    toppingsPriceEl.textContent = `Toppings price: $${toppingsPrice.toFixed(2)}`;
    salesTaxEl.textContent = `Sales tax (10%): $${salesTax.toFixed(2)}`;
    totalDueEl.textContent = `Total due: $${totalPrice.toFixed(2)}`;
  }

  function onGetIceCreamBtnClick() {
    updatePrices();
  }

  function onHideOrShowToppingsDiv() {
    if (coneSizeCheckbox.checked) {
      toppingsContainer.classList.add("hidden");
    } else {
      toppingsContainer.classList.remove("hidden");
    }
    updatePrices();
  }

  getIceCreamBtn.addEventListener("click", onGetIceCreamBtnClick);
  coneSizeCheckbox.addEventListener("change", onHideOrShowToppingsDiv);
});
