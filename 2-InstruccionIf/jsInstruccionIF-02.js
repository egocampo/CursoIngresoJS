function mostrar()
{
	// Declaro las variables
	var edadString;
	var edadInt;

	// Pido y capturo la edad ingresada por el usuario
	edadString = txtIdEdad.value;

	// Parseo la edad
	edadInt=parseInt(edadString);

	// Planteo la condición
	if(edadInt>=18){
		alert("La persona es mayor de edad");
	}
}