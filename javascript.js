const billAmount = document.querySelector("#bill-amount")
const nextButton = document.querySelector("#next-btn")
const cashGiven = document.querySelector("#cash-given")
const checkButton = document.querySelector("#check-btn")
const cashGivenDiv = document.querySelector(".cash-given-div")
const tableDiv = document.querySelector (".table-div")
const errorMsg = document.querySelector (".error-message")
const notesChange = document.querySelectorAll (".notes-change")


cashGivenDiv.style.display = "none";
tableDiv.style.display = "none";

const numberOfNotes = [ 2000 , 500 , 100 , 20 , 10 , 5 , 1 ]

nextButton.addEventListener("click" , nextbtnClickHandler)
checkButton.addEventListener("click" , checkBtnClickHandler )



function nextbtnClickHandler(){
    
var totalCashGiven = Number(cashGiven.value);
var totalBillAmount = Number(billAmount.value);

   if (totalBillAmount > 0)  {
       if (Number.isInteger(totalBillAmount)) {
        console.log("read")
        cashGivenDiv.style.display = "block";
        nextButton.style.display = "none";
        errorMsg.style.display = "none"; 
    
    } else {

        showError ("Please Enter an Integer")}

           } else {
    showError("Please write a Positive Number")
 }
}

function checkBtnClickHandler(){
    
var totalCashGiven = Number(cashGiven.value);
var totalBillAmount = Number(billAmount.value);
   
    if ( totalCashGiven > 0 ) {
        if ( Number.isInteger(totalCashGiven)) {

            if ( totalCashGiven >= totalBillAmount) {
errorMsg.style.display = "none";
tableDiv.style.display = "block";
calculateChange ( totalCashGiven , totalBillAmount);
            } else {
                
                showError ("Do you want to wash plates???")
            }

        } else {
            showError ("Invalid Input!! Write an Integer")
        }
        
    } else  {
        showError ("Invalid Input!!! Can't be a Negative Number")
    }
}


function calculateChange( cash, bill ) {
 var amountToBeReturned = cash - bill;

 if (amountToBeReturned > 0) {
 for ( var i = 0 ; i < numberOfNotes.length ; i++) {
 var giveChange = Math.trunc(amountToBeReturned / numberOfNotes[i]);

 amountToBeReturned = amountToBeReturned % numberOfNotes[i];

notesChange[i].innerText = giveChange; 
console.log(giveChange)
 } } else {
     showError("No Change")
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