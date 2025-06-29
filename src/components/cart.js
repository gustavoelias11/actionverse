function setupCart() {
    const productCards = document.querySelectorAll('.product-card');
    const summarySubtotalEl = document.querySelector('.order-summary__subtotal-value');
    const summaryShippingEl = document.querySelector('.order-summary__shipping-value');
    const summaryDiscountEl = document.querySelector('.order-summary__discount-value');
    const summaryTotalEl = document.querySelector('.order-summary__total-value');

    // Valores fixos para o cálculo
    const shippingValue = 12.90;
    const discountValue = 20.00;

    // Helper para formatar números como moeda (R$)
    function formatPrice(value) {
        return `R$ ${value.toFixed(2).replace('.', ',')}`;
    }

    // Helper para converter texto de preço (R$ 79,90) para número (79.90)
    function getNumericPrice(priceText) {
        if (!priceText) return 0;
        return parseFloat(priceText.replace('R$', '').trim().replace(',', '.'));
    }

    // Função principal para calcular e atualizar todos os totais
    function updateTotals() {
        let subtotal = 0;

        productCards.forEach(card => {
            const priceText = card.querySelector('.product-card__price')?.textContent;
            const quantityText = card.querySelector('.quantity-control__display')?.textContent;

            const price = getNumericPrice(priceText);
            const quantity = parseInt(quantityText, 10) || 0;
            
            subtotal += price * quantity;
        });

        const total = subtotal + shippingValue - discountValue;

        // Atualiza o HTML com os valores formatados
        if (summarySubtotalEl) summarySubtotalEl.textContent = formatPrice(subtotal);
        if (summaryShippingEl) summaryShippingEl.textContent = formatPrice(shippingValue);
        if (summaryDiscountEl) summaryDiscountEl.textContent = `-${formatPrice(discountValue)}`;
        if (summaryTotalEl) summaryTotalEl.textContent = formatPrice(total);
    }

    // Adiciona os eventos de clique para cada card de produto
    productCards.forEach(card => {
        const decreaseBtn = card.querySelector('.quantity-control__btn--decrease');
        const increaseBtn = card.querySelector('.quantity-control__btn--increase');
        const display = card.querySelector('.quantity-control__display');
        const deleteBtn = card.querySelector('.product-card__delete-btn');

        if (!decreaseBtn || !increaseBtn || !display) return;

        increaseBtn.addEventListener('click', () => {
            display.textContent = parseInt(display.textContent, 10) + 1;
            updateTotals();
        });

        decreaseBtn.addEventListener('click', () => {
            const currentQuantity = parseInt(display.textContent, 10);
            if (currentQuantity > 1) {
                display.textContent = currentQuantity - 1;
                updateTotals();
            }
        });

        // Lógica para remover o card (opcional)
        if (deleteBtn) {
            deleteBtn.addEventListener('click', () => {
                card.remove();
                updateTotals();
            });
        }
    });

    // Calcula os totais uma vez ao carregar a página
    updateTotals();
}

// Garante que o script rode após o HTML ser carregado
// Lembre-se de usar 'defer' na sua tag <script>
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupCart);
} else {
    setupCart();
}
