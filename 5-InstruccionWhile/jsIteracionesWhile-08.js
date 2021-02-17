 /*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var respuesta;
	var numeroIngresado;
	var sumaPositivos=0;
	var multiplicacionNegativos=1;
	var flagNegativos=0;
	do{
		numeroIngresado=prompt("Ingrese un número");
		numeroIngresado=parseInt(numeroIngresado);
		if(numeroIngresado>=0){
			sumaPositivos+=numeroIngresado;
		}
		else{
			multiplicacionNegativos*=numeroIngresado;
			flagNegativos=1;
		}
		respuesta=prompt("¿Desea ingresar otro número? Escriba \"s\"");
	}while(respuesta=='s');
	if(flagNegativos==0){
		multiplicacionNegativos=0;
	}
	document.getElementById('txtIdSuma').value=sumaPositivos;
	document.getElementById('txtIdProducto').value=multiplicacionNegativos;
}//FIN DE LA FUNCIÓN