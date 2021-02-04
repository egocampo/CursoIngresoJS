function mostrar()
{
	// Declaro las variables
	var edadString;
	var edadInt;

	// Capturo la edad desde el cuadro por id
	edadString = txtIdEdad.value;

	// Parseo la edad
	edadInt=parseInt(edadString);

	// Planteo el condicional
	if(edadInt>=18){
		alert("La persona es mayor de edad");
	}
	else{
		alert("La persona es menor de edad");
	}
}