function mostrar()
{
	//tomo el mes
	var mes = document.getElementById('txtIdMes').value;

	switch(mes){
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Tiene 30 dias");
			break;
		case "Febrero":
			alert("Tiene 28 dias");
			break;
		default:
			alert("Tiene 31 dias");
	}
}//FIN DE LA FUNCIÓN