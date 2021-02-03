function mostrar()
{
	// Declaración de variables
	var nombreUno;
	var nombreDos;
	var pesoUnoString;
	var pesoDosString;
	var pesoUnoInt;
	var pesoDosInt;
	var sumaPesos;
	var promedioPesos;

	// Toma de datos del usuario
	nombreUno=prompt("Ingrese el nombre del primer individuo");
	pesoUnoString=prompt("Ingrese el peso del primer individuo");
	nombreDos=prompt("Ingrese el nombre del segundo individuo");
	pesoDosString=prompt("Ingrese el peso del segundo individuo");

	// Parseo los datos de peso
	pesoUnoInt=parseInt(pesoUnoString);
	pesoDosInt=parseInt(pesoDosString);

	// Realizo los cálculos
	sumaPesos=pesoUnoInt+pesoDosInt;
	promedioPesos=sumaPesos/2;

	// Muestro los resultados
	alert(`Ustedes se llaman ${nombreUno} y ${nombreDos}, pesan ${pesoUnoInt} y ${pesoDosInt} kilos, que sumados son ${sumaPesos} kilos y el promedio de peso ${promedioPesos}`);

}
