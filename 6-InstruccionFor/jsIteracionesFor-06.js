function mostrar()
{
	var numeroIngresado;
	var cantidadPares=0;
	numeroIngresado=parseInt(prompt("Ingrse un número"));
	for(var i=1;i<=numeroIngresado;i++){
		if(i%2==0){
			console.log(i);
			cantidadPares++;
		}
	}
	console.log("Cantidad de pares: "+cantidadPares);
}//FIN DE LA FUNCIÓN