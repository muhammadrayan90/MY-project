
const addToCartButtons = document.querySelectorAll('.product button');
const cartCountElement = document.getElementById('cart-count');

let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
cartCountElement.textContent = cartCount;

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        
        cartCount++;

        localStorage.setItem('cartCount', cartCount);

       
        cartCountElement.textContent = cartCount;

        
        alert('Product added to cart!');
    });
});
