/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldoString;
	let sueldoInt;
	let porcentajeAumento=10;
	let aumento;
	let sueldoConAumento;

	// Capturo el sueldo desde el cuadro txtIdSueldo
	sueldoString=txtIdSueldo.value;
	sueldoInt=parseInt(sueldoString);

	// Calculo el valor del aumento con el porcentaje dado
	aumento=sueldoInt*porcentajeAumento/100;

	// Calculo el sueldo con aumento
	sueldoConAumento = sueldoInt + aumento ;

	// Muestro el sueldo con aumento, redondeado con toFixed a dos decimales, en el cuadro txtIdResultado
	txtIdResultado.value=sueldoConAumento.toFixed(2);
}
