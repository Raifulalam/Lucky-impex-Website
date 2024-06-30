import { cart, removeFromCart, updateDeliveryOption } from '../../Data/cart.js';
import { products, getProduct } from '../../Data/products.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { deliveryOptions, getDeliveryoption } from '../../Data/delivery.js';
import { renderPaymentSummary } from './paymentSummary.js';

export function renderOrderSummary() {
    let cartSummaryHTML = '';
    cart.forEach((cartItem) => {
        const productId = cartItem.productId;

        const matchingProducts = getProduct(productId);
        const deliveryOptionId = cartItem.deliveryOptionId;
        const deliveryOption = getDeliveryoption(deliveryOptionId);

        const today = dayjs();
        const deliveryDate = today.add(deliveryOption.deliveryDays,
            'day');
        const dateString = deliveryDate.format(
            'dddd, MMMM D');

        cartSummaryHTML +=
            `
     <div class="cart-item-container
     js-cart-item-container
      js-cart-item-container-${matchingProducts.id}">
                        <div class="delivery-date">
                            Delivery date: ${dateString}
                        </div>
    
                        <div class="cart-item-details-grid">
                            <img class="product-image" src="${matchingProducts.image}">
    
                            <div class="cart-item-details">
                                <div class="product-name">
                                   ${matchingProducts.name};
                                </div>
                                <div class="product-price">
                                   ${matchingProducts.price}
                                </div>
                                <div class="product-quantity">
                                    <span>
                                        Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                                    </span>
                                    <span class="update-quantity-link link-primary">
                                        Update
                                    </span>
                                    <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProducts.id}">
                                        Delete
                                    </span>
                                </div>
                            </div>
    
                            <div class="delivery-options">
                                <div class="delivery-options-title">
                                    Choose a delivery option:
                                </div>
                                ${deliveryOptionsHTML(matchingProducts, cartItem)}
                                
                                
                            </div>
                        </div>
                    </div>
    `
    });

    function deliveryOptionsHTML(matchingProducts, cartItem) {
        let html = '';
        deliveryOptions.forEach((deliveryOption) => {

            const today = dayjs();
            const deliveryDate = today.add(deliveryOption.deliveryDays,
                'day');
            const dateString = deliveryDate.format(
                'dddd, MMMM D');
            const priceString = deliveryOption.price === 0 ? 'FREE'
                : ` RS:${deliveryOption.price}-`;
            const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

            html += `<div class="delivery-option js-delivery-option" data-product-id="${matchingProducts.id}"
            data-delivery-option-id="${deliveryOption.id}">
                                    <input type="radio"
                                   ${isChecked ? 'checked' : ''}
                                     class="delivery-option-input"
                                    name="delivery-option-${matchingProducts.id}">
                                    <div>
                                        <div class="delivery-option-date">
                                            ${dateString}
                                        </div>
                                        <div class="delivery-option-price">
                                            ${priceString} Shipping
                                        </div>
                                    </div>
                                </div> 
            `
        });
        return html;

    }


    document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;
    document.querySelectorAll('.js-delete-link')
        .forEach((link) => {
            link.addEventListener('click', (event) => {
                const productId = link.dataset.productId;
                removeFromCart(productId);

                const container = document.querySelector(`.js-cart-item-container-${productId}`);
                container.remove();
                renderPaymentSummary();
            });

        });

    document.querySelectorAll('.js-delivery-option')
        .forEach((element) => {
            element.addEventListener('click', () => {
                const { productId, deliveryOptionId } = element.dataset;
                updateDeliveryOption(productId, deliveryOptionId);
                renderOrderSummary();
                renderPaymentSummary();
            });
        });
}




