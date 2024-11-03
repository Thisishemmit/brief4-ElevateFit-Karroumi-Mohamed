
const ProductImg = document.getElementById("product-img");//larger image
const ProductName = document.getElementById("product-name");
const ProductPrice = document.getElementById("product-price");
const ProductCategory = document.getElementById("product-category");
const ProductQuantity = document.getElementById("quantity");
const ProductSize = document.getElementById("size-select");
function addDetaiImg(target, img) {
    const div = document.createElement('div');
    div.className = 'small-img-col';
    div.innerHTML = `<img src="${img}" width="100%" class="small-img">`;
    ["click", "mouseover"].forEach(event => {
        div.addEventListener(event, () => {
            ProductImg.src = img;
        });
    });

    ["mouseout"].forEach(event => {
        div.addEventListener(event, undisplay);
    }
    );
    target.appendChild(div);
}

const selectedProduct = JSON.parse(localStorage.getItem('selectedProd'));
const img = selectedProduct.img;
ProductImg.src = img;
ProductName.textContent = selectedProduct.title;
ProductPrice.textContent = parseFloat(selectedProduct.price).toFixed(2);
ProductCategory.textContent += selectedProduct.cat.join('/');
const card = JSON.parse(localStorage.getItem('card')) || [];
if (card.length > 0) {
    card.forEach(element => {
        if (element.prod.id === selectedProduct.id) {
            ProductQuantity.value = element.quantity;
            ProductSize.value = element.size;
        }
    });
}

const terget = document.querySelector('.small-img-row');
selectedProduct.detailImages.forEach(img => {
    addDetaiImg(terget, img);
});

function undisplay() {
    ProductImg.src = img;
}





