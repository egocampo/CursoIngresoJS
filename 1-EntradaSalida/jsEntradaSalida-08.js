// Alumno: Gabriel Ocampo
// Division: 1°G

//***************
//**Ejercicio 3**
//***************

function SacarResto()
{
	// Declaracion de variables
	var numeroUno;
	var numeroDos;
	var suma;
	var promedio;
	var modulo;

	// Captura de datos
	numeroUno=document.getElementById("txtIdNumeroDividendo").value;
	numeroDos=document.getElementById("txtIdNumeroDivisor").value;

	// Parseo de numeros
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	// Calculos
	suma=numeroUno+numeroDos;
	promedio=suma/2
	modulo=numeroUno%numeroDos;

	// Muestro los resultados
	console.log("La suma es "+suma);
	console.log("El promedio es "+promedio);
	console.log("El módulo es "+modulo);
}
