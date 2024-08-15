import { cart, addToCart } from '../Data/cart.js';
import { products } from '../Data/products.js';
let productsHTML = '';

products.forEach((product) => {
  productsHTML += `  <div class="product-container">
        <div class="product-image-container">
         <a href="${product.link}">
          <img class="product-image" src="${product.image}">
           </a>
        </div>

        <div class="product-name limit-text-to-2-lines">
          ${product.name}
        </div>

        <div class="product-rating-container">
          <img class="product-rating-stars" src="${product.getStarsUrl()}">
          <div class="product-rating-count link-primary">
            ${product.rating.count} reviews
          </div>
        </div>
         <div class="product-mrp">
         MRP: ${product.getMrp()}
        </div>
         <div class="product-discount">
          Discount: ${product.getDiscount()}
        </div>
        <div class="product-price">
        Best Buy:${product.getPrice()}
        </div>
 <!-- dollorsign{product.extraInfoHTML()}-->


        <button class="add-to-cart-button button-primary js-add-to-cart"
        data-product-id="${product.id}">
      
        Add to Cart
        
        </button>
  
      </div>`;
});

document.querySelector('.js-product-grid').innerHTML = productsHTML;
function updateCartQuantity() {
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}
document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  // Add event listener to each add to cart button
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;
    addToCart(productId);

    updateCartQuantity();

  });
});
document.querySelector(".search-button").addEventListener('click', () => {
  const searchValue = document.getElementById('searchInput').value.toLowerCase();
  console.log(searchValue)
  const filteredProducts = products.filter(product => product.getKeywords().toLowerCase().includes(searchValue));

  // Display results
  const resultsContainer = document.querySelector('.js-product-grid')
  resultsContainer.innerHTML = '';
  let foundProduct = '';
  if (filteredProducts.length === 0) {
    resultsContainer.textContent = 'No matching products found.';
  } else {
    filteredProducts.forEach(product => {
      foundProduct += `  <div class="product-container">
        <div class="product-image-container">
         <a href="${product.link}">
          <img class="product-image" src="${product.image}">
           </a>
        </div>

        <div class="product-name limit-text-to-2-lines">
          ${product.name}
        </div>

        <div class="product-rating-container">
          <img class="product-rating-stars" src="${product.getStarsUrl()}">
          <div class="product-rating-count link-primary">
            ${product.rating.count} reviews
          </div>
        </div>
         <div class="product-mrp">
         MRP: ${product.getMrp()}
        </div>
         <div class="product-discount">
          Discount: ${product.getDiscount()}
        </div>
        <div class="product-price">
        Best Buy:${product.getPrice()}
        </div>
 <!-- dollorsign{product.extraInfoHTML()}-->

  <a href="checkout.html">
        <button class="add-to-cart-button button-primary js-add-to-cart"
        data-product-id="${product.id}">
      
         Buy Now
        
        </button>
         </a>
      </div>`;





      // const productElement = document.createElement('p');
      // productElement.textContent = product.name;
      // resultsContainer.appendChild(productElement);
    });
    resultsContainer.innerHTML = foundProduct;
  }
});

document.addEventListener('load', () => {

})


