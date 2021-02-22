function mostrar()
{
	var numeroIngresado;
	for(;;){
		numeroIngresado=prompt("Ingrese un número");
		numeroIngresado=parseInt(numeroIngresado);
		if(numeroIngresado==9){
			break;
		}
	}
}