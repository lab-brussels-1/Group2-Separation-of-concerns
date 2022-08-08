document.getElementById('add-product').addEventListener('click', (event) => {
  const item = document.getElementById('input-text-id').value
 // const valueToadd = item.value.value;
 // const newvariable = String(valueToadd);
  const x = document.getElementById('mySelect');
  const option = document.createElement('option');
  option.text = item;
  x.add(option, x[0]);
});
