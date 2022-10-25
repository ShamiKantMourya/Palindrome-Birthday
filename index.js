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

function getNextDate(date) {
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if (month == 2) {
        if (leapYear(year)) {
            if (day > 29) {
                day = 1;
                month++;
            } else {
                if (day > 28) {
                    day = 1;
                    month++;
                }
            }
        } else {
            if (day > daysInMonth[month - 1]) {
                day = 1;
                month++;
            }
        }
    }
    if (month > 12) {
        month = 1;
        year++;
    }

    return {
        day: day,
        month: month,
        year: year
    };
}

function getNextPalindromeDate(date) {
    var ctr = 0;
    var nextDate = getNextDate(date);

    while (1) {
        ctr++;
        var isPalindrome = checkPalindromeForAllDateFormats(nextDate);
        if (isPalindrome) {
            break;
        }
        nextDate = getNextDate(date);
    }
    return [ctr, nextDate];
}
var date = {
    day: 13,
    month:9,
    year:2020
}
const inputArea = document.querySelector("#input");
const checkButton = document.querySelector("#btn");
const outputArea = document.querySelector("#output");

console.log(getNextPalindromeDate(date));
function clickHandler(event) {
    var birthdayStr = inputArea.value;
    if (birthdayStr !== '') {
        var dateList = birthdayStr.split('-');

        var date = {
            day: Number(dateList[2]),
            month: Number(dateList[1]),
            year: Number(dateList[0])
        };
        var isPalindrome = checkPalindromeForAllDateFormats(date);
        if (isPalindrome) {
            outputArea.innerText = "Congrats..!🥳 Your birthdate is a palindrome date."
        } else {
            var [ctr, nextDate] = getNextPalindromeDate(date);
            outputArea.innerText = `The next palindrome date is ${nextDate.day}--${nextDate.month}--${nextDate.year}, you missed it by ${ctr}`
        }
    }
}
checkButton.addEventListener('click', clickHandler);