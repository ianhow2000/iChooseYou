let checkout_list_HTML = document.querySelector('[class="products-container"]');
let checkout_total_price = document.querySelector('[class="customer-details-container"] [class="total-price"] span:nth-child(2)');

let carts=[];

const addCartToHTML = () => {
    checkout_list_HTML.innerHTML = '';
    let total_product_quantity = 0;
    let total_price = 0;
    if(carts.length > 0){
        carts.forEach(cart => {
            total_product_quantity = total_product_quantity + cart.quantity;
            let newCart = document.createElement('div');
            newCart.classList.add('products');
            newCart.dataset.id = cart.product_id;
            let product_pos = product_list.findIndex((value) => value.id == cart.product_id);
            let info = product_list[product_pos];
            newCart.innerHTML = `
                <div class="product-img">
                    <img src="${info.image}" alt="${info.name}">
                </div>
                <div class="product-name">
                    ${info.name}
                </div>
                <div class="product-quantity">
                    x${cart.quantity}
                </div>
                <div class="product-price">
                    rm${info.price*cart.quantity}
                </div>
            `
            checkout_list_HTML.appendChild(newCart);
            total_price = total_price + info.price*cart.quantity;
            Number(total_price).toFixed(2);
        })
    }
    checkout_total_price.innerText = total_price;
}

const initApp = () => {
    fetch('products.json')
    .then(response => response.json())
    .then(data => {
        product_list = data;

        if(localStorage.getItem('cart')){
            carts = JSON.parse(localStorage.getItem('cart'));
            addCartToHTML();
        }
    })
}

initApp();
addCartToHTML();


