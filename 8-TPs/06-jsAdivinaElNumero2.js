/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/
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
	numeroUsuario=parseInt(numeroUsuario);
	contadorIntentos+=1;
	console.log(contadorIntentos);
	document.getElementById("txtIdIntentos").value=contadorIntentos;
	if(numeroUsuario==numeroSecreto){
		switch(contadorIntentos){
			case 1:
				alert("Usted es Psíquico");
				break;
			case 2:
				alert("Excelente percepción");
				break;
			case 3:
				alert("Esto es suerte");
				break;
			case 4:
				alert("Excelente técnica");
				break;
			case 5:
				alert("Usted está en la media");
				break;
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
				alert("Falta técnica");
				break;
			default:
				alert("Afortunado en el amor");
				break;
		}
	}
	else if(numeroUsuario<numeroSecreto){
		alert("falta...");
	}
	else{
		alert("se pasó...");
	}
}