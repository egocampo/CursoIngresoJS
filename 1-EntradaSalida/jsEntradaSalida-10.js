/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importeString;
	let importeInt;
	let descuento;
	let porcentajeDescuento=25;
	let importeConDescuento;

	// Capturo el importe desde txtIdImporte y lo almaceno en la variable importe
	importeString = txtIdImporte.value;
	importeInt=parseInt(importeString);

	// Calculo el descuento
	descuento = importeInt * porcentajeDescuento/100;

	// Calculo el importe con descuento
	importeConDescuento=importeInt-descuento;

	// Muestro el importe con descuento redondeado con dos decimales en el cuadro txtIdResultado
	txtIdResultado.value = importeConDescuento.toFixed(2);
}
