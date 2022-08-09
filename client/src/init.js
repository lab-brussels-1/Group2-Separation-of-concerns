/*
 */
import { USER_ACTION, REMOVE_ID, ADD_CART_ID } from '../data/constants.js';
import { click } from './listeners/addlistener.js';
import { removeClick } from './listeners/removelistener.js';
import { cartClick } from './listeners/cartlistener.js';

click(document.getElementById(USER_ACTION));
removeClick(document.getElementById(REMOVE_ID));
cartClick(document.getElementById(ADD_CART_ID));
