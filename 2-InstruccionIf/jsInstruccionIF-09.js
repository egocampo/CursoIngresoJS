function mostrar()
{
	// Declaro la variable
	var numeroAleatorio;
	var numeroEntero;

	// Genero el número aleatorio entre 0 y 1
	numeroAleatorio=Math.random();
	
	if(numeroAleatorio>.9){
		numeroEntero=10
	}
	else if(numeroAleatorio>.8){
		numeroEntero=9
	}
	else if(numeroAleatorio>.7){
		numeroEntero=8
	}
	else if(numeroAleatorio>.6){
		numeroEntero=7
	}
	else if(numeroAleatorio>.5){
		numeroEntero=6
	}
	else if(numeroAleatorio>.4){
		numeroEntero=5
	}
	else if(numeroAleatorio>.3){
		numeroEntero=4
	}
	else if(numeroAleatorio>.2){
		numeroEntero=3
	}
	else if(numeroAleatorio>.1){
		numeroEntero=2
	}
	else{
		numeroEntero=1
	}

	// Imprimo el resultado por alert redondeado a entero para que quede un entero entre 1 y 10
	alert(numeroEntero);
}