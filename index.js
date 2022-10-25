const inputArea = document.querySelector("#input");
const checkButton = document.querySelector("#btn");
const outputArea = document.querySelector("#output");

function reverseStr(str) {
    var listOfCharacters = str.split('');
    var reverseCharList = listOfCharacters.reverse();
    var reversedChar = listOfCharacters.join('');
    return reversedChar;
}

function isPalindrome(str) {
    var reverse = reverseStr(str);
    if (str === reverse) {
        return true;
    } else {
        return false;
    }
}


function clickHandler(event) {
    var birthdayStr = inputArea.value;
if (birthdayStr !== '') {
    var dateList = birthdayStr.split('-');

    var date = {
        day: Number(dateList[2]),
        month: Number(dateList[1]),
        year: Number(dateList[0])
    };
}
console.log(date);
}
checkButton.addEventListener('click',clickHandler)