/*Enunciado:
Bienvenidos (SWITCH).
pedir el ingreso de un planeta del sistema solar
Si es la tierra mostrar "acá vivimos".
Si está más cerca del sol, "acá hace más calor".
Si está más lejos del sol, "acá hace más frio".
Si no es un planeta valido informarlo.
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).*/
function mostrar()
{
	let planeta;

	planeta=prompt("Ingrese el nombre de un planeta (en minúsculas)");

	switch(planeta){
		case "tierra":
			alert("acá vivimos");
			break;
		case "venus":
		case "mercurio":
			alert("acá hace más calor");
			break;
		case "":
			alert("acá hace más frío");
			break;
		default:
			alert("no es un planeta válido");
			break;
	}
}
