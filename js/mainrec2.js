
function generar() {
	document.getElementById("edad").value = Math.floor(Math.random() * (99 - 18) + 18);
	document.getElementById("altura").value = (Math.random() * (2.5 - 1.5) + 1.5).toFixed(2);
	document.getElementById("peso").value = (Math.random() * (130 - 20) + 20).toFixed(2);
	document.getElementById("imc").value = "";
	document.getElementById("nivel").value = "";
}
function calcular() {
	var altura = document.getElementById("altura").value;
	var peso = document.getElementById("peso").value;

	var imc = peso / Math.pow(altura, 2);

	if (imc < 18.5) {
		document.getElementById("nivel").value = "Bajo peso";
	} else if (imc >= 18.5 && imc <= 24.9) {
		document.getElementById("nivel").value = "Peso Saludable";
	} else if (imc >= 25.0 && imc <= 29.9) {
		document.getElementById("nivel").value = "Sobrepeso";
	} else if (imc > 30.0) {
		document.getElementById("nivel").value = "Obesidad";
	} else {
		return alert("Introduzca bien los datos");
	}

	document.getElementById("imc").value = imc.toFixed(2);
}
