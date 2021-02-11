const getElements = document.querySelectorAll('.product');
const outputField = document.querySelector('.calc_field');
const outputResult = document.querySelector('.result_field');
const resultButton = document.querySelector('.result_button');
const resetButton = document.querySelector('.reset_button');
const cancelButton = document.querySelector('.cancel_button');
const deliveryButton = document.querySelector('.delivery_button');




for (const product of getElements) {
    product.addEventListener ('click', function () {

        outputField.textContent += '+' + product.querySelector('.product__price').textContent;
        return;
    });
}

let result = function () {
    let res = outputField.textContent;
    outputResult.textContent = eval(res);
    return;
};

resultButton.addEventListener ('click', function () {
    result();
});

resetButton.addEventListener ('click', function () {
    outputField.textContent = '';
    outputResult.textContent = '';
});

cancelButton.addEventListener ('click', function () {
    outputField.textContent = outputField.textContent.substring(0, outputField.textContent.length - 1);
});

// const printPrice = function (elementPrice) {
//     const resultWindow = document.querySelector('.calc_field');
//     resultWindow.textContent = element.onclick();
// };
