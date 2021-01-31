function mostrar()
{
	let nota;
	nota=parseInt(Math.random()*10+1);

	alert(nota);

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