const productListData = [
  {
  imgUrl: 'img/fish-mobile-max.png',
  title: 'Cat Energy slim 1000 г',
  weight: '1000 г',
  flavor: 'Рис',
  price: '1000 Р.'
},
{
  imgUrl: 'img/chicken-mobile-min.png',
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


const createProductListItem = () => {
  productListData.forEach((product) => {
    const productListElement = productListItemTemplate.cloneNode(true);
    productListElement.querySelector('.product-list__product-image').src = product.imgUrl;
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
