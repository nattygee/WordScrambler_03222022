// interactive elements
var scrambleBtn = document.getElementById('shuffleBtn');
var textArea = document.getElementById('mainTextInput');
var clearBtn = document.getElementById('clearBtn');
var copyBtn = document.getElementById('copyBtn');
var copyToast = document.getElementById('copiedText');

var copyBtnImg = document.getElementById('copyBtnImg');
var clearBtnImg = document.getElementById('clearBtnImg');

// arrays
const inputWords = [];
const words = [];

// event listeners
scrambleBtn.addEventListener('click', tryWords);
clearBtn.addEventListener('click', clearTextArea);
copyBtn.addEventListener('click', copyToClipboard);


// functions
function copyToClipboard() {
    var copiedText = textArea.value
    navigator.clipboard.writeText(copiedText);
    copyToast.style.opacity = 1;
    copyToast.style.transition = "400ms";
    copyToast.style.transform = "translateY(-4px)";
    setTimeout(function() {
        copyToast.style.opacity = 0;
        copyToast.style.transition = "400ms";
        copyToast.style.transform = "translateY(4px)";
    }, 3000);
}

document.body.onkeyup = function(e) {
    if (e.key === " ") {
        revealMainCTA();
        console.log("space baR presst")
    } else {
        return null;
    };
};


function revealMainCTA() {
    var wordCount = textArea.value.split(" ").length;
    if (wordCount > 1) {
        scrambleBtn.className = "mainCTA"
        clearBtn.className = "clearBtn"
        copyBtn.className = "copyBtn"

        copyBtnImg.src = "images/scrampl_copyBtn.svg"
        clearBtnImg.src = "images/scrampl_clearBtn.svg"
        
        copyBtn.style.transition = "200ms";
        clearBtn.style.transition = "200ms";
        copyBtnImg.style.transition = "200ms";
        clearBtnImg.style.transition = "200ms";
        scrambleBtn.style.transition = "200ms";

    } else if (wordCount <= 1) {
        return null;
    }
};

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

function clearTextArea() {
    textArea.value = "";
    console.log('Text area cleared')
    scrambleBtn.className = "mainCTADisabled";
    clearBtn.className = "clearBtnDisabled";
    copyBtn.className = "copyBtnDisabled";
    
    clearBtnImg.src = "images/scrampl_clearBtn_disabled.svg" 
    copyBtnImg.src = "images/scrampl_copyBtn_disabled.svg"
}
