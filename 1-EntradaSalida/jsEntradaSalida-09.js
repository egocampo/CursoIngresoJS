/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let sueldoConAumento;

	// Capturo el sueldo desde el cuadro txtIdSueldo
	sueldo=parseFloat(document.getElementById('txtIdSueldo').value);

	// Calculo el sueldo con aumento del 10%
	sueldoConAumento = sueldo * 1.1;

	// Muestro el sueldo con aumento, redondeado con toFixed a dos decimales, en el cuadro txtIdResultado
	document.getElementById('txtIdResultado').value=sueldoConAumento.toFixed(2);


}
