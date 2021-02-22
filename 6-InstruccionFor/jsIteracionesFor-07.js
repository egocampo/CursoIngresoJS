function mostrar()
{
	var numeroIngresado;
	var cantidadDivisores=0;
	numeroIngresado=prompt("Ingrese un número");
	numeroIngresado=parseInt(numeroIngresado);
	for(var i=1;i<=numeroIngresado;i++){
		if(numeroIngresado%i==0){
			console.log(i);
			cantidadDivisores++;
		}
	}
	console.log("Cantidad de divisores: "+cantidadDivisores);
}//FIN DE LA FUNCIÓN