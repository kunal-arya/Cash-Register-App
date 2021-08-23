const billAmount = document.querySelector("#bill-amount")
const nextButton = document.querySelector("#next-btn")
const cashGiven = document.querySelector("#cash-given")
const checkButton = document.querySelector("#check-btn")
const cashGivenDiv = document.querySelector(".cash-given-div")
const tableDiv = document.querySelector (".table-div")
const errorMsg = document.querySelector (".error-message")


cashGivenDiv.style.display = "none";
tableDiv.style.display = "none";


nextButton.addEventListener("click" , nextbtnClickHandler)


function nextbtnClickHandler(){
   if (billAmount.value > 0){
   cashGivenDiv.style.display = "block";
   nextButton.style.display = "none";
   errorMsg.style.display = "none";
   if (!)
 } else {
    showError("Please write a valid Input")
 }
}

function hideError() {
    errorMsg.style.display = "none";
}

function showError(text) {
    errorMsg.style.display = "block";
    errorMsg.innerText = text;
    tableDiv.style.display = "none";
    errorMsg.style.color = "red";
}