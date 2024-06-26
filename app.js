let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log("Onnati magul balanda epa");
let attempts = 3;

function guessNumber() {
    let inputNumber = Number(document.getElementById("inputNumber").value);
    console.log(inputNumber);
    
    if (attempts > 0) {
        if (inputNumber === randomNumber) {
            document.getElementById("feedback").textContent = "You win! The number is " + randomNumber;
        } else {
            attempts--;
            if (attempts > 0) {
                document.getElementById("feedback").textContent = "Wrong guess! Try again. Attempts left: " + attempts;
            } else {
                document.getElementById("feedback").textContent = "You lose! The number was " + randomNumber;
            }
        }
    } else {
        document.getElementById("feedback").textContent = "No more attempts left. The number was " + randomNumber;
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
    attempts = 3;
    document.getElementById("inputNumber").value = "";
    document.getElementById("feedback").textContent = "";
}
