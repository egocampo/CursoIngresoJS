/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	// declarar variables
	var numeroIngresado;
	var sumaNegativos=0;
	var sumaPositivos=0;
	var cantidadNegativos=0;
	var cantidadPositivos=0;
	var cantidadCeros=0;
	var cantidadPares=0;
	var promedioPositivos=0;
	var promedioNegativos=0;
	var diferenciaPositivosNegativos;
	var continuar;

	//crear bucle do-while
	do{
		// pedir numero
		numeroIngresado=prompt("Ingrese un número");
		numeroIngresado=parseInt(numeroIngresado);
		
		if(numeroIngresado>=0){ //evaluar si es positivo
			cantidadPositivos++;
			sumaPositivos+=numeroIngresado;
		}
		else if(numeroIngresado==0){ //evaluar si es cero
				cantidadCeros+=1;
		}
		else{ //evaluar si es negativo
			cantidadNegativos++;
			sumaNegativos+=numeroIngresado;
		}
		if(numeroIngresado%2==0){ //evaluar si es par
			cantidadPares++;
		}
		continuar=prompt("¿Desea ingresar otro número? \"s\"");
	} while(continuar=="s");
	if(cantidadPositivos!=0){
		promedioPositivos=sumaPositivos/cantidadPositivos;
	}
	if(cantidadNegativos!=0){
		promedioNegativos=sumaNegativos/cantidadNegativos;
	}
	diferenciaPositivosNegativos=cantidadPositivos-cantidadNegativos;
		console.log("Cant Positivos: "+cantidadPositivos);
		console.log("Suma Positivos: "+sumaPositivos);
		console.log("Prom Positivos: "+promedioPositivos);
		console.log("Cant Negativos: "+cantidadNegativos);
		console.log("Suma Negativos: "+sumaNegativos);
		console.log("Prom Negativos: "+promedioNegativos);
		console.log("Cant de Ceros:  "+cantidadCeros);
		console.log("Cant de Pares:  "+cantidadPares);
		console.log("Dif Posit Nega: "+diferenciaPositivosNegativos);
}//FIN DE LA FUNCIÓN