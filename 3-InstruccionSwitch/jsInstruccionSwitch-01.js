function mostrar()
{
	// Declaro la variable
	var mes;

	// Tomo el valor
	mes=document.getElementById('txtIdMes').value;

	// Planteo el switch
	switch(mes){
		case "Enero":
			alert("que comiences bien el año!!!");
			break;
		case "Marzo":
			alert("a clases!!!");
			break;
		case "Julio":
			alert("se vienen las vacaciones!!!");
			break;
		case "Diciembre":
			alert("Felices fiestas!!!");
			break;
	}
}