function mostrar()
{
	let planeta;

	planeta=prompt("Ingrese el nombre de un planeta (en minúsculas)");

	switch(planeta){
		case "tierra":
			alert("acá vivimos");
			break;
		case "mercurio":
			alert("acá hace calor");
			break;
		case "venus":
			alert("acá hace calor");
			break;
		default:
			alert("no es un planeta válido");
			break;
	}
}
