import { ADD_CART_CLICK_EVENT } from '../../data/constants.js';
import { addToCart } from '../handlers/carthandler.js';

export const cartClick = (value) => {
  value.addEventListener(ADD_CART_CLICK_EVENT, addToCart);
};