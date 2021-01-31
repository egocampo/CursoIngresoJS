function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById('txtIdEdad').value);

	if(edad>=18){
		alert("La persona es mayor de edad");
	}
	else if(edad>=13){
		alert("La persona es adolescente");
	}
	else {
		alert("La persona es menor de edad");
	}
}