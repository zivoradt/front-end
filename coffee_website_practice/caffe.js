let navbar = document.querySelector('.nav-bar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active')
    search.classList.remove('active')
    cart.classList.remove('active');
}
let cart = document.querySelector('.cart-container');

document.querySelector('#cart-btn').onclick = () => {
    cart.classList.toggle('active')
    search.classList.remove('active')
    navbar.classList.remove('active');
    
}
let search = document.querySelector('.search');

document.querySelector('#search-btn').onclick = () => {
    search.classList.toggle('active')
    navbar.classList.remove('active')
    cart.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active')
    search.classList.remove('active')
    cart.classList.remove('active');

}