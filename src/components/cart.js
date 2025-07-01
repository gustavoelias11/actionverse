function setupCart() {
    const shippingValue = 12.90;
    const discountValue = 20.00;

    const summarySubtotalEl = document.querySelector('.order-summary__subtotal-value');
    const summaryShippingEl = document.querySelector('.order-summary__shipping-value');
    const summaryDiscountEl = document.querySelector('.order-summary__discount-value');
    const summaryTotalEl = document.querySelector('.order-summary__total-value');

    function formatPrice(value) {
        return `R$ ${value.toFixed(2).replace('.', ',')}`;
    }

    function getNumericPrice(priceText) {
        if (!priceText) return 0;
        return parseFloat(priceText.replace('R$', '').trim().replace(',', '.'));
    }

    function updateTotals() {
        let subtotal = 0;
        const productCards = document.querySelectorAll('.product-card');

        productCards.forEach(card => {
            const priceText = card.querySelector('.product-price')?.textContent;
            const quantityText = card.querySelector('.quantity-display')?.textContent;
            
            if (priceText && quantityText) {
                const price = getNumericPrice(priceText);
                const quantity = parseInt(quantityText, 10);
                subtotal += price * quantity;
            }
        });

        const total = subtotal > 0 ? subtotal + shippingValue - discountValue : 0;
        
        if(summarySubtotalEl) summarySubtotalEl.textContent = formatPrice(subtotal);
        if(summaryShippingEl) summaryShippingEl.textContent = formatPrice(shippingValue);
        if(summaryDiscountEl) summaryDiscountEl.textContent = `-${formatPrice(discountValue)}`;
        if(summaryTotalEl) summaryTotalEl.textContent = formatPrice(total);
    }

    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        const decreaseBtn = card.querySelector('.quantity-btn--decrease');
        const increaseBtn = card.querySelector('.quantity-btn--increase');
        const display = card.querySelector('.quantity-display');
        const deleteBtn = card.querySelector('.delete-btn');

        increaseBtn?.addEventListener('click', () => {
            display.textContent = parseInt(display.textContent, 10) + 1;
            updateTotals();
        });

        decreaseBtn?.addEventListener('click', () => {
            const currentQuantity = parseInt(display.textContent, 10);
            if (currentQuantity > 1) {
                display.textContent = currentQuantity - 1;
                updateTotals();
            }
        });

        deleteBtn?.addEventListener('click', () => {
            card.remove();
            updateTotals();
        });
    });

    updateTotals();
}

setupCart();