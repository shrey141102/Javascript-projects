function isPalindrome(str) {
    str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

function checkPalindrome() {
    const inputString = document.getElementById("inputString").value;
    const resultElement = document.getElementById("result");

    if (isPalindrome(inputString)) {
        resultElement.textContent = `${inputString} is a palindrome.`;
    } else {
        resultElement.textContent = `${inputString} is not a palindrome.`;
    }
}
