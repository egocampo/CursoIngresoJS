function mostrar()
{
	// Declaro las variables
	var edadString;
	var edadInt;

	// Capturo la edad desde la caja de texto por id
	edadString=txtIdEdad.value;

	// Parseo la edad
	edadInt=parseInt(edadString);

	// Tomo el mismo enunciado del ej04 y lo niego para indicar que la persona no esta en ese rango etario.
	if(!(edadInt>=13 && edadInt<=17)){
		alert("La persona NO es adolescente");
	}
}