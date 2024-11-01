
let prods = products;
function getPriceRange() {

    const min = document.querySelector('.min-price').value;
    const max = document.querySelector('.max-price').value;
    return { min, max };
}

function setPriceRange(min, max) {
    document.querySelector('.min-price').value = min;
    document.querySelector('.max-price').value = max;
}

function getSortType() {
    return document.querySelector('.sort-select').value;
}
function getCat(){
    return document.querySelector('.cat-select').value;
}
function UpdateProds() {
    console.log('update');
    const { min, max } = getPriceRange();
    const sort = getSortType();
    const cat = getCat();
    prods = products.filter((prod) => {
        if(cat === 'all'){
            return true;
        }
        return prod.cat.includes(cat);
    });
    console.log(prods);
    prods = prods.filter((prod) => {
        return prod.price >= min && prod.price <= max;
    });
    console.log(prods);
    prods.sort((a, b) => {
        if (sort === 'id') {
            return b.id - a.id;
        }
        if (sort === 'price') {
            return b.price - a.price;
        }
        if (sort === 'rating') {
            return a.rating - b.rating;
        }
    });
    populateProduct(target, prods);
}
function togglePricePopUP(){
    console.log(true)
    document.querySelector('.price-filter-popup').classList.toggle('hidden');
    document.querySelector('.price-filter-popup').classList.toggle('flex');
    console.log(document.querySelector('.price-filter-popup').classList);
}
