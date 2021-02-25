/*Enunciado: al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado, y mostrar la cantidad de numeros divisores encontrados.*/
function mostrar()
{
	var numeroIngresado;
	var contadorDivisores=0;
	numeroIngresado=prompt("Ingrese un número");
	numeroIngresado=parseInt(numeroIngresado);
	for(var i=1;i<=numeroIngresado;i++)
	{
		if(numeroIngresado%i==0)
		{
			document.write(i+"<BR>");
			contadorDivisores++;
		}
	}
	document.write("El número "+numeroIngresado+" tiene "+ contadorDivisores+" divisores<BR>");
}//FIN DE LA FUNCIÓN