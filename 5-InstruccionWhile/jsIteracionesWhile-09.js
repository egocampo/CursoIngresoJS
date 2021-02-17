/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	var flagPrimerNumero=1;
	do{
		numeroIngresado=prompt("Ingrese un número");
		numeroIngresado=parseInt(numeroIngresado);
		if(flagPrimerNumero==1 || numeroIngresado>numeroMaximo){
			numeroMaximo=numeroIngresado;
		}
		if(flagPrimerNumero==1 || numeroIngresado<numeroMinimo){
			numeroMinimo=numeroIngresado;
			flagPrimerNumero=0;
		}
		respuesta=prompt("desea continuar?");
	}while(respuesta=='s')
	document.getElementById('txtIdMaximo').value=numeroMaximo;
	document.getElementById('txtIdMinimo').value=numeroMinimo;
}//FIN DE LA FUNCIÓN