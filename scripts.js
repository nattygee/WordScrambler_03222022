var scrambleBtn = document.getElementById('shuffleBtn');
var textArea = document.getElementById('mainTextInput');
const inputWords = [];
const words = [];

//scrambleBtn.addEventListener('click', scrambleWords);
scrambleBtn.addEventListener('click', tryWords);

/* function scrambleWords(array) {
    inputWords.length = 0;    
    inputWords.push(textArea.value.split(/\s+/));
    for (var i = inputWords.length; i >= 0; i--) {
        let randomIndex = Math.floor(Math.random() * i);
        let currentIndex = inputWords[i];
        currentIndex = randomIndex;
        randomIndex = currentIndex;
    } return array;
}; */

function tryWords() {
    // separating functions of collecting, splitting, and then adding words to empty array
    var waitingWords = textArea.value;
    var splitWords = waitingWords.split(" ");
    
    // clearing words array
    words.length = 0;

    // adding individual words to array
    for (var i = 0; i < splitWords.length; i++) {
        words.push(splitWords[i]);
    }

    // swapping around indexes in the array
    for (var y = 0; y < words.length; y++) {
        let currentIndex = words[y];
        let randomIndex = Math.floor(Math.random() * y);
        words[y] = words[randomIndex];
        words[randomIndex] = currentIndex;
    } console.log(words);

    // place elements back together in a string
    var shuffledWords = words.join(" ");

    // place new shuffled string back into the text area
    textArea.value = shuffledWords;
}