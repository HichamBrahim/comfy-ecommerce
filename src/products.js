import { cartAction, fixScroll, navAction } from "./actions.js";
import { addItemtoCart, addtoCart } from "./cart.js";
import { filterByBrands, filterByPrice, filterBySearch } from "./filter.js";
import { displayProducts, products } from "./products/displayProducts.js";


// toggle Nav Bar
navAction();

// toggle Cart
cartAction();
// fix scrolling
fixScroll();

// display products
await displayProducts(products);

// filter products
filterByBrands();

filterByPrice();

filterBySearch();

// shopping Cart

//add item to Cart
addtoCart();

addItemtoCart();

