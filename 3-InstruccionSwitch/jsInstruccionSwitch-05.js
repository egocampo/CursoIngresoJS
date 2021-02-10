function mostrar()
{
	// Declaro variable
	var horaDelDia;

	// Capturo la hora
	horaDelDia = document.getElementById('txtIdHora').value;

	// Parseo la hora
	horaDelDia=parseInt(horaDelDia);
	
	switch(horaDelDia){
		case 7:
			alert("Es de mañana");
			break;
		case 8:
			alert("Es de mañana");
			break;
		case 9:
			alert("Es de mañana");
			break;
		case 10:
			alert("Es de mañana");
			break;
		case 11:
			alert("Es de mañana");
			break;
	}
}//FIN DE LA FUNCIÓN