function mostrar()
{
	// Declaración de variables
	var nombre;
	var localidad;

	// Capturo los datos ingresados por el usuario en los cuadros de texto
	nombre=elNombre.value;
	localidad=laLocalidad.value;

	// Devuelvo el mensaje pedido
	alert(`Usted es ${nombre} y vive en la localidad de ${localidad}`);
}