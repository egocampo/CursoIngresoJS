/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador=0;
	var acumulador=0;
	var respuesta;
	var numeroIngresado;
	do{
		numeroIngresado=prompt("Ingrese un número");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador+=numeroIngresado;
		contador++;
		respuesta=prompt("¿Desea ingresar otro número? Escriba \"s\"");
	}while(respuesta=='s');
	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=acumulador/contador;
}//FIN DE LA FUNCIÓN