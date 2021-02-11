const makeElement = function (tagName, className, text) {
    let element = document.createElement(tagName);
    element.classList.add(className);
    if (text) {
      element.textContent = text;
    }
    return element;
  };

  const createCard = function (product) {
    let listItem = makeElement('li', 'product');
    

    let title = makeElement('h2', 'product__title', product.text);
    listItem.appendChild(title);

    let picture = makeElement('img', 'product__image');
    picture.src = product.imgUrl;
    picture.alt = product.text;
    picture.width = 230;
    picture.height = 230;
    listItem.appendChild(picture);

    let price = makeElement('p', 'product__price', product.price);
    listItem.appendChild(price);
    listItem.value = price.textContent;

    let availabilityClass = 'product--available';
    if (!product.isAvailable) {
      availabilityClass = 'product--unavailable';
    }
    listItem.classList.add(availabilityClass);

    if (product.isSpecial) {
      listItem.classList.add('product--special');
      var specialPrice = makeElement('p', 'product__special-price', product.specialPrice);
      listItem.appendChild(specialPrice);
    }

    return listItem;
  };

  let cardList = document.querySelector('.products');

  for (let i = 0; i < cardsData.length; i++) {
    let cardItem = createCard(cardsData[i]);
    cardList.appendChild(cardItem);
  }

  console.log(cardList);