function mostrar()
{
	var numeroAleatorio;
	var minimo=1;
	var maximo=10;

	numeroAleatorio=Math.round(Math.random()*(maximo-minimo)+minimo);

	alert(numeroAleatorio);
}