const numInput = document.querySelector("input[type='number']");
const selectBox = document.querySelector(".form-select");
const form = document.querySelector("form");
const resultBox = document.getElementById("result");

async function getCurrency(url) {
  let promise = await fetch(url);
  let response = await promise.json();
  return response;
}

form.addEventListener("submit", change);

async function change(e) {
  e.preventDefault();

  let response = await getCurrency(
    "https://api.exchangerate.host/latest?base=AZN"
  );

  if (selectBox.value in response.rates) {
      resultBox.innerText=numInput.value*response.rates[selectBox.value];
  }
  
}
