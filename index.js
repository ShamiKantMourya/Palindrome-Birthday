const inputArea = document.querySelector("#input");
const checkButton = document.querySelector("#btn");
const outputArea = document.querySelector("#output");


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
}
checkButton.addEventListener('click',clickHandler)