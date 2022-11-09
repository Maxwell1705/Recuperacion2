var imcTotal = 0;
var numRegistros = 0;

var btnGenerar = document.getElementById("btnGenerar");
var btnCalcular = document.getElementById("btnCalcular");
var btnRegistrar = document.getElementById("btnRegistrar");
var btnBorrarRegistro = document.getElementById("btnBorrarRegistro");
var registros = document.getElementById("registros");

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

function registrar() {
	if ( document.getElementById("edad").value === "" || document.getElementById("altura").value === "" || document.getElementById("peso").value === "" ) {
		return alert("Presione el boton de generar");
	}

	if (document.getElementById("imc").value === "" || document.getElementById("nivel").value === "") {
		return alert("Presione el boton de calcular");
	}
	
	var imcConvertido = parseFloat(document.getElementById("imc").value);

	if (isNaN(imcConvertido)) {
		return alert("IMC invalido");
	}
	
	numRegistros += 1;
	imcTotal += imcConvertido;


	document.getElementById("promedioIMC").innerText = (imcTotal / numRegistros).toFixed(2);

	registros.innerHTML += `<tr>
		<td>${numRegistros}</td>
		<td>${document.getElementById("edad").value}</td>
		<td>${document.getElementById("altura").value}</td>
		<td>${document.getElementById("peso").value}</td>
		<td>${document.getElementById("imc").value}</td>
		<td>${document.getElementById("nivel").value}</td>
	</tr>`;
}

function borrarRegistro() {
	registros.innerHTML = "";
	document.getElementById("promedioIMC").innerText = "";
	imcTotal = 0;
	numRegistros = 0;
}

btnGenerar.addEventListener("click", generar);
btnCalcular.addEventListener("click", calcular);
btnRegistrar.addEventListener("click", registrar);
btnBorrarRegistro.addEventListener("click", borrarRegistro);
