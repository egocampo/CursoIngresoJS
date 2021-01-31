function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById('txtIdEdad').value);

	// Tomo el mismo enunciado para el if, pero ahora pido que la condicion sea falsa para indicar que la persona no esta en ese rango etario.
	if((edad>=13 && edad<=17)==false){
		alert("La persona NO es adolescente");
	}

}