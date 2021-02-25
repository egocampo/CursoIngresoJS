/*Enunciado: al presionar el botón mostrar 10 repeticiones con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	var arrayNumeros=[];
	for(var contador=1;contador<10;contador++)
	{
		arrayNumeros[contador]=contador**2;
		console.log(arrayNumeros[contador]);
		arrayNumeros.push(9999);
	}



	/*var i=1;
	for(i;i<=10;i++)
	{
		document.write(i+"<br>");
	}*/
}