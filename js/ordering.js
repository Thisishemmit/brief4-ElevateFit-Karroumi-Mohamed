const card = JSON.parse(localStorage.getItem('card')) || [];
const orderContainer = document.querySelector('.order-summary');
const before = orderContainer.innerHTML;
orderContainer.innerHTML = '';
orderContainer.innerHTML += '<h2 class="order-title">Your order</h2>';
card.forEach(element => {
    const orderRow = document.createElement('div');
    orderRow.classList.add('order-row');
    orderRow.innerHTML = `
            <span>${element.prod.title} x ${element.quantity}(Qty)</span>
            <span>$${(element.prod.price * element.quantity).toFixed(2)}</span>
            `;
    orderContainer.appendChild(orderRow);
}
);
const subtotal = card.reduce((acc, element) => {
    return acc + element.prod.price * element.quantity;
}, 0);
orderContainer.innerHTML += `<div class="order-row">Subtotal<span>$${subtotal.toFixed(2)}</span></div>`;
orderContainer.innerHTML += `<div class="order-row">Shipping<span>Free shipping</span></div>`;
orderContainer.innerHTML += `<div class="order-row">Total<span>$${subtotal.toFixed(2)}</span></div>`;
orderContainer.innerHTML += before;
