/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importeString;
	let importeInt;
	let importeConDescuento;

	// Capturo el importe desde txtIdImporte y lo almaceno en la variable importe
	importeString = txtIdImporte.value;
	importeInt=parseInt(importeString);

	// Calculo el importe con un descuento del 25%, o lo que es lo mismo, el 75% del importe original.
	importeConDescuento = importeInt * .75;

	// Muestro el importe con descuento redondeado con dos decimales en el cuadro txtIdResultado
	txtIdResultado.value = importeConDescuento.toFixed(2);
}
