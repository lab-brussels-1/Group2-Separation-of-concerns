document.getElementById('add-product').addEventListener('click', (event) => {
  const item = document.getElementById('input-text-id').value;
  const x = document.getElementById('mySelect');
  const option = document.createElement('option');
  option.text = item;
  x.add(option, x[0]);
});
