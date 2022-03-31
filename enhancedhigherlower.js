let valid_input = false;
let num_select, input;

while(!valid_input) {
input = window.prompt("What should the top end of our number range be?");

num_select = Number(input);

if(num_select != NaN && num_select > 0) {
valid_input = true;
}
else {
valid_input = false}
}


let num = Math.round(Math.random() * num_select) + 1;

console.log(num);


let tries = [];


function do_guess() {
    let guess = Number(document.getElementById("guess").value);

    let message = document.getElementById("message");

    if(guess == num) {
        if (tries.indexOf(guess) === -1) tries.push(guess);
        message.innerHTML = `You got it! It took you ${tries.length} tries and your guesses were ${tries}.`;
        
    }
    else if (guess < 1){
        message.innerHTML = "That number is not in range, please try again" 
    }
    else if (guess > num_select){
        message.innerHTML = "That number is not in range, please try again"
    }
    else if (guess > num) {
        message.innerHTML = "No, try a lower number.";
        if (tries.indexOf(guess) === -1) tries.push(guess);
        else if (tries.indexOf(guess) !== -1) 
        message.innerHTML = "You guessed that already. Try again.";
    }
    else if (guess < num){
        message.innerHTML = "No, try a higher number.";
        if (tries.indexOf(guess) === -1) tries.push(guess);
        else if (tries.indexOf(guess) !== -1)
        message.innerHTML = "You guessed that already. Try again.";
    }
    else {
        message.innerHTML = "That is not a number!";
    }
}