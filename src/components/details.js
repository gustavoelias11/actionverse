const increaseButton = document.getElementById('quantity-increase');
const decreaseButton = document.getElementById('quantity-decrease');
const quantityDisplay = document.getElementById('quantity-value');

const priceElement = document.querySelector('.product-details__price');
const currentPriceSpan = priceElement.querySelector('.current-price');
const originalPriceSpan = priceElement.querySelector('.original-price');

const unitPrice = parseFloat(priceElement.dataset.unitPrice) || 0;
const unitDiscountPrice = parseFloat(priceElement.dataset.unitDiscountPrice) || 0;

let quantity = 1;

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

function updatePriceDisplay() {
    const totalPrice = unitPrice * quantity;
    const totalDiscountPrice = unitDiscountPrice * quantity;

    currentPriceSpan.textContent = currencyFormatter.format(totalPrice);

    if (unitDiscountPrice > 0) {
        originalPriceSpan.textContent = currencyFormatter.format(totalDiscountPrice);
    }
}

function updateQuantityDisplay() {
    quantityDisplay.textContent = quantity;
}

increaseButton.addEventListener('click', () => {
    quantity++;
    updateQuantityDisplay();
    updatePriceDisplay();
});

decreaseButton.addEventListener('click', () => {
    if (quantity > 1) {
        quantity--;
        updateQuantityDisplay();
        updatePriceDisplay();
    }
});

updateQuantityDisplay();
updatePriceDisplay();
