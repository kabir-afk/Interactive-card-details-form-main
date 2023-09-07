const cardNumber = document.querySelector(".cardNumber");
console.log(cardNumber);
const cardNumberInput = document.getElementById("cardNumberInput");
const cardholderName = document.getElementById("cardholderName");
const cardDetails1 = document.querySelector(".card-details").firstElementChild
const cardDetails2 = document.querySelector(".card-details").lastElementChild
const cvc = document.querySelector(".credit-card-back").firstElementChild;
const cvcInput = document.querySelector("#CVC");
cardholderName.addEventListener("input",()=>{
    cardDetails1.innerHTML = cardholderName.value 

})
cardNumberInput.addEventListener("input",()=>{
    cardNumber.innerText = cardNumberInput.value 

})
let monthValue;
month.addEventListener('input',()=>{
    monthValue = month.value;
    if (monthValue < 10) {
        monthValue = "0" + monthValue
    }
})
year.addEventListener('input',()=>{
    cardDetails2.innerHTML = monthValue +"/"+ year.value
})
cvcInput.addEventListener('input',()=>{
    cvc.innerHTML = cvcInput.value;
})
function addSpacesEvery4Digits(input) {
    // Remove any spaces
    const cardNumber = input.value.replace(/\s/g, '');
    
    // Add spaces every 4 digits
    const formattedCardNumber = cardNumber.replace(/(\d{4})/g, '$1 ');
    
    // Update the input field
    input.value = formattedCardNumber;
}