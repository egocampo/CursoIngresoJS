function mostrar()
{
	var estacion;
	var destino;
	var tarifaBase=15000;
	var variacionTarifa;
	var precioFinal;
	estacion=document.getElementById('txtIdEstacion').value;
	destino=document.getElementById('txtIdDestino').value;
	switch(estacion){
		case "Invierno":
			switch(destino){
				case "Bariloche":
					variacionTarifa=20;
					break;
				case "Cataratas":
				case "Cordoba":
					variacionTarifa=-10;
					break;
				case "Mar del plata":
					variacionTarifa=-20;
					break;
			}
			break;
		case "Verano":
			switch(destino){
				case "Bariloche":
					variacionTarifa=-20;
					break;
				case "Cataratas":
				case "Cordoba":
					variacionTarifa=10;
					break;
				case "Mar del plata":
					variacionTarifa=20;
					break;
			}
			break;
		case "Otoño":
		case "Primavera":
			switch(destino){
				case "Bariloche":
					variacionTarifa=10;
					break;
				case "Cataratas":
					variacionTarifa=10;
					break;
				case "Mar del plata":
					variacionTarifa=10;
					break;
				case "Cordoba":
					variacionTarifa=0;
					break;
			}
			break;
	}
	precioFinal=tarifaBase+(tarifaBase*variacionTarifa/100);
	alert("El precio final es "+precioFinal);
}//FIN DE LA FUNCIÓN