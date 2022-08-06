    document.getElementById('add-product').addEventListener('click', (event) =>{
	// read & process user input
	const form = event.target.form;
	const valueToadd = form.value.value;
	let newvariable;
	newvariable = String(valueToadd);
	var x = document.getElementById('mySelect');
	var option = document.createElement('option');
	option.text = newvariable;
	x.add(option, x[0]);
	// communicate result to user
	// document.getElementById('added-value').innerHTML =newvariable;
});
