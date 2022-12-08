import { cartAction, navAction } from "./actions.js";
import { addItemtoCart, addtoCart} from "./cart.js";
import { displayFeautures } from "./products/displayProducts.js";


// toggle Nav Bar
navAction();

// toggle Cart
cartAction();

// display Feautures
await displayFeautures();

// shopping Cart

//add item to Cart
addtoCart();

addItemtoCart();




