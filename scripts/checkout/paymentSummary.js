import { cart, updateDeliveryOption } from '../../Data/cart.js';
import { getProduct } from '../../Data/products.js';
import { deliveryOptions, getDeliveryoption } from '../../Data/delivery.js';

export function renderPaymentSummary() {
    let productPrice = 0;
    let shippingPrice = 0;
    let cont = 0;
    let quantity = 0;
    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.productId);
        productPrice += product.price * cartItem.quantity;
        quantity++;
        const deliveryOptions = getDeliveryoption(cartItem.deliveryOptionId);
        shippingPrice += deliveryOptions.price;

    });
    const totalBeforeTax = productPrice / 1.13;
    const taxprice = totalBeforeTax * 0.13;
    const totalPrice = totalBeforeTax + taxprice;
    const total = totalPrice + shippingPrice;
    document.getElementById('checkout').textContent = `checkout( ${quantity} items)`;

    const paymentSummaryHTML = `
       <div class="payment-summary-title">
                    Order Summary
                </div>

                <div class="payment-summary-row">
                    <div>Items (${quantity}):</div>
                    <div class="payment-summary-money">Rs ${productPrice.toFixed(2)}</div>
                </div>
                 <div class="payment-summary-row subtotal-row">
                    <div>Total before tax:</div>
                    <div class="payment-summary-money">Rs ${totalBeforeTax.toFixed(2)}</div>
                </div>
                <div class="payment-summary-row">
                    <div>Estimated tax (13%):</div>
                    <div class="payment-summary-money">Rs ${taxprice.toFixed(2)}</div>
                </div>
                <div class="payment-summary-row">
                    <div>Total (including 13%):</div>
                    <div class="payment-summary-money">Rs ${totalPrice.toFixed(2)}</div>
                </div>

                <div class="payment-summary-row">
                    <div>Shipping &amp; handling:</div>
                    <div class="payment-summary-money">Rs ${shippingPrice.toFixed(2)}</div>
                </div>

                <div class="payment-summary-row total-row">
                    <div>Order total:</div>
                    <div class="payment-summary-money">Rs ${total.toFixed(2)}</div>
                </div>

                <button class="place-order-button button-primary">
                    Place your order
                </button>
    
    `;

    document.querySelector('.js-payment-summary').innerHTML
        = paymentSummaryHTML;
}