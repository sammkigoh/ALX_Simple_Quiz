//the function to check the answer
function checkAnswer (event) {
//function body
//declaring the correct answer
const correctAnswer ='4'
//retrieving the user's answer

const selectedRadioButton = document.querySelector('input[name="quiz"]:checked');
const feedbackElement = document.getElementById('feedback');

if (selectedRadioButton) {
    const userAnswer = selectedRadioButton.value;
   // check if the user's answer is correct
   if (userAnswer === correctAnswer) {
    feedbackElement.textContent="Correct! Well done.";
   }  else {
    feedbackElement.textContent="That's incorrect. Try again!";
   } 
} else {
    feedbackElement.textContent= "No answer selected.";
}
}
//adding an event listener to the 'submit answer' button to call checkAnswer on click 
const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);