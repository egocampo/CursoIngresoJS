/*Enunciado: al presionar el botón pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	do
	{
		numeroIngresado=prompt("Ingrese un número entre 0 y 9 inclusive");
		numeroIngresado=parseInt(numeroIngresado);
	}while(numeroIngresado<0 || numeroIngresado>9);
	document.getElementById('txtIdNumero').value=numeroIngresado;
}