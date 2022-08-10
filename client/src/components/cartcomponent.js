/* eslint-disable prefer-template */
// eslint-disable-next-line boundaries/element-types
import { state } from '../../data/state.js';

export const renderCart = () => {
  // adding value to the output container
  const updatedCarts = Object.entries(state.carts);

  const ul = document.createElement('ul');

  // updating the cart component
  updatedCarts.map(
    // eslint-disable-next-line array-callback-return
    ([key, value]) => {
      const li = document.createElement('li');
      const label1 = document.createElement('label');
      label1.innerText = key;
      const label2 = document.createElement('label');
      label2.innerText = value;
      li.appendChild(label1);
      const increaseBtn = document.createElement('button');
      increaseBtn.setAttribute('class', 'increase');
      increaseBtn.setAttribute('id', 'increase');
      increaseBtn.innerText = '+';
      li.appendChild(increaseBtn);
      li.appendChild(label2);
      const decreaseBtn = document.createElement('button');
      decreaseBtn.setAttribute('class', 'decrease');
      decreaseBtn.setAttribute('id', 'decrease');
      decreaseBtn.innerText = '-';
      li.appendChild(decreaseBtn);
      ul.appendChild(li);
    },
  );

  return ul;
};
