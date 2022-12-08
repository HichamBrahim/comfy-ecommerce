

const menuBtn = document.querySelector('.menu-btn');
const closeNav = document.querySelector('.menu .close');
const overlay = document.querySelector('.overlay');
const cartOverlay = document.querySelector('.cart-overlay');
const cartBtn = document.querySelector('.shopping-icon');
const closeCart = document.querySelector('.shopping-cart .close');
const settingContent = document.querySelector('.setting-content');

export function navAction() {
    menuBtn.onclick = function() {
        action(overlay);
    }
    closeNav.onclick = function() {
        action(overlay);
    }
} 
export function cartAction() {
    cartBtn.onclick = function() {
        cartOverlay.classList.add('active');
    }
    closeCart.onclick = function() {
    cartOverlay.classList.remove('active');
    }
}  
function action(element) {
    element.classList.toggle('hidden');
    element.classList.toggle('block');
}

export function fixScroll() {
    window.addEventListener('scroll' , () => {
        if(window.scrollY >= 256) {
            settingContent.classList.add('md:fixed');
        }
        else {
            settingContent.classList.remove('md:fixed');
        }

})
}