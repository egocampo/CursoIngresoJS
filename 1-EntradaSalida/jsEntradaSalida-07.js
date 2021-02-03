/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{	
	let numeroUnoString;
	let numeroDosString;
	let numeroUnoInt;
	let numeroDosInt;
	let suma;

	numeroUnoString=txtIdNumeroUno.value;
	numeroDosString=txtIdNumeroDos.value;
	numeroUnoInt=parseInt(numeroUnoString);
	numeroDosInt=parseInt(numeroDosString);
	suma=numeroUnoInt+numeroDosInt;

	alert("La suma es "+suma);	
}

function restar()
{
	let numeroUnoString;
	let numeroDosString;
	let numeroUnoInt;
	let numeroDosInt;
	let resta;

	numeroUnoString=txtIdNumeroUno.value;
	numeroDosString=txtIdNumeroDos.value;
	numeroUnoInt=parseInt(numeroUnoString);
	numeroDosInt=parseInt(numeroDosString);
	resta=numeroUnoInt-numeroDosInt;

	alert("La resta es "+resta);	
}

function multiplicar()
{ 
	let numeroUnoString;
	let numeroDosString;
	let numeroUnoInt;
	let numeroDosInt;
	let multiplicacion;

	numeroUnoString=txtIdNumeroUno.value;
	numeroDosString=txtIdNumeroDos.value;
	numeroUnoInt=parseInt(numeroUnoString);
	numeroDosInt=parseInt(numeroDosString);
	multiplicacion=numeroUnoInt*numeroDosInt;

	alert("La multiplicacion es "+multiplicacion);	
}

function dividir()
{
	let numeroUnoString;
	let numeroDosString;
	let numeroUnoInt;
	let numeroDosInt;
	let divison;

	numeroUnoString=txtIdNumeroUno.value;
	numeroDosString=txtIdNumeroDos.value;
	numeroUnoInt=parseInt(numeroUnoString);
	numeroDosInt=parseInt(numeroDosString);
	division=numeroUnoInt/numeroDosInt;

	alert("La division es "+division);	
}

