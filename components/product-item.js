// product-item.js

class ProductItem extends HTMLElement {
  // TODO
  constructor(){
    super();
    let shadow = this.attachShadow({mode: 'open'});
    shadow.innerHTML = `
      <style>
        .price {
          color: green;
          font-size: 1.8em;
          font-weight: bold;
          margin: 0;
        }
        
        .product {
          align-items: center;
          background-color: white;
          border-radius: 5px;
          display: grid;
          grid-template-areas: 
          'image'
          'title'
          'price'
          'add';
          grid-template-rows: 67% 11% 11% 11%;
          height: 450px;
          filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
          margin: 0 30px 30px 0;
          padding: 10px 20px;
          width: 200px;
        }
        
        .product > button {
          background-color: rgb(255, 208, 0);
          border: none;
          border-radius: 5px;
          color: black;
          justify-self: center;
          max-height: 35px;
          padding: 8px 20px;
          transition: 0.1s ease all;
        }
        
        .product > button:hover {
          background-color: rgb(255, 166, 0);
          cursor: pointer;
          transition: 0.1s ease all;
        }
        
        .product > img {
          align-self: center;
          justify-self: center;
          width: 100%;
        }
        
        .title {
          font-size: 1.1em;
          margin: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .title:hover {
          font-size: 1.1em;
          margin: 0;
          white-space: wrap;
          overflow: auto;
          text-overflow: unset;
        }
      </style>
    `;
    const list = document.createElement('li');
    list.setAttribute('class', 'product');
    const image = list.appendChild(document.createElement('img'));
    image.setAttribute('width', 200);
    const t = list.appendChild(document.createElement('p'));
    t.setAttribute('class', 'title');
    t.innerText = "hello";
    const p = list.appendChild(document.createElement('p'));
    p.setAttribute('class', 'price');
    p.innerText = "price";
    const b = list.appendChild(document.createElement('button'));
    b.setAttribute('onclick', 'updateCart(event)');
    b.setAttribute('id', '');
    b.innerText = "Add to Cart";
    this.shadowRoot.append(list);
  }
  connectedCallback(){
    updateStyle(this);    
  }
}

customElements.define('product-item', ProductItem);

function updateStyle(elem){
  const shadow = elem.shadowRoot;
  shadow.querySelector('img').src = `${elem.getAttribute('src')}`;
  shadow.querySelector('img').alt = `${elem.getAttribute('alt')}`;
  shadow.querySelector('.title').textContent = `${elem.getAttribute('title')}`;
  shadow.querySelector('.price').textContent = `${elem.getAttribute('price')}`;
  shadow.querySelector('button').id = `${elem.getAttribute('id')}`;
  shadow.querySelector('button').textContent = `${elem.getAttribute('contained')}`;
}
