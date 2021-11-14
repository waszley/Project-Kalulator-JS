
// Lobokno
function insert(num){
	document.form.textarea.value = document.form.textarea.value + num;
}

// Ngitung
function equal(){
	var hasil = document.form.textarea.value;
	document.form.textarea.value = eval(hasil);
}

// Ngaposs kabeh
function clean(){
	document.form.textarea.value = "";
}

// ngapos siji wae
function back(){
	var hasil = document.form.textarea.value;
	document.form.textarea.value = hasil.substring(0,hasil.length-1);
}