import { cartAction, navAction } from "./actions.js";
import { addItemtoCart, addProductstoCart } from "./cart.js";
import { showItem } from "./products/showProduct.js";




// toggle Nav Bar
navAction();

// toggle Cart
cartAction();

// show item
await showItem();

addItemtoCart();

addProductstoCart();