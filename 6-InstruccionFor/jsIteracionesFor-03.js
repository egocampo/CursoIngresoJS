/*Enunciado: al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"*/
function mostrar()
{
	var cantidadRepeticiones;
	cantidadRepeticiones=prompt("Ingrese la cantidad de repeticiones");
	cantidadRepeticiones=parseInt(cantidadRepeticiones);
	for(var i=1;i<=cantidadRepeticiones;i++)
	{
		document.write(i+") Hola UTN FRA<BR>");
	}
}//FIN DE LA FUNCIÓN