/*Enunciado: al presionar el botón repetir hasta que utilizamos 'BREAK'.*/
function mostrar()
{
	for(var i=0;i<10;i++)
	{
		document.write(i+"<BR>")
		if(i==4)
		{

			break;
		}
	}
}//FIN DE LA FUNCIÓN