function mostrar()
{
	let precioString;
	let descuentoString;
	let precioInt;
	let descuentoInt;
	let precioFinal;

	precioString=prompt("Ingrese el precio del producto");
	descuentoString=prompt("Ingrese el porcentaje del descuento");
	precioInt=parseInt(precioString);
	descuentoInt=parseInt(descuentoString);

	precioFinal=precioInt*(100-descuentoInt)/100;
	elPrecioFinal.value=precioFinal;
}