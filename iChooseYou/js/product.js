let product_page_HTML = document.querySelector('[class="product"]')

product_page_HTML.addEventListener('click', (event) =>{
    let clickpos = event.target;
    if(clickpos.classList.contains('add-to-cart-button')){
        let product_id = clickpos.parentElement.parentElement.dataset.id;
        console.log(product_id)
        addToCart(product_id);
    }

});

const addToCart = (product_id) => {
    let ProductPosInCart = carts.findIndex((value) => value.product_id == product_id);
    if(carts.length <= 0){
        carts = [{
            product_id: product_id,
            quantity: 1
        }]
    }
    else if(ProductPosInCart < 0){
        carts.push({
            product_id: product_id,
            quantity: 1
        })

    }
    else{
        carts[ProductPosInCart].quantity = carts[ProductPosInCart].quantity + 1;
    }

    addCartToHTML();
    addCartToMemory();
}
