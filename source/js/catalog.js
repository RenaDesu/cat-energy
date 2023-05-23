const PRODUCT_LIST_DATA = [{
    imgUrl: 'img/rice-mobile-min.png',
    imgUrl2x: 'img/rice-mobile-min@2x.png',
    imgUrlTab: 'img/rice-tablet-min.png',
    imgUrlTab2x: 'img/rice-tablet-min@2x.png',
    title: 'Cat Energy slim 500 г',
    weight: '500 г',
    flavor: 'Рис+',
    price: '500 Р.'
  },
  {
    imgUrl: 'img/chicken-mobile-min.png',
    imgUrl2x: 'img/chicken-mobile-min@2x.png',
    imgUrlTab: 'img/chicken-tablet-min.png',
    imgUrlTab2x: 'img/chicken-tablet-min@2x.png',
    title: 'Cat Energy slim 500 г',
    weight: '500 г',
    flavor: 'Индейка',
    price: '500 Р.'
  },
]

const productList = document.querySelector('.catalog__list');
const productListItemTemplate = document.querySelector('#product-list-template').content.querySelector('.product-list__item');
const productListFragment = document.createDocumentFragment();
const showAllButton = productList.querySelector('.product-list__button-all');
const itemMore = productList.querySelector('#item-more');

// Создает карточки товара, данные для карточек пока берутся из PRODUCT_LIST_DATA
const createProductListItem = () => {
  PRODUCT_LIST_DATA.forEach((product) => {
    const productListElement = productListItemTemplate.cloneNode(true);
    if (window.matchMedia('(min-width: 768px)').matches) {
      if (window.matchMedia('(min-resolution: 2dppx)').matches) {
        productListElement.querySelector('.product-list__product-image').src = product.imgUrlTab2x;
    } else {
      productListElement.querySelector('.product-list__product-image').src = product.imgUrlTab;
    }

    } else {
      if (window.matchMedia('(min-resolution: 2dppx)').matches) {
        productListElement.querySelector('.product-list__product-image').src = product.imgUrl2x;
      } else {
        productListElement.querySelector('.product-list__product-image').src = product.imgUrl;
      }
    }
    productListElement.querySelector('.product-list__title').textContent = product.title;
    productListElement.querySelector('#weight-value').textContent = product.weight;
    productListElement.querySelector('#flavor-value').textContent = product.flavor;
    productListElement.querySelector('#price-value').textContent = product.price;
    productListFragment.appendChild(productListElement);
  });

  productList.appendChild(productListFragment);
}

showAllButton.addEventListener('click', () => {
  createProductListItem();
  itemMore.style.display = 'none';
});
