/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	// Defino variables
 	var cantidadLamparas;
 	var marcaLamparas;
 	var precioLamparasPorUnidad;
 	var precioSinDescuento;
 	var precioConDescuento;
 	var porcentajeIngresosBrutos;
 	var precioBaseIngresosBrutos;
 	var precioFinal;

 	// Asigno valores fijos.
 	precioLamparasPorUnidad=35;
 	porcentajeIngresosBrutos=10;
 	precioBaseIngresosBrutos=120;

 	// Tomo datos
 	cantidadLamparas=document.getElementById('txtIdCantidad').value;
 	marcaLamparas=document.getElementById('Marca').value;

 	// Parseo datos
 	cantidadLamparas=parseInt(cantidadLamparas);

 	// Calculo el precio sin descuento
 	precioSinDescuento=cantidadLamparas*precioLamparasPorUnidad;
/*
 	// Planteo el condicional principal
 	if(cantidadLamparas>=6)
 	{
 		precioConDescuento=precioSinDescuento-(precioSinDescuento*50/100);
 	}
 	else if(cantidadLamparas==5)
 	{
 		if(marcaLamparas=="ArgentinaLuz")0
 		{
 			precioConDescuento=precioSinDescuento-(precioSinDescuento*40/100);
 		}
 		else
 		{
 			precioConDescuento=precioSinDescuento-(precioSinDescuento*30/100);
 		}
 	}
 	else if(cantidadLamparas==4)
 	{
 		if(marcaLamparas=="ArgentinaLuz" || marcaLamparas=="FelipeLamparas")
 		{
 			precioConDescuento=precioSinDescuento-(precioSinDescuento*25/100);
 		}
 		else{
 			precioConDescuento=precioSinDescuento-(precioSinDescuento*20/100);
 		}
 	}
  	else if(cantidadLamparas==3)
 	{
 		if(marcaLamparas=="ArgentinaLuz")
 		{
 			precioConDescuento=precioSinDescuento-(precioSinDescuento*15/100);
 		}
 		else if(marcaLamparas=="FelipeLamparas")
 		{
 			precioConDescuento=precioSinDescuento-(precioSinDescuento*10/100);
 		}
 		else{
 			precioConDescuento=precioSinDescuento-(precioSinDescuento*5/100);
 		}
 	}
 	
 	// Calculo si pasa el valor de piso de IIBB y le sumo el porcentaje
 	if(precioConDescuento>precioBaseIngresosBrutos)
 	{
 		precioFinal=precioConDescuento+(precioConDescuento*porcentajeIngresosBrutos/100);
 	}
 	else
 	{
 		precioFinal=precioConDescuento;
 	}
*/
 	if(cantidadLamparas>=6){
 		precioConDescuento=precioSinDescuento-(precioSinDescuento*50/100);
 	}
 	else{
 		switch(cantidadLamparas){
 		case 5:
 			if(marcaLamparas=="ArgentinaLuz"){
 				precioConDescuento=precioSinDescuento-(precioSinDescuento*40/100);
 			}
 			else{
 				precioConDescuento=precioSinDescuento-(precioSinDescuento*30/100);
 			}
 			break;
 		case 4:
 			if(marcaLamparas=="ArgentinaLuz" || marcaLamparas=="FelipeLamparas"){
 				precioConDescuento=precioSinDescuento-(precioSinDescuento*25/100);
 			}
 			else{
 				precioConDescuento=precioSinDescuento-(precioSinDescuento*20/100);
 			}
 			break;
 		case 3:
 			if(marcaLamparas=="ArgentinaLuz"){
 				precioConDescuento=precioSinDescuento-(precioSinDescuento*15/100);
 			}
 			else if(marcaLamparas=="FelipeLamparas"){
 				precioConDescuento=precioSinDescuento-(precioSinDescuento*10/100);
 			}
 			else{
 				precioConDescuento=precioSinDescuento-(precioSinDescuento*5/100);
 			}
 			break;
 		default:
 			precioConDescuento=precioSinDescuento;
 			break;
 		}
 	}
 	if(precioConDescuento>precioBaseIngresosBrutos){
 		precioFinal = precioConDescuento+(precioConDescuento*porcentajeIngresosBrutos)/100;
 	}
 	else{
 		precioFinal=precioConDescuento;
 	}
 	// Devuelvo el precio final
 	document.getElementById('txtIdprecioDescuento').value=precioFinal;
}