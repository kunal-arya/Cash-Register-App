const billAmount = document.querySelector("#bill-amount")
const cashGiven = document.querySelector("#cash-given")
const checkButton = document.querySelector("#check-button")
const errorMessage = document.querySelector("#error-message")


checkButton.addEventListener("click" , onClickHandler)

function onClickHandler(){
    console.log("clicked")
}