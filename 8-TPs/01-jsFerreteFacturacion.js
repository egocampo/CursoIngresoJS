/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precioUnoString;
	let precioDosString;
	let precioTresString;
	let precioUnoInt;
	let precioDosInt;
	let precioTresInt;
	let suma;

	precioUnoString=txtIdPrecioUno.value;
	precioDosString=txtIdPrecioDos.value;
	precioTresString=txtIdPrecioTres.value;
	precioUnoInt=parseInt(precioUnoString);
	precioDosInt=parseInt(precioDosString);
	precioTresInt=parseInt(precioTresString);

	suma=precioUnoInt+precioDosInt+precioTresInt;

	alert(suma);
}
function Promedio () 
{
	let precioUnoString;
	let precioDosString;
	let precioTresString;
	let precioUnoInt;
	let precioDosInt;
	let precioTresInt;
	let promedio;

	precioUnoString=txtIdPrecioUno.value;
	precioDosString=txtIdPrecioDos.value;
	precioTresString=txtIdPrecioTres.value;
	precioUnoInt=parseInt(precioUnoString);
	precioDosInt=parseInt(precioDosString);
	precioTresInt=parseInt(precioTresString);

	promedio=(precioUnoInt+precioDosInt+precioTresInt)/3;

	alert(promedio);
}
function PrecioFinal () 
{
	let precioUnoString;
	let precioDosString;
	let precioTresString;
	let precioUnoInt;
	let precioDosInt;
	let precioTresInt;
	let precioFinal;

	precioUnoString=txtIdPrecioUno.value;
	precioDosString=txtIdPrecioDos.value;
	precioTresString=txtIdPrecioTres.value;
	precioUnoInt=parseInt(precioUnoString);
	precioDosInt=parseInt(precioDosString);
	precioTresInt=parseInt(precioTresString);

	precioFinal=1.21*(precioUnoInt+precioDosInt+precioTresInt);

	alert(precioFinal);
}