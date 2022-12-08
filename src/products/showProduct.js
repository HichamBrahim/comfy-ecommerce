import {products } from "./displayProducts.js";

const productContainer = document.querySelector('.product-container');
const titleBar = document.querySelector('.title-bar h1');
export async function showItem() {
    let baseUrl = (window.location).href;
    let productId = baseUrl.substring(baseUrl.lastIndexOf('=') + 1);
    let item = products.find( product => product.id == productId );
    let { id , img , title , price , desc} = item;
    titleBar.innerText = `Home / ${title}`;
            productContainer.innerHTML = `
            <div class="product-image flex-1">
            <img class="rounded-md" src="${img}" alt="${title}">
        </div>
        <div class="product-infos flex flex-col gap-4 flex-1">
            <h1 class="name text-clr_grey_1 tracking-wider text-2xl md:text-4xl">${title}</h1>
            <span class="category text-clr_grey_8 text-xl font-medium tracking-wider uppercase font-ff">By IKEA</span>
            <span class="price text-xl text-clr_grey_3 font-semibold">$${price}</span>
            <div class="options mt-4 flex items-center space-x-2">
                <span class="inline-block w-4 h-4 rounded-full bg-[#F15025]"></span>
                <span class="inline-block w-4 h-4 rounded-full bg-[#222222]"></span>
            </div>
            <p class="desc pt-4 text-clr_grey_5 tracking-wider leading-7 max-w-md">${desc}</p>
            <button class="addtoCart px-4 py-1 rounded bg-clr_primary_5 text-white text-md font-normal w-fit tracking-wider hover:bg-clr_primary_7 hover:text-black duration-300" data-id='${id}'>ADD TO CART</button>
        </div>
            `;

}