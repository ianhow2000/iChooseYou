let cart_icon = document.querySelector('[class="cart"]');
let close_cart = document.querySelector('[class="cart-close"]');
let body = document.querySelector('body');
let cart_list_HTML = document.querySelector('[class="cart-list"]');
let cart_total_price = document.querySelector('[class=cart-tab] [class=total-price] span:nth-child(2)');
let cart_item_quantity = document.querySelector('[class=cart-container] [class=cart-quantity]');

let carts = [];

cart_icon.addEventListener('click', () =>{
    body.classList.toggle('showcart');
});

close_cart.addEventListener('click', () =>{
    body.classList.toggle('showcart');
});

const addCartToHTML = () => {
    cart_list_HTML.innerHTML = '';
    let total_product_quantity = 0;
    let total_price = 0;
    if(carts.length > 0){
        console.log('qwe');
        carts.forEach(cart => {
            total_product_quantity = total_product_quantity + cart.quantity;
            let newCart = document.createElement('div');
            newCart.classList.add('cart-item');
            newCart.dataset.id = cart.product_id;
            let product_pos = product_list.findIndex((value) => value.id == cart.product_id);
            let info = product_list[product_pos];
            newCart.innerHTML = `
            <div class="item-image">
            <img src="${info.image}" alt="${info.name}">
            </div>
            <div class="nameandprice">
                <div class="name">
                    ${info.name}
                </div>
                <div class="total-price">
                    rm${info.price * cart.quantity}
                </div>
            </div>
            <div class="quantity">
                <button class="minus">-</button>
                <span>${cart.quantity}</span>
                <button class="plus">+</button>
            </div>
            `
            cart_list_HTML.appendChild(newCart);
            total_price = total_price + info.price*cart.quantity;
            Number(total_price).toFixed(2);
        })
    }
    cart_total_price.innerText =  total_price;
    cart_item_quantity.innerText = total_product_quantity;
}

const addCartToMemory = () =>{
    localStorage.setItem('cart', JSON.stringify(carts));
}

cart_list_HTML.addEventListener('click', (event) => {
    let clickpos = event.target;
    if(clickpos.classList.contains('minus') || clickpos.classList.contains('plus')){
        let product_id = clickpos.parentElement.parentElement.dataset.id;
        let type = 'minus';
        if(clickpos.classList.contains('plus')){
            type = 'plus';
        }
        changeQuantity(product_id, type);
    }
});

const changeQuantity = (product_id, type) => {
    let ProductPosInCart = carts.findIndex((value) => value.product_id == product_id);
    if(ProductPosInCart >= 0){
        switch(type) {
            case 'plus':
                carts[ProductPosInCart].quantity = carts[ProductPosInCart].quantity + 1;
                break;

            default:
                let valuechange = carts[ProductPosInCart].quantity - 1;
                if(valuechange > 0){
                    carts[ProductPosInCart].quantity = valuechange;
                }
                else{
                    carts.splice(ProductPosInCart, 1);
                }
                break;
        }
    }
    addCartToMemory();
    addCartToHTML();
}

let checkout_button = document.querySelector('[class="cart-checkout"]')

checkout_button.addEventListener('click', () =>{
    if(carts.length <= 0){
        alert('there are no items in your cart')
    }
    else{
        location.href = "checkout.html";
    }
});

let clear_cart_button = document.querySelector('[class="clear-cart"]');

clear_cart_button.addEventListener('click', () =>{
    localStorage.clear();
    carts=[];
    cart_list_HTML.innerHTML = '';
    cart_total_price.innerText =  0;
    cart_item_quantity.innerText = 0;
});

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

addCartToHTML();
initApp();

