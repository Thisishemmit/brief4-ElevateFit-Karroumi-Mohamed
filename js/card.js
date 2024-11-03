const addBtn = document.querySelector('.btn');
addBtn.addEventListener('click', addProductToCart);

const sizeSelect = document.getElementById('size-select')
const quantity = document.getElementById('quantity')


function getQuantityt() {
    return quantity.value
}

function getProdSize() {
    return sizeSelect.value
}

function updateTotalPrice() {
    const card = JSON.parse(localStorage.getItem('card')) || [];
    const totalPrice = card.reduce((acc, element) => {
        return acc + element.prod.price * element.quantity;
    }, 0);
    document.getElementById('total-price').textContent = `$${totalPrice.toFixed(2)}   (${card.length} items)`;
}

function addProductToCart() {
    const selectedProduct = JSON.parse(localStorage.getItem('selectedProd'));
    const card = JSON.parse(localStorage.getItem('card')) || [];
    let found = false;

    card.forEach(element => {
        if (element.prod.id === selectedProduct.id) {
            element.quantity = getQuantityt();
            element.size = getProdSize();
            found = true;
        }
    })
    if (!found) {
        card.push({
            prod: selectedProduct,
            quantity: getQuantityt(),
            size: getProdSize(),
        });


    }
    localStorage.setItem('card', JSON.stringify(card));
    updateTotalPrice();
}




