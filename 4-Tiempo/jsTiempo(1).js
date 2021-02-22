/*setInterval() ejecuta una función, repitiendola a intervalos de tiempo especificados
setTimeout() ejecuta una función, una única vez, después de esperar una cantidad de milisegundos*/
var miIntervalo ;
function inicio()
{	
	miIntervalo = setInterval(SegundosEnElAire, 3000);
}//FIN DE LA FUNCIÓN inicio

function SegundosEnElAire() {
    alert("Bienvenido a la UTN FRA");
}//FIN DE LA FUNCIÓN SegundosEnElAire