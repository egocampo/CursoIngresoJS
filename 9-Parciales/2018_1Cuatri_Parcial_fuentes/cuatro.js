function mostrar()
{
	let numeroUno;
	let numeroDos;
	let numeroUnoParseado;
	let numeroDosParseado;
	let suma;

	numeroUno=prompt("Ingrese el primer número");
	numeroDos=prompt("Ingrese el segundo número");
	numeroUnoParseado=parseInt(numeroUno);
	numeroDosParseado=parseInt(numeroDos);

	if (numeroUnoParseado==numeroDosParseado){
		alert(numeroUno+numeroDos);
	}
	else if(numeroUnoParseado>numeroDosParseado){
		alert(numeroUnoParseado-numeroDosParseado);
	}
	else{
		suma=numeroUnoParseado+numeroDosParseado;
		if(suma>10){
			alert("La suma es "+suma+" y superó el 10");
		}
		else{
			alert(suma);
		}
	}
}
