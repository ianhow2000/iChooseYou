let pageheader = document.querySelector('header')
let pagemenu = document.querySelector('header')
let cartmenu = document.querySelector('body');

//page icon//
let page_header = document.createElement('div');
page_header.classList.add('icon-container');
page_header.innerHTML=`

<div class="title-container">
    <a href="index.html">
        <img src = "images/title.png" alt="icon" class="icon">
    </a>
</div>
<div class="cart-container">
    <img src="images/cart.png" alt="cart" class="cart">
    <span class="cart-quantity">0</span>
</div>
`
pageheader.appendChild(page_header);

//page menu//
let page_menu = document.createElement('div');
page_menu.classList.add('menu-container');
page_menu.innerHTML=`

<nav>
<ul class="menu-list">
    <li>
        <a href="pokedex.html" class="item-link"><button class="menu-button"><img src="images/pokedex.png" alt="pokedex" class="button-img">Pokedex</button></a>
    </li>
    <li>
        <a href="AboutUs.html" class="item-link"><button class="menu-button"><img src="images/about us.png" alt="about us" class="button-img">About Us</button></a>
    </li>
    <li>
        <a href="ContactUs.html" class="item-link"><button class="menu-button"><img src="images/contact us.png" alt="contact us" class="button-img">Contact Us</button></a>
    </li>
</ul>
</nav>
`
pagemenu.appendChild(page_menu);

//cart//
let cart_menu = document.createElement('div');
cart_menu.classList.add('cart-tab');
cart_menu.innerHTML=`
<h1>Your Cart</h1>
<div class="cart-list">

</div>
<div class="total-price">
    <span>Total Price: rm</span>
    <span>0</span>
    <div class="clear-cart">
    <button>Clear Cart</button>
    </div>
</div>

<div class="cart-button">
    <button class="cart-close">CLOSE</button>
    <button class="cart-checkout">CHECKOUT</button>
</div>
`
cartmenu.appendChild(cart_menu);