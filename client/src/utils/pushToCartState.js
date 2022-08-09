/* eslint-disable boundaries/element-types */
import { state } from '../../data/state.js';

export const pushToCartState = (string) => {
    const keysArr = Object.keys(state.carts);
    if (keysArr.includes(string)) {
      state.carts[string] += 1;
    } else {
      state.carts[string] = 1;
    }
  }