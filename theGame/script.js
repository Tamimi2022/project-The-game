//Project Guess the number game
let theNumber = null;
let user;
let guess;
let numberOfguess = 5;
let min = 0;
let max = 25;
while (user === undefined || user === null || user.length === 0) {
    user = prompt("Welcome! What is your name?");
}
alert("Hey " + user + "!!");
let selectSmallestNumber = parseInt(
    prompt("Enter a number between 0 and 25 to start guessing...")
);
if (!isNaN(selectSmallestNumber) && selectSmallestNumber >= 0) {
    min = selectSmallestNumber;
}
let selectlargestNumber = parseInt(
    prompt(
        "To which number can you guess? (25, largest than " + min + ")"
    )
);
if (!isNaN(selectlargestNumber)) {
    max = selectlargestNumber;
}
while (max <= min) {
    let selectlargestNumber = parseInt(
        prompt("which number can you guess? (largest than " + min + ")")
    );
    if (!isNaN(selectlargestNumber)) {
        max = selectlargestNumber;
    }
}
alert(
    "You only have a maximum 5 tries to guess the number. between " + min + " and " + max + ". Good luck!"
);
theNumber = Math.floor(Math.random() * (max - min)) + min;
console.log("The number is: " + theNumber);
while (guess !== theNumber) {
    if (numberOfguess < 1) {
        alert("Unfortunately, that is not correct! try again " + min + " and " + max + "."
        );
        numberOfguess = 5;
        theNumber = Math.floor(Math.random() * (max - min)) + min;
    }
    guess = parseInt(prompt("for a number in.."));   

while (isNaN(guess)) {
    guess = parseInt(
        prompt("your entry was not a number. For numbers only in! Try again")
    );
}

alert("Your number guess is: " + guess);
if (guess > numberOfguess) {
    numberOfguess--;
    if (numberOfguess < 1) {
        alert("This is your last chance.");
    }else {
        alert("Unfortunately, your guess was too high. you still have: " + numberOfguess + " choices about. Try again:");
    }
}else if (guess < numberOfguess) {
    numberOfguess--;
    if (numberOfguess < 1) {
        alert("This is your last chance.");
    }else {
        alert("Unfortunately, your guess was too low. you still have: " + numberOfguess + " choices about. Try again:");
    }
}else {
    alert("Congratulations, you have won the game!: " + guess);
    alert("Thanks for joining the game " + ", Bye [user], see you!");
}
}