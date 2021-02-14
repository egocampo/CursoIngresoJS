function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	estacionIngresada=document.getElementById('txtIdEstacion').value;
	destinoIngresado=document.getElementById('txtIdDestino').value;
	console.log(estacionIngresada+" "+destinoIngresado);
	switch(estacionIngresada){
		case "Invierno":
			switch(destinoIngresado){
				case "Bariloche":
					alert("se viaja");
					break;
				default:
					alert("No se viaja");
					break;
			}
			break;
		case "Verano":
			switch(destinoIngresado){
				case "Mar del plata":
				case "Cataratas":
					alert("se viaja");
					break;
				default:
					alert("No se viaja");
					break;
			}
			break;
		case "Otoño":
			alert("se viaja");
			break;
		case "Primavera":
			switch(destinoIngresado){
				case "Bariloche":
					alert("No se viaja");
					break;
				default:
					alert("se viaja");
					break;
			}
			break;
	}
}//FIN DE LA FUNCIÓN