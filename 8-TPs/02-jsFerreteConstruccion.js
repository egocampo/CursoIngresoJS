/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	// Declaración de variables
	var largoString;
	var anchoString;
	var largoInt;
	var anchoInt;
	var perimetro;
	var alambre;

	// Toma de datos de usuario
	largoString=txtIdLargo.value;
	anchoString=txtIdAncho.value;

	// Parseo de datos
	largoInt=parseInt(largoString);
	anchoInt=parseInt(anchoString);

	// Realizo los cálculos
	perimetro=2*(largoInt+anchoInt);
	alambre=3*perimetro;

	// Muestro el resultado
	alert(`Se necesitan ${alambre.toFixed(2)} metros de alambre`)
}

function Circulo () 
{
	// Declaración de variables
	var radioString;
	var radioInt;
	var perimetro;
	var alambre;

	// Captura de datos
	radioString=txtIdRadio.value;

	// Parseo de datos
	radioInt=parseInt(radioString);

	// Calculos
	perimetro=2*Math.PI*radioInt;
	alambre=3*perimetro;

	alert(`Se necesitan ${alambre.toFixed(2)} metros de alambre`)
}

function Materiales () 
{
	// Declaración de variables
	var largoString;
	var anchoString;
	var largoInt;
	var anchoInt;
	var area;
	var cemento;
	var cal;

	// Toma de datos de usuario
	largoString=txtIdLargo.value;
	anchoString=txtIdAncho.value;

	// Parseo de datos
	largoInt=parseInt(largoString);
	anchoInt=parseInt(anchoString);

	area=largoInt*anchoInt;
	cemento=area*2;
	cal=area*3;

	alert(`Se necesitan ${cemento} bolsas de cemento y ${cal} bolsas de cal`);
}