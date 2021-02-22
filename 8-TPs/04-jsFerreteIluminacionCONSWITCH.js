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
 	var precioSinDescuento;
 	var precioConDescuento;
 	var porcentajeIngresosBrutos;
 	var precioBaseIngresosBrutos;
 	var precioFinal;
 	var montoIIBB;
 	var porcentajeDescuento;

 	// Asigno valores fijos.
 	precioSinDescuento=35;
 	porcentajeIngresosBrutos=10;
 	precioBaseIngresosBrutos=120;

 	// Tomo datos
 	cantidadLamparas=document.getElementById('txtIdCantidad').value;
 	marcaLamparas=document.getElementById('Marca').value;

 	// Parseo datos
 	cantidadLamparas=parseInt(cantidadLamparas);

	switch(cantidadLamparas){
		case 5:
			switch(marcaLamparas){
				case "ArgentinaLuz":
					porcentajeDescuento=40;
					break;
				default:
					porcentajeDescuento=30;
					break;
			}
			break;
		case 4:
			switch(marcaLamparas){
				case "ArgentinaLuz":
				case "FelipeLamparas":
					porcentajeDescuento=25;
					break;
				default:
					porcentajeDescuento=20;
					break;
			}
			break;
		case 3:
			switch(marcaLamparas){
				case "ArgentinaLuz":
					porcentajeDescuento=15;
					break;
				case "FelipeLamparas":
					porcentajeDescuento=10;
					break;
				default:
					porcentajeDescuento=5;
					break;
			}
			break;
		case 2:
		case 1:
			porcentajeDescuento=0;
			break;
		default:
			porcentajeDescuento=50;
			break;
	}
	precioConDescuento=precioSinDescuento-(precioSinDescuento*porcentajeDescuento/100);
	precioFinal=precioConDescuento*cantidadLamparas;
 	// Devuelvo el precio final
 	if(precioFinal>precioBaseIngresosBrutos){
 		montoIIBB=precioFinal*porcentajeIngresosBrutos/100;
 		precioFinal=precioFinal+montoIIBB;
 		alert("IIBB Usted pagó "+montoIIBB);
 	}
 	document.getElementById('txtIdprecioDescuento').value=precioFinal;
}