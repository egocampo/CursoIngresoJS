/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let fahrenheit;
	let celsius;

	fahrenheit=parseInt(document.getElementById('txtIdTemperatura').value);
	celsius=(fahrenheit-32)/1.8

	alert(`${fahrenheit.toFixed(2)} Fahrenheit son ${celsius.toFixed(2)} Celsius`);
}

function CentigradosFahrenheit () 
{
	let fahrenheit;
	let celsius;

	celsius=parseInt(document.getElementById('txtIdTemperatura').value);
	fahrenheit=celsius*1.8+32;

	alert(`${celsius.toFixed(2)} Celsius son ${fahrenheit.toFixed(2)} Fahrenheit`);
}
