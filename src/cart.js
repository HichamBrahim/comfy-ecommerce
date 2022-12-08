import {products } from "./products/displayProducts.js";
import { setStorage , getStorage} from "./storage.js";

const cartContainer = document.querySelector('.cart-container');
const cartOverlay = document.querySelector('.cart-overlay');
const numberProducts = document.querySelector('.shopping-icon .product-number');
const cartTotal = document.querySelector('footer .total');

 let cart = getStorage();
export async function addtoCart() {
    const addtoCartBtns = Array.from(document.querySelectorAll('.addtoCart-icon'));
    addtoCartBtns.forEach(Btn => {
        Btn.addEventListener('click' , () => {
            let id = Btn.dataset.id;
            let item = products.find(item => item.id == id);
            let search = cart.find(cartItem => cartItem.id == id);
            if(search) {
                search.qty += 1;
                cart = cart.map( cartItem => (cartItem.id == search.id) ? search : cartItem);
            }
            else {
                cart.push({...item , qty:1});
            }
            setStorage(cart);
            addItemtoCart();
            cartOverlay.classList.add('active');            
        })
    })
}
export function addItemtoCart() {
    cartContainer.innerHTML = cart.length === 0 ? "" : cart.map(item => {
        let { id , img , title , price , qty } = item;
        return `
    <div class="item mt-6 flex items-center gap-5">
    <img class="rounded max-w-75" src="${img}" alt="${title}">
    <div class="infos flex-1">
        <h4>${title}</h4>
        <span class="price">$${price}</span>
        <div class="remove text-clr-grey-5 text-clr_grey_5 cursor-pointer" onclick='removeItem(${id})'>remove</div>
    </div>
    <div class="update flex flex-col items-center">
        <button class="increase-btn text-clr_primary_5 " onclick='increment(${id})' ><i  class="fas fa-chevron-up"></i></button>
        <span class="number-items">${qty}</span>
        <button class="decrease-btn text-clr_primary_5" onclick='decrement(${id})'><i  class="fas fa-chevron-down"></i></button>
    </div>
</div>
    `;
    }).join('');
    numberProducts.innerText = cart.length === 0 ? 0 : cart.reduce((x , y) => x + y.qty,0);
    cartTotal.innerText = cart.length === 0 ?  `Total :$0.00` : `Total :$${(cart.reduce((x , y) => x + (y.qty * y.price) , 0)).toFixed(2)}`;
}


 function increment(id) {     
    let item = cart.find(cartItem => cartItem.id == id);
    if(item) {
         item.qty += 1;
    }
    else {
        return 0;
    }
   
    cart = cart.map( cartItem => (cartItem.id == item.id) ? item : cartItem);
    addItemtoCart(cart);
    setStorage(cart);
}

 function decrement(id) {     
    let item = cart.find(cartItem => cartItem.id == id);
       if(item && item.qty > 1) {
            item.qty -= 1;
       }
        else if(item.qty <= 1) {
            cart = cart.filter(cartItem => cartItem.id != id); 
            }    
            
        else {
            return 0;
        } 
        cart = cart.map( cartItem => (cartItem.id == item.id) ? item : cartItem);
        addItemtoCart(cart);
        setStorage(cart);
}


 function removeItem(id) {
    let item = cart.find(cartItem => cartItem.id == id);
        cart = cart.filter(cartItem => cartItem.id != id);     
        addItemtoCart(cart);
        setStorage(cart);
}



export function addProductstoCart() {
    const cart_Btns =[...document.querySelectorAll('.addtoCart')];
    cart_Btns.forEach(cart_btn => {
        cart_btn.addEventListener('click' , () => {
            let id = cart_btn.dataset.id;
            let item = products.find(item => item.id == id);
            let search = cart.find(cartItem => cartItem.id == id);
            if(search) {
                search.qty += 1;
                cart = cart.map( cartItem => (cartItem.id == search.id) ? search : cartItem);
            }
            else {
                cart.push({...item , qty:1});
            }
            setStorage(cart);
            addItemtoCart();
            cartOverlay.classList.add('active');
        })
    })
}



window.increment = increment;
window.decrement = decrement;
window.removeItem = removeItem;



