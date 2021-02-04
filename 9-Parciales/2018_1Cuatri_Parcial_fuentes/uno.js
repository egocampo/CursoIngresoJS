function mostrar()
{
	let anchoString;
	let largoString;
	let anchoInt;
	let largoInt;
	let perimetro;

	anchoString=prompt("Ingrese el ancho del rectángulo");
	largoString=prompt("Ingrese el largo del rectángulo");
	anchoInt=parseInt(anchoString);
	largoInt=parseInt(largoString);

	perimetro = 2*(anchoInt+largoInt);

	alert(perimetro);
}