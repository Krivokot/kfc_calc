const getElements = document.querySelectorAll('.product');

let price;

for (const product of getElements) {
    product.onclick = function () {
        price = product.querySelector('.product__price').textContent;
        return price;
    }
}

console.log(price);

// const printPrice = function (elementPrice) {
//     const resultWindow = document.querySelector('.calc_field');
//     resultWindow.textContent = element.onclick();
// };
