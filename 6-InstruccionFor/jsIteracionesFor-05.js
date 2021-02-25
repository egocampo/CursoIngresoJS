/*Enunciado: al presionar el botón repetir el pedido de número hasta que ingresemos el 9.*/
function mostrar()
{
	var numeroIngresado;
	for(;;)
	{
		numeroIngresado=prompt("Ingrese un número (Ingrese 9 para salir)")
		numeroIngresado=parseInt(numeroIngresado);
		if(numeroIngresado==9)
		{
			break;
		}
	}
}