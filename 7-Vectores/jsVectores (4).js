/*Enunciado: al presionar el botón se pedira, a traves de prompt, y numeros que seran guardados en un vector y luego seran mostrados mediante
document.write(). mostrar ademas la sumatoria de todos los numeros.*/
function mostrar()
{
	var arrayNumeros=[];
	var continuar;
	var acumulador=0;
	for(var i=0;;i++)
	{
		arrayNumeros.push(parseInt(prompt("Ingrese un número")));
		acumulador+=arrayNumeros[i];
		continuar=confirm("¿Desea continuar?");
		if(!(continuar))
		{
			break;
		}
	}
	for(var i=0;i<arrayNumeros.length;i++)
	{
		document.write(arrayNumeros[i]+"<BR>");
	}
	document.write("La suma de los números es: "+acumulador);
}//FIN DE LA FUNCIÓN