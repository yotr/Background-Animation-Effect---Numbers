let randomNumbers = document.querySelector('.bg-numbers');

let numString = randomNumbers.textContent;

let splitNum = numString.split('');

randomNumbers.textContent = "";

for (let i = 0; i < splitNum.length; i++) {
    randomNumbers.innerHTML += '<span>'+ splitNum[i] + '</span>';
}
