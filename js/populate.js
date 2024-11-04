
function createDiv(prod) {
    const div = document.createElement('div');
    div.classList.add('col-4', 'prod');
    div.setAttribute('data-id', prod.id);
    div.onclick = function() {
        localStorage.setItem('selectedProd', JSON.stringify(prod));
        window.location.href = 'product-detail.html';
    }

    const img = document.createElement('img');
    img.src = prod.img;
    const divImg = document.createElement('div');
    divImg.classList.add('prod-img');
    divImg.appendChild(img);

    const h4 = document.createElement('h4');
    h4.innerText = prod.title;

    const ratingDiv = document.createElement('div');
    ratingDiv.classList.add('rating');
    let rating = prod.rating;
    let i = 5;
    while (i > 0) {
        const star = document.createElement('i');
        if (rating >= 1) {
            star.classList.add('fa', 'fa-star');
            rating--;
        } else if (rating === 0.5) {
            star.classList.add('fa', 'fa-star-half-o');
            rating = 0;
        } else {
            star.classList.add('fa', 'fa-star-o');
        }
        ratingDiv.appendChild(star);
        i--;
    }

    const p = document.createElement('p');
    p.classList.add('price');
    p.innerText = `$${prod.price.toFixed(2)}`;

    // Create the add to cart button div
    const addToCartDiv = document.createElement('div');
    addToCartDiv.classList.add('action-add-to-card');

    const addBtn = document.createElement('button');
    addBtn.classList.add('btn-add-to-card');
    addBtn.setAttribute('data-id', prod.id);

    addBtn.addEventListener('click', function(event) {
        event.stopPropagation(); // This prevents the click from bubbling up to the parent div
        addToCardFromProducts(prod.id);
    });

    const addIcon = document.createElement('i');
    addIcon.classList.add('add', 'fa', 'fa-cart-plus');

    const addedIcon = document.createElement('i');
    addedIcon.classList.add('added', 'fa', 'fa-check');

    addBtn.appendChild(addIcon);
    addBtn.appendChild(addedIcon);
    addToCartDiv.appendChild(addBtn);

    const wishlistBtn = document.createElement('button');
    wishlistBtn.classList.add('btn-wishlist');
    wishlistBtn.setAttribute('data-id', prod.id);

    const heartIcon = document.createElement('i')
    const outLineHeartIcon = document.createElement('i');
    outLineHeartIcon.classList.add('fa', 'fa-heart-o', 'wish');
    heartIcon.classList.add('fa', 'fa-heart', 'wished');
    wishlistBtn.appendChild(heartIcon);
    wishlistBtn.appendChild(outLineHeartIcon);
    wishlistBtn.addEventListener('click', function(event) {
        event.stopPropagation(); // This prevents the click from bubbling up to the parent div
        toggleWishlist(prod.id);
    });

    addToCartDiv.appendChild(wishlistBtn);
    div.appendChild(divImg);
    div.appendChild(h4);
    div.appendChild(ratingDiv);
    div.appendChild(p);
    div.appendChild(addToCartDiv);

    return div;
}

const products = JSON.parse(localStorage.getItem('products'));

function populateProduct(target, prods = products) {
    while (target.firstChild) {
        target.removeChild(target.firstChild);
    }

    prods.forEach(prod => {
        const div = createDiv(prod);
        target.appendChild(div);
    });
}


function checkForAddabilty(){
    console.log('checking for addability');
    const card = JSON.parse(localStorage.getItem('card')) || [];
    const addBtn = document.querySelectorAll('.btn-add-to-card');
    addBtn.forEach(btn => {
        const id = parseInt(btn.getAttribute('data-id'));
        console.log(id)
        const found = card.find(element => element.prod.id === id);
        if (found) {
            console.log("found in card", id)
            btn.querySelector('.add').style.display = 'none';
            btn.querySelector('.added').style.display = 'block';
        } else {
            btn.querySelector('.add').style.display = 'block';
            btn.querySelector('.added').style.display = 'none';
        }
    });
}

function addToCardFromProducts(id) {
    const selectedProduct = products.find(prod => prod.id === id);
    const card = JSON.parse(localStorage.getItem('card')) || [];
    let found = false;

    card.forEach(element => {
        if (element.prod.id === selectedProduct.id) {
            element.quantity++;
            found = true;
        }
    })
    if (!found) {
        card.push({
            prod: selectedProduct,
            quantity: 1,
            size: 'XL',
        });
    } else {
        // if found then delete from card
        card.forEach((element, index) => {
            if (element.prod.id === selectedProduct.id) {
                card.splice(index, 1);
            }
        });
    }
    localStorage.setItem('card', JSON.stringify(card));
    checkForAddabilty();
    updateNavCard();
}

checkForAddabilty();

function toggleWishlist(id) {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const selectedProduct = products.find(prod => prod.id === id);
    const found = wishlist.find(prod => prod.id === id);
    if (found) {
        wishlist.forEach((prod, index) => {
            if (prod.id === id) {
                wishlist.splice(index, 1);
            }
        });
    } else {
        wishlist.push(selectedProduct);
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    populateProduct(target);
    checkForWishlist();
}

function checkForWishlist() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const wishlistBtn = document.querySelectorAll('.btn-wishlist');
    wishlistBtn.forEach(btn => {
        const id = parseInt(btn.getAttribute('data-id'));
        const found = wishlist.find(prod => prod.id === id);
        if (found) {
            btn.querySelector('.fa-heart-o').style.display = 'none';
            btn.querySelector('.fa-heart').style.display = 'block';
        } else {
            btn.querySelector('.fa-heart-o').style.display = 'block';
            btn.querySelector('.fa-heart').style.display = 'none';
        }
    });
    checkForAddabilty();
}
checkForWishlist();
