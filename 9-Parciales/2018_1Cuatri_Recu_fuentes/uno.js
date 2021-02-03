
function mostrar()
{
	// Reservo espacio en memoria para las variables
	var anchoString;
	var largoString;
	var anchoInt;
	var largoInt;
	var perimetro;

	// Tomo los datos del usuario
	anchoString=prompt("Ingrese el ancho");
	largoString=prompt("Ingrese el largo");

	// Convierto los datos a enteros
	anchoInt=parseInt(anchoString);
	largoInt=parseInt(largoString);

	// Realizo el cálculo
	perimetro=2*(anchoInt+largoInt);

	// Muestro el resultado
	alert("El perímetro es: "+perimetro);
}
