/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre;
	nombre = document.getElementById("txtIdNombre").value;  //"document" llama al documento que invoca a la funcion. getElementById busca el id, y con .value trabajo sobre el valor de dicha posición.
	alert(nombre);

}


