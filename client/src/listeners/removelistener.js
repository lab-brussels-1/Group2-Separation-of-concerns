import { REMOVE_CLICK_EVENT } from '../../data/constants.js';
import { removeItem } from '../handlers/remove-handler.js';

export const removeClick = (value) => {
  value.addEventListener(REMOVE_CLICK_EVENT, removeItem);
};