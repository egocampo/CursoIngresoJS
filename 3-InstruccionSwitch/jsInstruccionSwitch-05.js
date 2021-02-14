function mostrar()
{
	var horaDelDia; // Declaro variable
	horaDelDia=document.getElementById('txtIdHora').value; // Capturo la hora
	horaDelDia=parseInt(horaDelDia); // Parseo la hora
	switch(horaDelDia){
		case 7:
		case 8:
		case 9:
		case 10:;
		case 11:
			alert("Es de mañana");
			break;
	}
}//FIN DE LA FUNCIÓN