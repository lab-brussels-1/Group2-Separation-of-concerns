import { OUTPUT_ID, ADDED_ITEM_ID } from '../../data/constants.js';
import { renderCart } from '../components/cartcomponent.js';
import { pushToCartState } from '../utils/pushToCartState.js';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter.js';

export const addToCart = () => {
  const selectedItem = document.getElementById(OUTPUT_ID).value;
  pushToCartState(capitalizeFirstLetter(selectedItem));
  const cartValue = renderCart();
  document.getElementById(ADDED_ITEM_ID).innerHTML = cartValue;
};
