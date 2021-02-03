function mostrar()
{
	// Declaración de variables
	var precioInicialString;
	var descuentoString;
	var precioInicialInt;
	var descuentoInt;
	var precioFinal;

	// Pido los datos al usuario
	precioInicialString=prompt("Ingrese el precio del producto");
	descuentoString=prompt("Ingrese el porcentaje de descuento");

	// Parseo los datos ingresados por el usuario
	precioInicialInt=parseInt(precioInicialString);
	descuentoInt=parseInt(descuentoString);

	// realizo el cálculo
	precioFinal=precioInicialInt*(100-descuentoInt)/100;

	// Muestro el resultado en la caja de texto
	elPrecioFinal.value=precioFinal;
}