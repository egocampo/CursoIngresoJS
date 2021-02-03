/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldoString;
	let sueldoInt;
	let sueldoConAumento;

	// Capturo el sueldo desde el cuadro txtIdSueldo
	sueldoString=txtIdSueldo.value;
	sueldoInt=parseInt(sueldoString);

	// Calculo el sueldo con aumento del 10%
	sueldoConAumento = sueldoInt * 1.1;

	// Muestro el sueldo con aumento, redondeado con toFixed a dos decimales, en el cuadro txtIdResultado
	txtIdResultado.value=sueldoConAumento.toFixed(2);
}
