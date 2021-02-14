function mostrar()
{
	// Declaro la variable
	var nota;

	// Genero un numero aleatorio entre 0 y 1; lo multiplico por max-min y le sumo 1. Lo redondeo.
	nota=Math.round(Math.random()*9+1);

	// Planteo el condicional
	if(nota>=9){
		alert("Excelente: "+nota);
	}
	else if(nota>=4){
		alert("Aprobó: "+nota);
	}
	else{
		alert("Vamos, la próxima se puede: "+nota);
	}
}