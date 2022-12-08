import { cartAction, navAction } from "./actions.js";
import { addItemtoCart } from "./cart.js";

// toggle Nav Bar
navAction();

// toggle Cart
cartAction();

addItemtoCart();