/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	// reservo espacio para guardar el nombre del usuario y guardo el nombre que el usuario ingrsea desde prompt.
	let nombre=prompt("Ingrese su nombre");

	// copio el nombre que tengo guardado en la variable nombre dentro de la caja de texto embebida en la pagina.
	document.getElementById("txtIdNombre").value=nombre;
}