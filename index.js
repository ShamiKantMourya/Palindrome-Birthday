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

function changeDateIntoString(date) {
    var dateStr = {
        day: '',
        month: '',
        year: ''
    };

    if (date.day < 10) {
        dateStr.day = '0' + date.day;
    } else {
        dateStr.day = date.day.toString();
    }
    if (date.month < 10) {
        dateStr.month = '0' + date.month;
    } else {
        dateStr.month = date.month.toString();
    }
    dateStr.year = date.year.toString();

    return dateStr;
}


function getAllFormatsDate(date) {
    var dateStr = changeDateIntoString(date);
    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

function checkPalindromeForAllDateFormats(date) {
    var palindromeList = getAllFormatsDate(date);

    var palindrome = false;

    for (var index = 0; index < palindromeList.length; index++) {
        if (isPalindrome(palindromeList[index])) {
            palindrome = true;
            break;
        }
    }
    return palindrome;
}

function leapYear(year) {
    if (year % 400 === 0) {
        return true;
    }
    if (year % 100 === 0) {
        return false;
    }
    if (year % 4 === 0) {
        return true;
    }
    return false;
}

function nextDate(date) {
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31, 28, 31, 30 , 31 , 30 , 31 , 31 , 30 , 31 , 30 , 31]

    
}
var date = {
    day: 5,
    month: 9,
    year: 1999
}
console.log(checkPalindromeForAllDateFormats(date));

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
checkButton.addEventListener('click', clickHandler)