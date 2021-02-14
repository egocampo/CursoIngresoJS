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
 	const PRECIOUNIDAD=35;
 	const PORCENTAJEIIBB=10;
 	const PRECIOBASEIIBB=120;
 	var cantidadLamparas;
 	var marcaLamparas;
 	var porcentajeDescuento;
 	var precioUnidadConDescuento;
 	var montoIIBB;

 	// Tomo datos
 	cantidadLamparas=document.getElementById('txtIdCantidad').value;
 	marcaLamparas=document.getElementById('Marca').value;

 	// Parseo datos
 	cantidadLamparas=parseInt(cantidadLamparas);

 	if(cantidadLamparas>=6){
 		porcentajeDescuento=50;
 	}
 	else if(cantidadLamparas==5){
 		if(marcaLamparas=="ArgentinaLuz"){
 			porcentajeDescuento=40;
 		}
 		else{
 			porcentajeDescuento=30;
 		}
 	}
 	else if(cantidadLamparas==4){
 		if(cantidadLamparas=="ArgentinaLuz" || cantidadLamparas=="FelipeLamparas"){
 			porcentajeDescuento=25;
 		}
 		else{
 			porcentajeDescuento=20;
 		}
 	}
 	else if(cantidadLamparas==3){
 		if(marcaLamparas=="ArgentinaLuz"){
 			porcentajeDescuento=15;
 		}
 		else if(marcaLamparas=="FelipeLamparas"){
 			porcentajeDescuento=10;
 		}
 		else{
 			porcentajeDescuento=5;
 		}
 	}
 	else{
 		porcentajeDescuento=0
 	}

 	precioUnidadConDescuento=PRECIOUNIDAD-(PRECIOUNIDAD*porcentajeDescuento/100);

 	document.getElementById('txtIdprecioDescuento').value=precioUnidadConDescuento;

 	precioFinal=precioUnidadConDescuento*cantidadLamparas;

 	if(precioFinal>PRECIOBASEIIBB){
 		montoIIBB=precioFinal*PORCENTAJEIIBB/100;
 		alert("IIBB Usted pagó "+montoIIBB);
 	}
 }