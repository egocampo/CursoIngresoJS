function mostrar()
{
	// Declaro las variables
	var edadString;
	var edadInt;

	// Capturo la edad desde la caja de texto por id
	edadString=txtIdEdad.value;

	// Parseo la edad
	edadInt=parseInt(edadString);

	// Planteo las condicionales
	if(edadInt>=18){
		alert("La persona es mayor de edad");
	}
	else if(edadInt>=13){
		alert("La persona es adolescente");
	}
	else {
		alert("La persona es menor de edad");
	}
}