document.getElementById('add-product').addEventListener('click', (event) => {
  const form = event.target.form;
  const valueToadd = form.value.value;
	let newvariable;
	newvariable = String(valueToadd);
	var x = document.getElementById('mySelect');
	var option = document.createElement('option');
	option.text = newvariable;
	x.add(option, x[0]);
});
