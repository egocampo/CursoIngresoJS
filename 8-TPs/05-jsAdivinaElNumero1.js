/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroUsuario;
var numeroSecreto; 
var contadorIntentos=0;

function comenzar()
{
	numeroSecreto=Math.round(Math.random()*99+1);
	console.log(numeroSecreto);
}

function verificar()
{
	numeroUsuario=document.getElementById('txtIdNumero').value;
	console.log(document.getElementById("txtIdNumero").value);
	if(isNaN(numeroUsuario) || numeroUsuario!=" " || numeroUsuario==""){
		alert("Ingrese un numero valido");
	}
	else{
		numeroUsuario=parseInt(numeroUsuario);
		contadorIntentos+=1;
		document.getElementById("txtIdIntentos").value=contadorIntentos;
		if(numeroUsuario==numeroSecreto){
			alert("Usted es un ganador!!! y en solo "+contadorIntentos+" intentos");
		}
		else if(numeroUsuario<numeroSecreto){
			alert("falta...");
		}
		else{
			alert("se pasó...");
		}
	}
}