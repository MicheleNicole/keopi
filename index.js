const navMenu = document.querySelector('.nav-menu')
const searchForm = document.querySelector('.search-form')
const cart = document.querySelector('.cart-items-container')


document.querySelector('#menu-btn').onclick = () =>{
    navMenu.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
}

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navMenu.classList.remove('active');
    cart.classList.remove('active');
}

document.querySelector('#cart-btn').onclick = () => {
    cart.classList.toggle('active');
    navMenu.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    navMenu.classList.remove('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
}

