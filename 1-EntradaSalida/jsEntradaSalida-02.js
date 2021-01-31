/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	// Reservo espacio en memoria para almacenar el nombre
	let nombre;

	// Pido al usuario que ingrese su nombre mediante un prompt y lo almaceno en la variable nombre.
	nombre=prompt("Ingrese su nombre");

	// Imprimo el nombre guardado en la variable nombre mediante un alert.
	alert(nombre);
}