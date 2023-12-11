// Cart
let cartIcon = document.querySelector("#cart-icon"); //
let cart = document.querySelector(".cart");//
let cartShadow = document.querySelector(".cart-shadow");
let closeCart = document.querySelector("#close-cart");//
let seeMore = document.querySelector(".see-more");
// Open cart
cartIcon.onclick = () => { //
    cart.classList.add("active");//
    cartShadow.classList.add("active");
    seeMore.classList.add("active");
}
closeCart.onclick = () => {
    cart.classList.remove("active");//
    cartShadow.classList.remove("active");
    seeMore.classList.remove("active");
}
// Close cart
function cartClose () {
    cart.classList.remove("active");
    cartShadow.classList.remove("active");
    seeMore.classList.remove("active");
}






//Making Add to cart
//Cart working JS
if (document.readyState == "loading") { //
    document.addEventListener("DOMContentLoaded", ready); //
}else{ //
    ready();//
}//

//Making Function
function ready() {//
    //Remove item from cart
    var removeCartButtons = document.getElementsByClassName("cart-remove");//
    for (var i = 0; i < removeCartButtons.length; i++) {//
        var button = removeCartButtons[i];//
        button.addEventListener("click", removeCartItem);//
    }//
    //Quantity Change
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }
    //Add to cart
    var addCart = document.getElementsByClassName("add-cart");
    for (var i = 0; i < addCart.length; i++) {
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }
    loadCartItems();
}

//Remove cart item
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
    saveCartItems();
}
// Quantity change 
function quantityChanged(event){
    var input = event.target;
    if(isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updatetotal();
    saveCartItems();
    updateCartIcon();
}


//Add cart function
function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
    var price = shopProducts.getElementsByClassName('price')[0].innerText;
    var productImg = shopProducts.getElementsByClassName('product-img')[0].src;
    addProductToCart(title,price,productImg);
    updatetotal();
    saveCartItems();
    updateCartIcon();
}


function addProductToCart(title,price,productImg) {
    // let cartEmpty = document.querySelector('.cart-empty');
    // cartEmpty.style.display = "none";
    var cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box');
    var cartItems = document.getElementsByClassName('cart-content')[0];
    var cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
    for (var i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText == title) {
            alert('Vous avez déjà ajouté cette article au panier');
            return;
        }
    }
    var cartBoxContent = `
    <img src="${productImg}" alt="Image Panier" class="cart-img" >
    <div class="detail-box">
      <div class="cart-product-title">${title}</div>
        <div class="cart-price">${price}</div>
        <input 
        type="number" 
        name=""
        id=""
        value="1" 
        class="cart-quantity"
        draggable="false">
    </div>

    <!-- Remove Item -->
    <div class="cart-remove">Retirer</div>`;
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox
     .getElementsByClassName('cart-remove')[0]
     .addEventListener('click', removeCartItem);
    cartShopBox
     .getElementsByClassName('cart-quantity')[0]
     .addEventListener('change', quantityChanged);
    saveCartItems(); 
    updateCartIcon();
}



//Update Total
function updatetotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace(""," EUR"));
        var quantity = quantityElement.value;
        total += price * quantity;
    }
    //If price contain some cents
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName("total-price")[0].innerText = total + " EUR";
    // Save Total to localStorage
    localStorage.setItem("cartTotal", total);
    if (total == 0) {
        document.querySelector('.cart-empty').style.display = "block";
    }
}


//Keep Item in cart when page refresh with localstorage
function saveCartItems() {
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var cartItems = [];

    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var titleElement = cartBox.getElementsByClassName("cart-product-title")[0];
        var priceElement = cart.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var productImg = cartBox.getElementsByClassName('cart-img')[0].src;

        var item = {
            title: titleElement.innerText,
            price: priceElement.innerText,
            quantity: quantityElement.value,
            productImg: productImg,
        };
        cartItems.push(item);
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}
// Loads In Cart
function loadCartItems() {
    var cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
        cartItems = JSON.parse(cartItems);

        for (var i = 0; i < cartItems.length; i++) {
            var item = cartItems[i];
            addProductToCart(item.title, item.price, item.productImg);

            var cartBoxes = document.getElementsByClassName("cart-box");
            var cartBox = cartBoxes[cartBoxes.length -1];
            var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
            quantityElement.value = item.quantity;
        }
    }
    var cartTotal = localStorage.getItem("cartTotal");
    if(cartTotal) {
        document.getElementsByClassName("total-price")[0].innerText = 
            cartTotal + " EUR";
    }
    updateCartIcon();
}

//Quantity In cart Icon
function updateCartIcon() {
    var cartBoxes = document.getElementsByClassName('cart-box');
    var quantity = 0;

    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        quantity += parseInt(quantityElement.value);
    }
    var cartIcon = document.querySelector('#cart-icon');
    cartIcon.setAttribute('data-quantity', quantity);

    if (quantity > 0) {
        document.querySelector('.cart-empty').style.display = "none";
    }
}
//Clear Cart Item After Successful Payment
function clearCart(){
    var cartContent = document.getElementsByClassName('cart-content')[0];
    cartContent.innerHTML = '';
    updatetotal();
    localStorage.removeItem('cartItems');
}