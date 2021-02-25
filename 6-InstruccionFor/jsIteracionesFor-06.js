/*Enunciado: al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.*/
function mostrar()
{
	var numeroIngresado;
	var contadorPares=0;
	numeroIngresado=prompt("Ingrese un número");
	numeroIngresado=parseInt(numeroIngresado);
	for(var i=1;i<numeroIngresado;i++)
	{
		if(i%2==0)
		{
			document.write(i+"<BR>");
			contadorPares++;
		}
	}
	if(contadorPares==0)
	{
		document.write("No hay números pares<BR>");
	}
	else
	{
		document.write("Hay "+contadorPares+" números pares<BR>");
	}
}//FIN DE LA FUNCIÓN