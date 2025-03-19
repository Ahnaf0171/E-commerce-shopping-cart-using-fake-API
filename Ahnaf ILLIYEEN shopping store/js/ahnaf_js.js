
    const products = [
        {
            id:1,
            title:"Premium Panjabi",
            code: 260015,
            color:"Black",
            image:"https://d3j1z37yk0dbyk.cloudfront.net/media/images/260015__4_5__20250308064635899_width_1024.jpg",
            size:["s", "l", "xl", "xxl"],
            price:3950,
            category: 'panjabi'
        },
        {
            id:2,
            title:"Premium Panjabi",
            code: 260014,
            color:" Beige",
            image:"https://d3j1z37yk0dbyk.cloudfront.net/media/images/260014__4_5__20250305053222415_width_1024.jpg",
            size:["s", "l", "xl", "xxl"],
            price:3950,
            category: 'panjabi'
        },
        {
            id:3,
            title:"Sahara Panjabi",
            code: 247054,
            color:"Dark Maroon",
            image:"https://d3j1z37yk0dbyk.cloudfront.net/media/images/247054__4_5__20250308064605261_width_1024.jpg",
            size:["s", "l", "xl", "xxl"],
            price:8450,
            category: 'panjabi'
        },
        {
            id:4,
            title:"Sahara Panjabi",
            code: 247044,
            color:"Purple",
            image:"https://d3j1z37yk0dbyk.cloudfront.net/media/images/247044__4_5__20250119071906725_width_1024.jpg",
            size:["s", "l", "xl", "xxl"],
            price:9450,
            category: 'panjabi'
        },
        {
            id:5,
            title:"Premium Kabli Set",
            code: 241003,
            color:"White",
            image:"https://d3j1z37yk0dbyk.cloudfront.net/media/images/241003__4_5__20240626101817499_width_1024.jpg",
            size:["s", "l", "xl", "xxl"],
            price:5950,
            category: 'panjabi'
        },
        {
            id:6,
            title:"Platinum Panjabi",
            code: 252011,
            color:"Navy Blue",
            image:"https://d3j1z37yk0dbyk.cloudfront.net/media/images/252011__4_5__20250227044040823_width_1024.jpg",
            size:["s", "l", "xl", "xxl"],
            price:6950,
            category: 'panjabi'
        },
        {
            id:7,
            title:"Legends of Bengal Panjabi",
            code: 232072,
            color:"Orange",
            image:"https://d3j1z37yk0dbyk.cloudfront.net/media/images/lb232072__4___5__20241204050839391_width_1024.jpg",
            size:["s", "l", "xl", "xxl"],
            price:4950,
            category: 'panjabi'
        },
        {
            id:8,
            title:"Sahara Panjabi",
            code: 257028,
            color:"Dark Grey",
            image:"https://d3j1z37yk0dbyk.cloudfront.net/media/images/257028__4_5__20250313054157268_width_1024.jpg",
            size:["s", "l", "xl", "xxl"],
            price:8950,
            category: 'panjabi'
        },
        {
            id:9,
            title:"Premium Shirt",
            code: 174124,
            color:"Light Blue",
            image:"https://d3j1z37yk0dbyk.cloudfront.net/media/images/174124_4x5_20241107114710616_width_1024.jpg",
            size:["s", "l", "xl", "xxl"],
            price:2450,
            category: 'shirts'
        },
        {
            id:10,
            title:"Premium Shirt",
            code:  216008,
            color:" White and Blue",
            image:"	https://d3j1z37yk0dbyk.cloudfront.net/media/images/2160084_5.width-1024.format-jpeg.jpg",
            size:["s", "l", "xl", "xxl"],
            price:2750,
            category: 'shirts'
        },
        {
            id:11,
            title:"Exicutiv Shirt",
            code: 241001,
            color:"Caramel",
            image:"https://d3j1z37yk0dbyk.cloudfront.net/media/images/ex241001__4_5__20241205105949470_width_1024.jpg",
            size:["s", "l", "xl", "xxl"],
            price:1775,
            category: 'shirts'
        },
        {
            id:12,
            title:"Premium Superior Jeans",
            code: 223007,
            color:" Black",
            image:"https://d3j1z37yk0dbyk.cloudfront.net/media/images/223007_4_5.width-1024.format-jpeg.jpg",
            size:["32", "34", "36", "38"],
            price:2450,
            category: 'pants'
        },
        {
            id:13,
            title:"Premium Superior Jeans",
            code: 213331,
            color:"Washed Dark Blue",
            image:"https://d3j1z37yk0dbyk.cloudfront.net/media/images/213331_4_5.width-1024.format-jpeg.jpg",
            size:["32", "34", "36", "38"],
            price:2750,
            category: 'pants'
        },
        {
            id:14,
            title:"MAX Denim Jeans",
            code: 243011,
            color:"Dark Navy",
            image:"https://d3j1z37yk0dbyk.cloudfront.net/media/images/223405_4_5.width-1024.format-jpeg.jpg",
            size:["32", "34", "36", "38"],
            price:3450,
            category: 'pants'
        },
        {
            id:15,
            title:"MAX Denim Jeans",
            code: 233054,
            color:"Light Navy",
            image:"https://d3j1z37yk0dbyk.cloudfront.net/media/images/2133344_5.width-1024.format-jpeg.jpg",
            size:["32", "34", "36", "38"],
            price:3750,
            category: 'pants'
        },
        {
            id:16,
            title:"Luxury Business Shirt",
            code: 232917,
            color:"White",
            image:"https://d3j1z37yk0dbyk.cloudfront.net/media/images/232917_4___5__20241110091122268_width_1024.jpg",
            size:["s", "l", "xl", "xxl"],
            price:4750,
            category: 'shirts'
        },
        {
            id:17,
            title:"Luxury Shirt",
            code: 242708,
            color:"White and Navy",
            image:"	https://d3j1z37yk0dbyk.cloudfront.net/media/images/242708__4_5__20240212090934366_width_1024.jpg",
            size:["s", "l", "xl", "xxl"],
            price:3250,
            category: 'shirts'
        },

        
    ]
    const searchInput = document.getElementById('searchInput');
    const searchForm = document.getElementById('searchForm');
    const all_product = document.getElementById('All_products');
    
    function show_product(data) {
        all_product.innerHTML = ""; 
        data.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product', 'col-lg-3', 'col-md-6', 'col-sm-12', 'mb-4', 'single-product');
            productDiv.dataset.category = product.category;
            productDiv.innerHTML = `
                <div>
                    <img class="product-image" src="${product.image}" />
                </div>
                <h4>${product.title}</h4>
                <p>Product Code: ${product.code}</p>
                <p>Color: ${product.color}</p>
                <p>Size:
                    ${product.size.map(size =>
                        `<button onclick="selectSize(${product.id}, '${size}')" class="size-btn">${size}</button>`).join(' ')
                    }
                </p>
                <p>Price: ${product.price}</p>
                <button style="background-color: #FF136F;"
                    onclick="add_to_cart('${product.title}', '${product.code}', '${product.price}', '${product.image}', ${product.id})"
                    class="buy-now btn btn-primary">
                    Add to Cart
                </button>
            `;
            all_product.appendChild(productDiv);
        });
    }
    
    function filterProducts(filter) {
        let filteredProducts = products;
        if (filter) {
            filteredProducts = products.filter(product =>
                product.category.toLowerCase() === filter.toLowerCase() ||
                product.title.toLowerCase().includes(filter.toLowerCase())
            );
        }
        show_product(filteredProducts);
    }
    
   
    show_product(products);
    
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const searchTerm = searchInput.value.trim();
        filterProducts(searchTerm);
    });
    
    searchInput.addEventListener('focus', function() {
        this.value = '';
        show_product(products);
    });
    
    function showAllProducts() {
        show_product(products);
}


