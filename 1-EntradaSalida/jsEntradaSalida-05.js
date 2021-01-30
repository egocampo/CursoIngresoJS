/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	// reservo espacio en memoria para nombre y edad del usuario.
	let nombre, edad;

	// almaceno los datos que el usuario ingresa en los cuadros de texto del documento como nombre y edad
	nombre = document.getElementById("txtIdNombre").value;

	edad = document.getElementById("txtIdEdad").value;

	// Devuelvo la cadena solicitada incluyendo los valores de las variables nombre y edad.
	//alert("Usted se llama "+nombre+" y tiene "+edad+" años.");

	// Lo mismo pero con back tick
	alert(`Usted se llama ${nombre} y tiene ${edad} años`);
}