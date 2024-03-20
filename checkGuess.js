function checkGuess(){

    const userGuess= Number(guessField.value);

    if(guessCount==1)
    {
        guesses.textContent="U didnt Guessess Kindly guess the number---->"

    }

    guesses.textContent=` {guesses.textContent} +{userGuess}`;


    if(userGuess==random_number)
    {
        lastResult.textContent="Congratulations  You guessed ";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent="";

        setGameOver();


    }

    else if(guessCount==10)
    {
        lastResult.textContent="U are out of move"
        lastResult.style.backgroundColor="red"
        lowOrHi.textContent=""
        setGameOver()

    }

    else{
        lastResult.textContent="Wrong"
        lastResult.style.backgroundColor="red"

        if(userGuess<random_number)
        {
            lowOrHi.textContent="Ur guesss is lower side"
            lowOrHi.style.backgroundColor="red"


        }
        else 
        {
            lowOrHi.textContent="Ur guesss is Higher side"
            lowOrHi.style.backgroundColor="red"

        }

    }

    guessCount++;
    guessField=""
    guessField.focus()
    





}