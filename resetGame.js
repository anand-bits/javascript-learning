function resetGame()
{

    guessCount=1;

    ResetButton.parentNode.removeChild(ResetButton)

 guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "white";

  randomNumber = Math.floor(Math.random() * 100) + 1;







}