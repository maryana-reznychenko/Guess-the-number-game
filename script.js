const message1 = document.getElementById('message1');
const message2 = document.getElementById('message2');
const message3 = document.getElementById('message3');
let message2Value = 0;
let youWrote = 0;


let randomNumber = Math.ceil(Math.random() * 100) + 1;
enterButton.addEventListener('click', checkNumber);


function checkNumber() {
    var input = document.getElementById('userInput').value;
    message2Value++
    message2.innerText += `${' ' + message2Value + ', '}`
    message3.innerText += `${' ' + input + ', '}`

    if (message2Value >= 5) {
        message1.textContent = "Play again?";
        message1.style.color = "orange";
        return // here must be something that stop the game and not allow to run next if statement. Auto Reload?
    }



    if (input == randomNumber) {
        message1.textContent = "You winn! " + "it is " + randomNumber;
        message1.style.color = "green";


    }

    else if (input > randomNumber && input <= 100) {
        message1.textContent = "Your number is to high";
        message1.style.color = "yellow";


    }
    else if (input < randomNumber && input >= 1) {
        message1.textContent = "Your number is to low";
        message1.style.color = "yellow";

    }
    else if (input < 1 || input > 100) {
        message1.textContent = "Even number has to be between 1 and 100";
        message1.style.color = "red";
    }
    else if (isNaN(input)) {
        message1.textContent = "It seems to be not a number:(";
        message1.style.color = "red";
    }
    else {

    }
}


againButton.addEventListener('click', function () {
    location.reload();
})