showAllProducts();

let count = 0;
let cart_items = [];

let selectedSizes = {};

function selectSize(productId, size) {
    selectedSizes[productId] = size;
    
}

function add_to_cart(title, code, price, image, id) {
    if (selectedSizes[id] == null) {
        alert("Please select a size before adding to cart!");
        return;
    }

    let existingItem = cart_items.find(item => item.Code === code && item.Size === selectedSizes[id]);

    if (existingItem) {
        existingItem.Quantity += 1;
        existingItem.TotalPrice = existingItem.Quantity * existingItem.Price;
    } else {
        cart_items.push({
            "Title": title,
            "Code": code,
            "Price": parseFloat(price),
            "Quantity": 1,
            "TotalPrice": parseFloat(price),
            "Image": image,
            "Size": selectedSizes[id]
        });
    }
    delete selectedSizes[id];

    updateCartCount();
    updateCartModal();
    resetPromoCode();
}

function updateCartCount() {
    count = cart_items.reduce((total, item) => total + item.Quantity, 0);
    document.getElementById('total_count').innerText = count;
}

function updateCartModal() {
    let cartItemsContainer = document.getElementById('cart-items');
    let totalProducts = document.getElementById('total-Products');
    let totalPriceElement = document.getElementById('price');

    cartItemsContainer.innerHTML = "";
    let totalPrice = 0;

    cart_items.forEach((product, index) => {
        cartItemsContainer.innerHTML += `
            <tr>
                <td><img src="${product.Image}" width="100px"></td>
                <td>
                    <p><strong>${product.Title}</strong></p>
                    <p>Product Code: ${product.Code}</p>
                    <p>Size: ${product.Size}</p>
                    <p>Price: ${product.Price.toFixed(2)} Taka</p>
                </td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="decreaseQuantity(${index})">-</button>
                    <span>${product.Quantity}</span>
                    <button class="btn btn-success btn-sm" onclick="increaseQuantity(${index})">+</button>
                </td>
                <td>${product.TotalPrice.toFixed(2)} Taka</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Remove</button>
                </td>
            </tr>
        `;
        totalPrice += product.TotalPrice;
    });

    totalProducts.innerText = count;
    totalPriceElement.innerText = totalPrice.toFixed(2);

    let deliveryCharge = 130;
    let tax = totalPrice * 0.05;
    let total = totalPrice + deliveryCharge + tax;

    document.getElementById('total-tax').innerText = tax.toFixed(2);
    document.getElementById('total').innerText = total.toFixed(2);
}

