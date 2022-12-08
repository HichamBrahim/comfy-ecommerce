import { getProducts } from "./fetchProducts.js";

export const mainUrl = 'data/mainProducts.json';
const Url = 'data/products.json';
export const products = await getProducts(mainUrl);

const feauturesContainer = document.getElementById('feautures');
const productsContainer = document.getElementById('products');




export async function displayFeautures() {
    const products = await getProducts(Url);
    feauturesContainer.innerHTML = `${products.map(product => {
        let { id , img , title , price } = product;
        return `<div class="feauture">
        <div class="image relative ">
            <img class="w-full rounded  object-cover h-60 xl:h-52" src="${img}" alt="${title}">
            <div class="icons absolute -translate-y-1/2 duration-300 flex items-center gap-4">
                <a href="product.html?id=${id}" class="open-item text-white px-2 py-1 cursor-pointer rounded-full bg-clr_primary_5 duration-300 hover:bg-clr_primary_7"><i class="fa-solid fa-magnifying-glass"></i></a href="product.html?id=${id}">
                <span class="addtoCart-icon text-white px-2 cursor-pointer py-1 rounded-full bg-clr_primary_5 duration-300 hover:bg-clr_primary_7" data-id ='${id}'><i data-id ='${id}' class="fas fa-shopping-cart"></i></span>
            </div>
        </div>
        <h3 class="text-md text-clr_grey_5 mt-3 font-normal tracking-wider " id="name">${title}</h3>
        <h2 class="text-lg text-clr_grey_3 font-semibold" id="price">$${price}</h2>
    </div>`;
    }).join("")}`;
}

export async function displayProducts(products) {
    productsContainer.innerHTML = `${products.map(product => {
        let { id , img , title , price } = product;
        return `<div class="item">
        <div class="image relative ">
            <img class="w-full rounded object-cover h-60 lg:h-40" src="${img}" alt="${title}">
            <div class="icons duration-300 opacity-0 flex items-center absolute left-1/2 -translate-x-1/2 -translate-y-1/2 gap-4">
                <a href="product.html?id=${id}" class="open-item text-white px-2 py-1 cursor-pointer rounded-full bg-clr_primary_5 duration-300 hover:bg-clr_primary_7"><i class="fa-solid fa-magnifying-glass"></i></a>
                <span class="addtoCart-icon text-white px-2 cursor-pointer py-1 rounded-full bg-clr_primary_5 duration-300 hover:bg-clr_primary_7" data-id ='${id}'><i data-id ='${id}' class="fas fa-shopping-cart"></i></span>
            </div>
        </div>
        <h3 class="text-md text-clr_grey_5 mt-3 font-normal tracking-wider ">${title}</h3>
        <h2 class="text-lg font-semibold">$${price}</h2>
    </div>`;
    }).join("")}`;
}