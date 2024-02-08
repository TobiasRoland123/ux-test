'use strict';

const products = [
  {
    title: 'Toothpaste',
    price: 10,
    description: 'This is a great product, trust me it is',
    category: 'household',
    rating: {
      rate: 3.5,
      count: 2000,
    },
  },
  {
    title: 'Soap',
    price: 5,
    description: 'This is a good product, trust me it is',
    category: 'household',
    rating: {
      rate: 4.2,
      count: 5000,
    },
  },
  {
    title: 'Shampoo',
    price: 15,
    description: 'This is a good product, trust me it is',
    category: 'household',
    rating: {
      rate: 3.8,
      count: 3000,
    },
  },
  {
    title: 'Conditioner',
    price: 15,
    description: 'This is a good product, trust me it is',
    category: 'household',
    rating: {
      rate: 4.0,
      count: 2500,
    },
  },
  {
    title: 'Handwash',
    price: 7,
    description: 'This is a good product, trust me it is',
    category: 'household',
    rating: {
      rate: 4.5,
      count: 3500,
    },
  },
  {
    title: 'Detergent',
    price: 20,
    description: 'This is a good product, trust me it is',
    category: 'household',
    rating: {
      rate: 3.2,
      count: 4000,
    },
  },
  {
    title: 'Dish Soap',
    price: 8,
    description: 'This is a good product, trust me it is',
    category: 'household',
    rating: {
      rate: 4.1,
      count: 4500,
    },
  },
  {
    title: 'Floor Cleaner',
    price: 25,
    description: 'This is a good product, trust me it is',
    category: 'household',
    rating: {
      rate: 3.9,
      count: 5000,
    },
  },
  {
    title: 'Air Freshener',
    price: 12,
    description: 'This is a good product, trust me it is',
    category: 'household',
    rating: {
      rate: 4.3,
      count: 5500,
    },
  },
  {
    title: 'Toilet Cleaner',
    price: 18,
    description: 'This is a good product, trust me it is',
    category: 'household',
    rating: {
      rate: 3.7,
      count: 6000,
    },
  },
];

for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
}

let productsContent;

// for (const product of products) {
//   console.log('const product: ', product);

//   const productCard = `
//   <article class="product">
//     <h2>${product.title}</h2>
//     <p>${product.description}</p>
//     <p>${product.price}</p>
//   </article>
//   `;

//   productsContent += productCard;
// }

// document.querySelector('main').innerHTML += productsContent;

const productInfo = document.createElement('section');

for (const product of products) {
  const productArticle = document.createElement('article');

  const productHeading = document.createElement('h2');
  productHeading.innerHTML = product.title;

  const productDescription = document.createElement('p');
  productDescription.innerHTML = product.description;

  const productPrice = document.createElement('p');
  productPrice.innerHTML = product.price;

  productArticle.appendChild(productHeading);
  productArticle.appendChild(productDescription);
  productArticle.appendChild(productPrice);

  productInfo.appendChild(productArticle);
}

document.querySelector('main').appendChild(productInfo);
