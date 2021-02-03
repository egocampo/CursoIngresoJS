function mostrar()
{
	// Declaración de variables
	var precioInicialString;
	var descuentoString;
	var precioInicialInt;
	var descuentoInt;
	var precioFinal;

	// Captura de datos del usuario
	precioInicialString=prompt("Ingrese el precio del producto");
	descuentoString=prompt("Ingrese el porcentaje de descuento");

	// Parseo de datos
	precioInicialInt=parseInt(precioInicialString);
	descuentoInt=parseInt(descuentoString);

	// Cálculo del precio final
	precioFinal=precioInicialInt*(100-descuentoInt)/100;

	// Muestro el resultado por caja de texto
	elPrecioFinal.value=precioFinal;
}
