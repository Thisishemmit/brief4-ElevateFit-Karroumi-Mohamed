
function updateNavCard() {
    const card = JSON.parse(localStorage.getItem('card')) || [];
    const totalPrice = card.reduce((acc, element) => {
        return acc + element.prod.price * element.quantity;
    }, 0);
    document.getElementById('total-price').textContent = `$${totalPrice.toFixed(2)}   (${card.length} items)`;
    console.log(totalPrice);
}

updateNavCard();
