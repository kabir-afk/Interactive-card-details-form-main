const cardNumber = document.querySelector(".cardNumber");
const cardNumberInput = document.getElementById("cardNumberInput");
const cardholderName = document.getElementById("cardholderName");
const cardDetails1 = document.querySelector(".card-details").firstElementChild;
const cardDetails2 = document.querySelector(".card-details").lastElementChild;
const cvc = document.querySelector(".credit-card-back").firstElementChild;
const cvcInput = document.querySelector("#CVC");
const errorMsg = document.querySelectorAll(".error-msg");
// const lightGrayishViolet = "hsl(270, 3%, 87%)";
cardholderName.addEventListener("input", () => {
  if (cardholderName.value.match(/\d/g)) {
    errorMsg[0].style.display = "block";
    cardholderName.style.borderColor = "red";
  } else {
    cardholderName.style.borderColor = "transparent";
    errorMsg[0].style.display = "none";
    cardDetails1.innerHTML = cardholderName.value;
  }
});
cardNumberInput.addEventListener("input", () => {
  if (/[^\d\s]/.test(cardNumberInput.value)) {
    errorMsg[1].style.display = "block";
    cardNumberInput.style.borderColor = "red";
  } else {
    errorMsg[1].style.display = "none";
    cardNumberInput.style.borderColor = "transparent";
    cardNumber.innerText = cardNumberInput.value;
  }
});
let monthValue;
month.addEventListener("input", () => {
  if (month.value == "") {
    errorMsg[2].style.display = "block";
    month.style.borderColor = "red";
  } else {
    errorMsg[2].style.display = "none";
    month.style.borderColor = "transparent";
  }
  monthValue = month.value;
  if (monthValue < 10) {
    monthValue = "0" + monthValue;
  }
});
year.addEventListener("input", () => {
    if (year.value == "") {
        errorMsg[2].style.display = "block";
        year.style.borderColor = "red";
      } else {
        errorMsg[2].style.display = "none";
        year.style.borderColor = "transparent";
        cardDetails2.innerHTML = monthValue + "/" + year.value;
      }
});
cvcInput.addEventListener("input", () => {
    if (cvcInput.value == "") {
        errorMsg[3].style.display = "block";
        cvcInput.style.borderColor = "red";
      } else {
        errorMsg[3].style.display = "none";
        cvcInput.style.borderColor = "transparent";
        cvc.innerHTML = cvcInput.value;
      }
});
function addSpacesEvery4Digits(input) {
  // Remove any spaces
  const cardNumber = input.value.replace(/\s/g, "");

  // Add spaces every 4 digits
  const formattedCardNumber = cardNumber.replace(/(\d{4})/g, "$1 ");

  // Update the input field
  input.value = formattedCardNumber;
}
