// Script.js
let cart = [];
let products = [];
window.addEventListener('DOMContentLoaded', () => {
  // TODO
  if(localStorage.getItem('storedCart')){
    cart = JSON.parse(localStorage.getItem('storedCart'));
    document.getElementById('cart-count').textContent = cart.length;
  }
  if(!localStorage.getItem('products')){
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(function(data) {
        localStorage.setItem('products', JSON.stringify(data));
      });
  }
  let productList = document.getElementById('product-list');
  products = JSON.parse(localStorage.getItem('products'));
  for(let i = 0; i < products.length; i++){
    let product = document.createElement('product-item');
    product.setAttribute('src', products[i].image);
    product.setAttribute('alt', products[i].title);
    product.setAttribute('title', products[i].title);
    product.setAttribute('price', products[i].price);
    product.setAttribute('id', "" + (i+1))
    if(cart.find(element => element.id == (i+1))){
      product.setAttribute('contained', 'Remove from Cart');
    }
    else{
      product.setAttribute('contained', 'Add to Cart');
    }
    productList.append(product);
  }
});

function updateCart(e){
  e.preventDefault();
  let count = +(document.getElementById('cart-count').textContent);
  if(e.target.textContent == 'Add to Cart'){
    e.target.textContent = 'Remove from Cart';
    document.getElementById('cart-count').textContent = count + 1;
    add(e.target.id);
  }
  else{
    e.target.textContent = 'Add to Cart';
    document.getElementById('cart-count').textContent = count - 1;
    remove(e.target.id);
  }
}

function add(num){
  cart.push(products[num - 1]);
  localStorage.setItem('storedCart', JSON.stringify(cart));
}

function remove(num){
  cart = cart.filter(element => element.id != num);
  console.log(cart);
  localStorage.setItem('storedCart', JSON.stringify(cart));
}