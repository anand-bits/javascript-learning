function setGameOver()
{
    guessField.disabled=true
    guessSubmit.disabled=true;
    ResetButton=document.createElement("button")
    ResetButton.textContent="Start a new game"
    document.body.append(ResetButton)
    ResetButton.addEventListener("click",resetGame)
}