function increaseQuantity(index) {
    cart_items[index].Quantity += 1;
    cart_items[index].TotalPrice = cart_items[index].Quantity * cart_items[index].Price;
    updateCartCount();
    updateCartModal();
}

function decreaseQuantity(index) {
    if (cart_items[index].Quantity > 1) {
        cart_items[index].Quantity -= 1;
        cart_items[index].TotalPrice = cart_items[index].Quantity * cart_items[index].Price;
    } else {
        cart_items.splice(index, 1);
    }
    updateCartCount();
    updateCartModal();
}

function removeFromCart(index) {
    cart_items.splice(index, 1);
    updateCartCount();
    updateCartModal();
}

function openModal() {
    document.getElementById('postModal').style.display = "block";
}

function closeModal() {
    document.getElementById('postModal').style.display = "none";
}

let discountApplied = false;

function promo_code() {
    if (discountApplied) {
        alert("Promo code already applied!");
        return;
    }

    const promoInput = document.getElementById('input-field');
    const promo = promoInput.value.trim();
    const totalElement = document.getElementById("total");
    const total_cost = parseFloat(totalElement.textContent); 

    if (promo === 'Ahnaf') {
        const discountedPrice = total_cost - (total_cost * 0.10);
        totalElement.textContent = discountedPrice.toFixed(2); 

        discountApplied = true;
    }

    promoInput.value = "";
}

function resetPromoCode() {
    document.getElementById('input-field').value = "";
    discountApplied = false;
}





