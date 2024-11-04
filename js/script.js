
function updateNavCard() {
    const card = JSON.parse(localStorage.getItem('card')) || [];
    const totalPrice = card.reduce((acc, element) => {
        return acc + element.prod.price * element.quantity;
    }, 0);

    const totals = document.querySelectorAll('.total-price');
    totals.forEach(element => {
        element.textContent = `$${totalPrice.toFixed(2)}   (${card.length} items)`;
    });
}

updateNavCard();
