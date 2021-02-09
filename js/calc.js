const getElements = document.querySelectorAll('.product');

for (const product of getElements) {
    product.onclick = function () {
        const price = product.querySelector('.product__price').textContent;

        return price;
    }
}

console.log();

// const printPrice = function (elementPrice) {
//     const resultWindow = document.querySelector('.calc_field');
//     resultWindow.textContent = element.onclick();
// };
