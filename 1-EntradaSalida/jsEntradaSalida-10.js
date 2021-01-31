/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let importeConDescuento;

	// Capturo el importe desde txtIdImporte y lo almaceno en la variable importe
	importe = document.getElementById('txtIdImporte').value;

	// Calculo el importe con un descuento del 25%, o lo que es lo mismo, el 75% del importe original.
	importeConDescuento = importe * .75;

	// Muestro el importe con descuento redondeado con dos decimales en el cuadro txtIdResultado
	document.getElementById('txtIdResultado').value = importeConDescuento.toFixed(2);
}
