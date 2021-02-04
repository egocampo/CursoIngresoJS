function mostrar()
{
	// Declaro las variables
	var edadString;
	var edadInt;

	// Pido y capturo el dato edad ingresado por el usuario
	edadString=txtIdEdad.value;

	// Parseo la edad
	edadInt=parseInt(edadString);

	// Resuelvo el condicional
	if(edadInt==15){
		alert("Niña bonita");
	}
}