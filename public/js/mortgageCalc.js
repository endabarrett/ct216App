var word = prompt("Please enter your secret", "Type here");
for(var i=1;i<11;i++){
    var attempt = prompt("Guess the word", "Your guess here")
    if(attempt==word){
        alert("congrats the word was " + word + "it took you " + i +" attempts")
        break;
    }
}
