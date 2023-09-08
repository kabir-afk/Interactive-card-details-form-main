const cardNumber = document.querySelector(".cardNumber");
const cardNumberInput = document.getElementById("cardNumberInput");
const cardholderName = document.getElementById("cardholderName");
const cardDetails1 = document.querySelector(".card-details").firstElementChild;
const cardDetails2_I =
  document.querySelector(".card-details").lastElementChild.firstElementChild;
const cardDetails2_II =
  document.querySelector(".card-details").lastElementChild.lastElementChild;
const cvc = document.querySelector(".credit-card-back").firstElementChild;
const cvcInput = document.querySelector("#CVC");
const errorMsg = document.querySelectorAll(".error-msg");
function addSpacesEvery4Digits(input) {
  // Remove any spaces
  const cardNumber = input.value.replace(/\s/g, "");

  // Add spaces every 4 digits
  const formattedCardNumber = cardNumber.replace(/(\d{4})/g, "$1 ");

  // Update the input field
  input.value = formattedCardNumber;
}
month.addEventListener('input', () => {
  let monthValue = month.value;

  // Remove leading zeros (if any)
  monthValue = monthValue.replace(/^0+/, '');

  if (monthValue < 10) {
    monthValue = "0" + monthValue;
  }

  // Update the input field value
  month.value = monthValue;
});

function addErrorMessages(
  errorMessage,
  inputElement,
  outputElement,
  isValidFn
) {
  inputElement.addEventListener("input", () => {    
    const isValid = isValidFn(inputElement.value);

    if (!isValid) {
      errorMessage.style.display = "block";
      inputElement.style.borderColor = "red";
    } else {
      errorMessage.style.display = "none";
      inputElement.style.borderColor = "transparent";
      outputElement.innerText = inputElement.value;
    }
  });
}

addErrorMessages(
  errorMsg[0],
  cardholderName,
  cardDetails1,
  (value) => !value.match(/\d/g)
);
addErrorMessages(
  errorMsg[1],
  cardNumberInput,
  cardNumber,
  (value) => !/[^\d\s]/.test(value)
);
addErrorMessages(errorMsg[2], month, cardDetails2_I, (value) => value !== "");
addErrorMessages(errorMsg[2], year, cardDetails2_II, (value) => value !== "");
addErrorMessages(errorMsg[3], cvcInput, cvc, (value) => value !== "");
