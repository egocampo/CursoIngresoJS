function mostrar()
{
	// Declaro las variables
	var edadString;
	var edadInt;

	// Capturo la edad desde la caja de texto por id
	edadString=txtIdEdad.value;

	// Parseo la edad
	edadInt=parseInt(edadString);

	// Realizo el condicional
	if(edadInt>=13 && edadInt<=17){
		alert("La persona es adolescente");
	}
}