
function mostrar()
{
	let ancho;
	let largo;
	let perimetro;

	ancho=parseInt(prompt("Ingrese el ancho del rectángulo"));
	largo=parseInt(prompt("Ingrese el largo del rectángulo"));

	perimetro = 2*(ancho+largo);

	alert(perimetro);
}