// Declare variables
let word1 = "Elara";
let word2 = "Havenshire";
let word3 = "Ethal";
let word4 = "accomplice";

// Store the blank values
let blank1 = "_____";
let blank2 = "__________";
let blank3 = "_____";
let blank4 = "__________";

// Functions to replace text or replace with blank space.
// Toggle Town Name
function toggleWord1(button) {
    let spans = document.querySelectorAll(".word1"); // Finds all instances of the class

    /*
    For loop with if/then nested inside to go through each instance of the class.  
    If it is currently blanks, fills with the word.  
    Else, it fills with blanks.  
    It also Changes the text on the button to match.
    */
    spans.forEach(span => {
        if (span.textContent === blank1) {
            span.textContent = word1;
            button.textContent = "Hide Primary Character Name";
        } else {
            span.textContent = blank1;
            button.textContent = "Reveal Primary Character Name";
        }
    });
}

// Toggle Secondary Character Name
function toggleWord2(button) {
    let spans = document.querySelectorAll(".word2");

    spans.forEach(span => {
        if (span.textContent === blank2) {
            span.textContent = word2;
            button.textContent = "Hide Home Country Name";
        } else {
            span.textContent = blank2;
            button.textContent = "Reveal Home Country Name";
        }
    });
}

// Toggle Ritual Name
function toggleWord3(button) {
    let spans = document.querySelectorAll(".word3");

    spans.forEach(span => {
        if (span.textContent === blank3) {
            span.textContent = word3;
            button.textContent = "Hide Protectorate Country Name";
        } else {
            span.textContent = blank3;
            button.textContent = "Reveal Protectorate Country Name";
        }
    });
}

// Toggle Main Character Name
function toggleWord4(button) {
    let spans = document.querySelectorAll(".word4");

    spans.forEach(span => {
        if (span.textContent === blank4) {
            span.textContent = word4;
            button.textContent = "Hide Main Character's Crime";
        } else {
            span.textContent = blank4;
            button.textContent = "Reveal Main Character's Crime";
        }
    });
}