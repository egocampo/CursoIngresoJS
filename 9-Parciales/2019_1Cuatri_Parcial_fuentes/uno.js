
function mostrar()
{
	// Declaración de variables
	var ladoString;
	var ladoInt;
	var perimetro;

	// Recepción de datos del usuario
	ladoString=prompt("Ingrese la medida de lado del triángulo equilátero");

	// Parseo de datos
	ladoInt=parseInt(ladoString);

	// Realizo los cálculos
	perimetro=3*ladoInt;

	// Muestro el resultado
	alert("El perímetro del triángulo equilátero es "+perimetro);
}
