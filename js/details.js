/* <div class="small-img-col">
                        <img src="images/gallery-1.jpg" width="100%" class="small-img">
                    </div> */

/* <p id="product-category">Home/</p>
<h1 id="product-name"></h1>
<h4 id="product-price"></h4> */

const ProductImg = document.getElementById("product-img");//larger image
const ProductName = document.getElementById("product-name");
const ProductPrice = document.getElementById("product-price");
const ProductCategory = document.getElementById("product-category");
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
const terget = document.querySelector('.small-img-row');
selectedProduct.detailImages.forEach(img => {
    addDetaiImg(terget, img);
});

function undisplay() {
    ProductImg.src = img;
}





