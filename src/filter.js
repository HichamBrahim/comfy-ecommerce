import { displayProducts, products } from "./products/displayProducts.js";



const brandNames = [...document.querySelectorAll('.brand-name')];
const rangePrice = document.getElementById('range');
const changePrice = document.querySelector('.change-price');
const productsContainer = document.getElementById('products');
const searchInput = document.querySelector('.search');

export function filterByBrands() {
    brandNames.forEach(brand => {
        brand.addEventListener('click' , () => {
            let category = brand.dataset.category;
            let filterProducts = products.filter((product => product.category ==category));
            filterProducts.length > 0 ? displayProducts(filterProducts) : displayProducts(products);
        })
    })
}

export function filterByPrice() {
     rangePrice.addEventListener('input' , () => {
     changePrice.innerText = `value : $${rangePrice.value}`;
     let filterProducts = products.filter((product => product.price <=  rangePrice.value));
     if(filterProducts.length > 0) {
        displayProducts(filterProducts);
        productsContainer.classList.add('grid');
     }
     else {
        productsContainer.classList.remove('grid');
        productsContainer.innerHTML = `<div class='text-center text-3xl text-clr_grey_1'>Sorry, No Products Matched Your Search</div>`;
     }
     })
}
export function filterBySearch() {
   searchInput.addEventListener('input' , () => {
        let search = "";
        let array = searchInput.value.split(' ');
        for(let i=0; i<array.length; i++) {
            array[i] = (array[i].charAt(0)).toUpperCase() + array[i].slice(1);
        }
        search = array.join(' ');
        let filterProducts = products.filter((product => product.title.includes(search)));
        if(filterProducts.length > 0) {
            displayProducts(filterProducts);
            productsContainer.classList.add('grid');
         }
         else {
            productsContainer.classList.remove('grid');
            productsContainer.innerHTML = `<div class='text-center text-3xl text-clr_grey_1'>Sorry, No Products Matched Your Search</div>`;
         }
   })
}