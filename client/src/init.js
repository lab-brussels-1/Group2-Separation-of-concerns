document.getElementById('add-product').addEventListener('click', (event) => {
  const form = event.target.form;
  const valueToadd = form.value.value;
  const newvariable = String(valueToadd);
  const x = document.getElementById('mySelect');
  const option = document.createElement('option');
  option.text = newvariable;
  x.add(option, x[0]);
});
