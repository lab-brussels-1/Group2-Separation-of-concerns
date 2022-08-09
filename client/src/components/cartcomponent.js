/* eslint-disable prefer-template */
// eslint-disable-next-line boundaries/element-types
import { state } from '../../data/state.js';

export const renderCart = () => {
  // adding value to the output container
  const updatedCarts = Object.entries(state.carts);

  // updating the cart component
  const cartList = updatedCarts
    .map(
      ([key, value]) => '<li><label>'
        + key
        + '</label> <button class="increase" id="increase">+</button><label>'
        + value
        + '</label><button class="decrease" id="decrease">-</button></li>',
    )
    .join('\n');

  return '<ul>' + cartList + '</ul>';
};
