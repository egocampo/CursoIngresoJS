function mostrar()
{
	// Declaro la variable
	var nota;

	// Genero un numero aleatorio entre 0 y 1; lo multiplico por 10 y le sumo 1 para obtener un numero entre 1 y 11; y lo parseo para que quede un numero entre 1 y 10.
	nota=parseInt(Math.random()*10+1);

	// Planteo el condicional
	if(nota==9 || nota==10){
		alert("Excelente");
	}
	else if(nota<9 && nota>=4){
		alert("Aprobó");
	}
	else if(nota<4 && nota>0){
		alert("Vamos, la próxima se puede");
	}
}