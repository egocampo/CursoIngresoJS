/*Enunciado: al presionar el botón se pedira, a traves de prompt, numeros que seran guardados en un vector
y luego serán mostrados mediante document.write().*/
function mostrar()
{
	var arrayNumeros=[];
	var continuar;
	for(var i=0;;i++)
	{
		arrayNumeros.push(parseInt(prompt("Ingrese un número")));
		continuar=confirm("¿Desea continuar?");
		if(!(continuar))
		{
			break;
		}
	}
	for(var i=0;i<arrayNumeros.length;i++)
	{
		console.log(arrayNumeros[i]);
	}
}//FIN DE LA FUNCIÓN
		