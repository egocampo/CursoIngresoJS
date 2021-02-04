function mostrar()
{
	// Declaro la variable
	var numeroAleatorio;

	// Genero el número aleatorio entre 0 y 1, lo multiplico por 10 para que quede entre 0 y 10 y le sumo uno para que quede entre 1 y 11
	numeroAleatorio=Math.random()*10+1;

	// Imprimo el resultado por alert redondeado a entero para que quede un entero entre 1 y 10
	alert(parseInt(numeroAleatorio));
}