function mostrar()
{
	var edadString;
	var edadInt;
	var estadoCivil;

	// Obtengo los datos edad y estado civil de los cuadros de texto por los ID
	edadString=document.getElementById('txtIdEdad').value;
	estadoCivil=document.getElementById('estadoCivil').value;

	// Parseo la edad
	edadInt=parseInt(edadString);

	// Planteo el condicional
	if(edadInt<18 && estadoCivil != "Soltero"){
	}
	else if(edadInt>=18 && estadoCivil=="Soltero"){
		alert("Es soltero y no es menor");
	}
}