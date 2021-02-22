function mostrar()
{
	var numeroIngresado;
	var cantidadDivisores=0;
	numeroIngresado=prompt("Ingrese un número");
	while(isNaN(parseInt(numeroIngresado))){
		numeroIngresado=prompt("Por favor: Ingrese un número válido");
	}
	numeroIngresado=parseInt(numeroIngresado);
	for(var i=2;i<numeroIngresado;i++){
		if(numeroIngresado%i==0){
			cantidadDivisores++;
		}
	}
	if(cantidadDivisores!=0 || numeroIngresado<=1){
		console.log("El número "+numeroIngresado+" NO es primo");
	}
	else{
		console.log("El número "+numeroIngresado+" es primo");
	}
}//FIN DE LA FUNCIÓN