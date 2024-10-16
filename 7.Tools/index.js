// Inputs to get data.
const inputFactoriel = document.querySelector("#factoriel input[type='number']");
const inputPalindrome = document.querySelector("#palindrome input[type='text']");
const inputAnagramme1 = document.querySelectorAll("#anagramme input[type='text']")[0];
const inputAnagramme2 = document.querySelectorAll("#anagramme input[type='text']")[1];
const inputDivideNumber = document.querySelectorAll("#double input[type='text']")[0];
const inputDivider1 = document.querySelectorAll("#double input[type='text']")[1];
const inputDivider2 = document.querySelectorAll("#double input[type='text']")[2];

//Inputs to send data.
const btnFactoriel = document.querySelector("#factoriel input[type='button']");
const btnPalindrome = document.querySelector("#palindrome input[type='button']");
const btnAnagramme = document.querySelector("#anagramme input[type='button']");
const btnDivide = document.querySelector("#double input[type='button']");

// Results fields
const resultFactoriel = document.querySelector("#factoriel div.result");
const resultPalindrome = document.querySelector("#palindrome div.result");
const resultAnagramme = document.querySelector("#anagramme div.result");
const resultDivide = document.querySelector("#double div.result");

document.addEventListener("DOMContentLoaded", function () {
    factoriel();
    palindrome();
    anagrammes();
    doubledivide();
});

/**
 * Method for factoriel part.
 * Ex : 5! = 120
 */
function factoriel() {

    btnFactoriel.addEventListener("click", function () { // Calculate factoriel click

        if (inputFactoriel.value !== "") { // User gives a number.
            // Initialization of variables.
            let resultat = 1;
            let factoriel = Number.parseInt(inputFactoriel.value);

            for (let index = 1; index <= factoriel; index++)
                // Going through all integer between 1 and the number given by user.
                resultat = resultat * index;

            // Result shown on screen.
            resultFactoriel.innerHTML = factoriel + "! is " + resultat;
        }
    });

    resultFactoriel.previousElementSibling.addEventListener("submit", function (event) { // Form submit
        event.preventDefault(); // Prevent the page reload.
        btnFactoriel.click(); // Click on button instead.
    });
}

/**
 * Method for palindrome part.
 * Ex : radar.
 */
function palindrome() {
    btnPalindrome.addEventListener("click", function () { // Check palindrome click

        if (inputPalindrome.value != "") { // User gives a not empty word.
            // Initialization of variables.
            let result = true;
            let word = inputPalindrome.value;

            for (let i = 0; i < word.length; i++)
                // Going through all letters of word to check if they are equals to letters from other end.
                if (word[i] !== word[word.length - i - 1]) result = false;

            // Result shown on screen
            resultPalindrome.innerHTML = inputPalindrome.value + (result ? " is " : " isn't ") + "a palindrome";
        }
    });

    resultPalindrome.previousElementSibling.addEventListener("submit", function (event) { // Form submit
        event.preventDefault(); // Prevent the page reload.
        btnPalindrome.click(); // Click on button instead.
    });
}

/**
 * Method for anagrammes
 * Ex : listen & silent, heart & earth.
 */
function anagrammes() {
    btnAnagramme.addEventListener("click", function () {

        if (inputAnagramme1.value != "" && inputAnagramme2.value != "") { // User gives two not empty words.
            // Initialization of variables.
            let word1 = inputAnagramme1.value;
            let word2 = inputAnagramme2.value;
            let index;


            for (index = 0; index < word1.length; index++) {
                // Going through all letters of words to replace the browsed letter with empty string.
                word2 = word2.replace(word1[index], "");

                // If second word is empty, leave the for loop.
                if (word2 === "") break;
            }

            // Result shown on screen.
            resultAnagramme.innerHTML = inputAnagramme1.value.charAt(0).toUpperCase() + inputAnagramme1.value.slice(1) + " & " +
                inputAnagramme2.value.charAt(0).toUpperCase() + inputAnagramme2.value.slice(1) + (index + 1 != word1.length ? " aren't " : " are ") + "anagrammes";
        }
    });

    resultAnagramme.previousElementSibling.addEventListener("submit", function (event) { // Form submit
        event.preventDefault(); // Prevent the page reload.
        btnAnagramme.click(); // Click on button instead.
    });
}

function doubledivide() {
    btnDivide.addEventListener("click", function () {

        if (inputDivideNumber.value !== "" && inputDivider1.value !== "" && inputDivider2.value !== "") {
            let number = Number.parseInt(inputDivideNumber.value);
            let divider1 = Number.parseInt(inputDivider1.value);
            let divider2 = Number.parseInt(inputDivider2.value);
            let result1 = 0;
            let result2 = 0;

            resultDivide.innerHTML = "";

            for (let index = 1; index < (number / 2); index++) {

                if ((number - (divider1 * index)) % divider2 === 0) {
                    result1 = index;
                    result2 = (number - (divider1 * index)) / divider2;

                    if (result1 != divider2) {
                        if (result1 > 0 && result2 > 0)
                            resultDivide.innerHTML += "<div>" + divider1 + " x " + result1 + " + " + divider2 + " x " + result2 + "</div>";
                    } else
                        if (result1 > 0 && result2 > 0)
                            resultDivide.innerHTML += "<div>" + result1 + " x " + "(" + divider1 + " + " + result2 + ")" + "</div>";
                }
            }
        }
    });

    resultDivide.previousElementSibling.addEventListener("submit", function (event) { // Form submit
        event.preventDefault(); // Prevent the page reload.
        btnDivide.click(); // Click on button instead.
    });
}