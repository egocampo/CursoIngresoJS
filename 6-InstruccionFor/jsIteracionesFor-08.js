/*Enunciado: al presionar el botón pedir un número. Informar si el numero es PRIMO o no. */
function mostrar()
{
	var numeroIngresado;
	var contadorDivisores=0;
	numeroIngresado=prompt("Ingrese un número");
	numeroIngresado=parseInt(numeroIngresado);
	for(var i=2;i<numeroIngresado;i++)
	{
		if(numeroIngresado%i==0)
		{
			contadorDivisores++;
		}
	}
	if(contadorDivisores==0)
	{
		alert("El número "+numeroIngresado+" es primo");
	}
	else
	{
		alert("El número "+numeroIngresado+" NO es primo");
	}
}//FIN DE LA FUNCIÓN