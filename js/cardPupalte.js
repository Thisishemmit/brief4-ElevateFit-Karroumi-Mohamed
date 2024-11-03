function addHeaders() {
    const headers = ['Products', 'Quantity', 'Subtotal'];
    const headerContainer = document.querySelector('.card');
    headers.forEach(header => {
        const div = document.createElement('div');
        div.classList.add('header');
        div.innerHTML = `
        <p>${header}</p>
        `;
        headerContainer.appendChild(div);
    });
}
function populateCard() {
    const card = JSON.parse(localStorage.getItem('card')) || [];
    const cardContainer = document.querySelector('.card');
    if (card.length === 0) {
        cardContainer.innerHTML = '';
        addHeaders();
        cardContainer.innerHTML += '<p class="info">Your card is empty, add some <a href="Products.html">&nbsp;items</a></p>';
        return;
    }
    console.log(false)
    cardContainer.innerHTML = '';
    addHeaders();
    card.forEach(element => {
        const product = document.createElement('div');
        product.classList.add('product');
        product.dataset.id = element.prod.id;
        product.innerHTML = `
            <img src="${element.prod.img}" alt="">
        <div class="product-desc">
            <p>${element.prod.title}</p>
            <p>$${element.prod.price}</p>
            <button onclick="deletProdFromCard(${element.prod.id})">remove</button>
        </div>
        `;
        cardContainer.appendChild(product);

        const quantity = document.createElement('div');
        quantity.classList.add('quantity');
        quantity.dataset.id = element.prod.id;
        quantity.onchange = (e) => {
            if (e.target.value < 1) {
                deletProdFromCard(element.prod.id);
                return;
            }
            element.quantity = e.target.value;
            localStorage.setItem('card', JSON.stringify(card));
            const subtotal = document.querySelector(`.subtotal[data-id="${element.prod.id}"] p`);
            subtotal.textContent = `$${(element.prod.price * element.quantity).toFixed(2)}`;
            populateCard();
        }
        quantity.innerHTML = `
        <input type="number" value="${element.quantity}">
        `;
        cardContainer.appendChild(quantity);

        const subtotal = document.createElement('div');
        subtotal.classList.add('subtotal');
        subtotal.dataset.id = element.prod.id;
        subtotal.innerHTML = `
        <p>$${(element.prod.price * element.quantity).toFixed(2)}</p>
        `;
        cardContainer.appendChild(subtotal);
    });

    printSammury();
}

function deletProdFromCard(id) {
    const card = JSON.parse(localStorage.getItem('card')) || [];
    const newCard = card.filter(element => element.prod.id !== id);
    localStorage.setItem('card', JSON.stringify(newCard));

    const elements = [...document.querySelectorAll('.product'), ...document.querySelectorAll('.quantity'), ...document.querySelectorAll('.subtotal')];
    elements.forEach(element => {
        if (element.dataset.id === id) {
            element.remove();
        }
    });
    populateCard();
}


function printSammury() {
    const cardContainer = document.querySelector('.card');
    const card = JSON.parse(localStorage.getItem('card')) || [];
    const sammury = document.createElement('div');
    const total = card.reduce((acc, element) => acc + element.prod.price * element.quantity, 0);
    sammury.classList.add('sammury');
    sammury.innerHTML = `
      <div class="sammury-container">
          <div class="sammury-header">
              <h3>Sub-Total</h3>
              <p>${card.length} items</p>
          </div>
          <div class="sammury-price">
              <h1>$${total.toFixed(2)}</h1>
          </div>
      </div>
      <button class="checkout"><a href="checkout.html">Checkout</a></button>
    `;
    cardContainer.appendChild(sammury);
}
