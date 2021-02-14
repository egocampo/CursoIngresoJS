function mostrar()
{
	var destinoIngresado;
	destinoIngresado=document.getElementById('txtIdDestino').value;
	switch(destinoIngresado){
		case "Bariloche":
		case "Ushuaia":
			alert("En el destino hace frío");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("En el destino hace calor");
			break;
	}
}//FIN DE LA FUNCIÓN