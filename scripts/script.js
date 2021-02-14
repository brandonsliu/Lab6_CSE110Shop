// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO
  if(!localStorage.getItem('products')){
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(function(data) {
        localStorage.setItem('products', JSON.stringify(data));
      });
  }
  let productList = document.getElementById('product-list');
  const arr = JSON.parse(localStorage.getItem('products'));
  for(let i = 0; i < arr.length; i++){
    let product = document.createElement('product-item');
    product.setAttribute('src', arr[i].image);
    product.setAttribute('alt', arr[i].title);
    product.setAttribute('title', arr[i].title);
    product.setAttribute('price', arr[i].price);
    productList.append(product);
  }
});