function mostrar()
{
	var contador=0;
	var acumulador=0;
	var numeroIngresado;
	while(contador<5){
		numeroIngresado=prompt("Ingrese un número");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador+=numeroIngresado;
		contador++;
	}
	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=acumulador/5;
}//FIN DE LA FUNCIÓN