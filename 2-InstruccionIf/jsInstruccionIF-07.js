function mostrar()
{
	// Declaro las variables
	var edadString;
	var edadInt;
	var estadoCivil;

	// Capturo los datos desde las cajas de texto por ID
	edadString=txtIdEdad.value;
	estadoCivil=document.getElementById('estadoCivil').value; // Si pongo estadoCivil.value genera error por confundir ID con variable.

	// Parseo la edad
	edadInt=parseInt(edadString);

	// Planteo el condicional
	if(edadInt<18 && estadoCivil != "Soltero"){
		alert("Es muy pequeño para NO ser soltero");
	}
}