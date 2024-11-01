
function createDiv(prod) {
    const div = document.createElement('div');
    div.classList.add('col-4', 'prod');
    div.setAttribute('data-id', prod.id);
    div.onclick = function () {
        localStorage.setItem('selectedProd', JSON.stringify(prod));
        window.location.href = 'product-detail.html';
    }
    const img = document.createElement('img');
    img.src = prod.img;
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
    //to float with two decimal points
    p.innerText = `$${prod.price.toFixed(2)}`;
    div.appendChild(img);
    div.appendChild(h4);
    div.appendChild(ratingDiv);
    div.appendChild(p);
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
