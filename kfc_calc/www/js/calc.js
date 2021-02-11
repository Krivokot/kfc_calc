const getElements = document.querySelectorAll('.product');
const outputField = document.querySelector('.calc_field');
const outputResult = document.querySelector('.result_field');
const resetButton = document.querySelector('.reset_button');
const cancelButton = document.querySelector('.cancel_button');
const deliveryButton = document.querySelector('.delivery_button');
const deliveryOne = document.querySelector('.delivery_first');
const deliveryTwo = document.querySelector('.delivery_second');
const deliveryThree = document.querySelector('.delivery_third');
const deliveryFour = document.querySelector('.delivery_four');
const deliveryPopup = document.querySelector('.popup');


let nums = [];


for (const product of getElements) {
    product.addEventListener ('click', function () {

        let price = product.querySelector('.product__price').textContent;
        nums.push(price);
        outputField.textContent += '+' + price;

        let res = outputField.textContent;
        outputResult.textContent = eval(res);
        return;
    });
}

cancelButton.addEventListener ('click', function () {
    nums.pop();
    outputField.textContent = '';
    for (const num of nums) {
        outputField.textContent += '+' + num;
        outputResult.textContent = eval(outputField.textContent);
        
    }
});

resetButton.addEventListener ('click', function () {
    outputField.textContent = '';
    outputResult.textContent = '';
});

deliveryButton.addEventListener ('click', function () {
    deliveryPopup.classList.toggle('popup_disabled');
});

deliveryOne.addEventListener ('click', function () {
    nums.push(100);
    outputField.textContent += '+' + 100;
    outputResult.textContent = eval(outputField.textContent);
});

deliveryTwo.addEventListener ('click', function () {
    nums.push(150);
    outputField.textContent += '+' + 150;
    outputResult.textContent = eval(outputField.textContent);
});

deliveryThree.addEventListener ('click', function () {
    nums.push(250);
    outputField.textContent += '+' + 250;
    outputResult.textContent = eval(outputField.textContent);
});

deliveryFour.addEventListener ('click', function () {
    nums.push(50);
    outputField.textContent += '+' + 50;
    outputResult.textContent = eval(outputField.textContent);
});