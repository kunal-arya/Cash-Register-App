const billAmount = document.querySelector("#bill-amount")
const cashGiven = document.querySelector("#cash-given")
const checkButton = document.querySelector("#check-button")
const errorMessage = document.querySelector(".error-message")
const NoOfNotes = document.querySelectorAll(".notes-given")
const nextButton = document.querySelector("#next-button")

const availableNotes = [2000,500,100,20,10,5,1];

nextButton.addEventListener("click" , nextButtonClickHandler)
checkButton.addEventListener("click" , checkButtonClickHandler)

function nextButtonClickHandler() {

}


function checkButtonClickHandler(){
    hideMessage();
     if ( billAmount.value > 0){
           if ( billAmount.value < cashGiven.value) {
             const amountToBeReturned = cashGiven.value - billAmount.value;
              calculateChange(amountToBeReturned);
           }  else {
               showMessage("Do You want to Wash the Dishes???")
           }
               
     } else {
         showMessage("Invalid Bill Amount")
     }
}


function calculateChange(amountToBeReturned){
    for ( var i = 0 ; i < availableNotes.length ; i++){
      
        const NumberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i] );
        amountToBeReturned = amountToBeReturned % availableNotes[i];

        NoOfNotes[i].innerText = NumberOfNotes;


    }
}

function hideMessage(){
errorMessage.style.display = "none";
}


function showMessage(msg){
errorMessage.style.display = "block";
errorMessage.innerText = msg;
}