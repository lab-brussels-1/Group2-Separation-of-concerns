document.getElementById('add-product').addEventListener('click', (event) => {
  const item = event.target.form;
  const additem= item.value.value;
  const x = document.getElementById('mySelect');
  const option = document.createElement('option');
  option.text = additem;
  x.add(option, x[0]);
});
