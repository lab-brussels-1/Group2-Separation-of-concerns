import { OUTPUT_ID,  } from '../../data/constants.js';

export const removeItem = () => {
  const list = document.getElementById(OUTPUT_ID);
  list.remove(list.selectedIndex);
};
