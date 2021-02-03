/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	// Declaración de variables
	var fahrenheitString;
	var fahrenheitInt;
	var celsius;

	// Captura de datos desde caja de texto
	fahrenheitString=txtIdTemperatura.value;
	
	// Parseo de datos
	fahrenheitInt=parseInt(fahrenheitString);

	// Calculo
	celsius=(fahrenheitInt-32)/1.8

	alert(`${fahrenheitInt} Fahrenheit son ${celsius.toFixed(2)} Celsius`);
}

function CentigradosFahrenheit () 
{
	// Declaración de variables
	var celsiusString;
	var celsiusInt;
	var fahrenheit;

	// Captura de datos desde caja de texto
	celsiusString=txtIdTemperatura.value;
	
	// Parseo de datos
	celsiusInt=parseInt(celsiusString);

	// Calculo
	fahrenheit=celsiusInt*1.8+32;

	alert(`${celsiusInt} Celsius son ${fahrenheit.toFixed(2)} Fahrenheit`);
}
