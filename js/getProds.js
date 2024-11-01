const prodArray = [
    {
        "id": 1,
        "title": "Red Printed T-shirt",
        "rating": 4,
        "price": 25,
        "img": "./images/product-1/product.webp",
        "detailImages": [
            "./images/product-1/1.webp",
            "./images/product-1/2.webp",
            "./images/product-1/3.webp",
            "./images/product-1/4.webp",
            "./images/product-1/5.webp"
        ],
        "cat": ["men"]
    },
    {
        "id": 2,
        "title": "Red Printed T-shirt",
        "rating": 3.5,
        "price": 90,
        "img": "./images/product-2/product.webp",
        "detailImages": [
            "./images/product-2/1.webp",
            "./images/product-2/2.webp",
            "./images/product-2/3.webp",
            "./images/product-2/4.webp",
            "./images/product-2/5.webp"
        ],
        "cat": ["men"]
    },
    {
        "id": 3,
        "title": "Red Printed T-shirt",
        "rating": 4.5,
        "price": 87,
        "img": "./images/product-3/product.webp",
        "detailImages": [
            "./images/product-3/1.webp",
            "./images/product-3/2.webp",
            "./images/product-3/3.webp",
            "./images/product-3/4.webp",
            "./images/product-3/5.webp"
        ],
        "cat": ["men"]
    },
    {
        "id": 4,
        "title": "Red Printed T-shirt",
        "rating": 4,
        "price": 20,
        "img": "./images/product-4/product.webp",
        "detailImages": [
            "./images/product-4/1.webp",
            "./images/product-4/2.webp",
            "./images/product-4/3.webp",
            "./images/product-4/4.webp",
            "./images/product-4/5.webp"
        ],
        "cat": ["women"]
    },
    {
        "id": 5,
        "title": "Red Printed T-shirt",
        "rating": 4,
        "price": 10,
        "img": "./images/product-5/product.webp",
        "detailImages": [
            "./images/product-5/1.webp",
            "./images/product-5/2.webp",
            "./images/product-5/3.webp",
            "./images/product-5/4.webp",
            "./images/product-5/5.webp"
        ],
        "cat": ["women"]
    },
    {
        "id": 6,
        "title": "Red Printed T-shirt",
        "rating": 3.5,
        "price": 89.99,
        "img": "./images/product-6/product.jpg",
        "detailImages": [
            "./images/product-6/1.jpg",
            "./images/product-6/2.jpg",
            "./images/product-6/3.jpg",
            "./images/product-6/4.jpg",
            "./images/product-6/5.jpg"
        ],
        "cat": ["women"]
    },
    {
        "id": 7,
        "title": "Red Printed T-shirt",
        "rating": 4.5,
        "price": 62,
        "img": "./images/product-7/product.webp",
        "detailImages": [
            "./images/product-7/1.webp",
            "./images/product-7/2.webp",
            "./images/product-7/3.webp",
            "./images/product-7/4.webp",
            "./images/product-7/5.webp"
        ],
        "cat": ["women"]
    },
    {
        "id": 8,
        "title": "Red Printed T-shirt",
        "rating": 4,
        "price": 71,
        "img": "./images/product-8/product.webp",
        "detailImages": [
            "./images/product-8/1.webp",
            "./images/product-8/2.webp",
            "./images/product-8/3.webp",
            "./images/product-8/4.webp",
            "./images/product-8/5.webp"
        ],
        "cat": ["women"]
    },
]



localStorage.setItem('products', JSON.stringify(prodArray));
