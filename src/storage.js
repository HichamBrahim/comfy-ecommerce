export function getStorage() {
    let cart = (window.localStorage.getItem('cartItems')) ? JSON.parse(window.localStorage.getItem('cartItems')) : []; 
    return cart;
}
export function setStorage(cart) {
    window.localStorage.setItem('cartItems' , JSON.stringify(cart));
}