const products = [{
  image: 'front-image/RT28A32216R.png',
  name: 'RT28A32216U Samsung Double Door Refrigerator , 253L',
  rating: {
    stars: 4.5,
    reviews: 100
  },
  mrp: 61000,
  discount: 10,
  price: 55000

},
{
  image: 'front-image/RT28C3221CR.png',
  name: 'RT28C3221CU Samsung Double Door Refrigerator, 253L',
  rating: {
    stars: 4.5,
    reviews: 120
  },
  mrp: 60000,
  discount: 10,
  price: 54000

},
{
  image: 'front-image/Coolkin-28R.jpg',
  name: 'CG brand desert air cooler -35L with digital remote control technology',
  rating: {
    stars: 4.2,
    reviews: 50
  },
  mrp: 21000,
  discount: 10,
  price: 18000

},
{
  image: 'front-image/RT28C3221CR.png',
  name: 'RT28C3221CU Samsung Double Door Refrigerator, 253L',
  rating: {
    stars: 4.5,
    reviews: 120
  },
  mrp: 60000,
  discount: 10,
  price: 54000

},
{
  image: 'front-image/RT28C3221CR.png',
  name: 'RT28C3221CU Samsung Double Door Refrigerator, 253L',
  rating: {
    stars: 4.5,
    reviews: 120
  },
  mrp: 60000,
  discount: 10,
  price: 54000

},
{
  image: 'front-image/RT28C3221CR.png',
  name: 'RT28C3221CU Samsung Double Door Refrigerator, 253L',
  rating: {
    stars: 4.5,
    reviews: 120
  },
  mrp: 60000,
  discount: 10,
  price: 54000

},


];

let productsHTML = '';

products.forEach((product) => {
  productsHTML += `  <div class="product-container">
        <div class="product-image-container">
          <img class="product-image" src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
          ${product.name}
        </div>

        <div class="product-rating-container">
          <img class="product-rating-stars" src="images/ratings/rating-40.png">
          <div class="product-rating-count link-primary">
            ${product.rating.reviews} reviews
          </div>
        </div>
         <div class="product-mrp">
          MRP: ${product.mrp}
        </div>
         <div class="product-discount">
          Discount: Rs.${product.mrp - product.price}
        </div>
        <div class="product-price">
         Rs. ${product.price}
        </div>

        <!-- <div class="product-quantity-container">
          <select>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div> -->

        <div class="product-spacer"></div>

        <div class="added-to-cart">
          <img src="images/icons/checkmark.png">
          Added
        </div>

        <button class="add-to-cart-button button-primary">
          Add to Cart
        </button>
      </div>`;
});
console.log(productsHTML);

document.querySelector('.js-product-grid').innerHTML = productsHTML;


