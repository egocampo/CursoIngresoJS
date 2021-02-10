/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let dividendoString;
	let divisorString;
	let divisorInt;
	let dividendoInt;
	let resto;

	dividendoString=txtIdNumeroDividendo.value;
	divisorString=txtIdNumeroDivisor.value;
	dividendoInt=parseInt(dividendoString);
	divisorInt=parseInt(divisorString);

	resto = dividendoInt % divisorInt;

	alert(`El resto entre ${dividendoInt} y ${divisorInt} es ${resto}`)
}
