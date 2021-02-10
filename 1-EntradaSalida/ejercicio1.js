// Alumno: Gabriel Ocampo
// Division: 1°G

//***************
//**Ejercicio 1**
//***************

// Declaracion de variables
var descripcionDelProducto;
var precioDelProducto;
var precioAumentado;
var porcentajeAumento;

// Captura de datos
descripcionDelProducto=prompt("Ingrese descripción del producto");
precioDelProducto=document.GetElementById(txtIdPrecio).value; // Suponiendo que txtIdPrecio es el ID de la caja de texto del html.

// Parseo de precio
precioDelProducto=parseInt(precioDelProducto);

// Realizo el calculo solicitado
porcentajeAumento=30;
precioAumentado=precioDelProducto+(precioDelProducto*porcentajeAumento/100);

// Muestro el resultado
alert(descripcionDelProducto+" "+precioAumentado);


//***************
//**Ejercicio 2**
//***************
function mostrarAumento()
{
	// Defino variables
	var nombreProducto;
	var precioProducto;
	var porcentajeDescuento;
	var precioConDescuento;

	// Capturo datos
	nombreProducto=prompt("Ingrese el nombre del producto");
	precioProducto=document.getElementById('txtIdImporte').value;
	porcentajeDescuento=prompt("Ingrese el porcentaje de descuento");

	// Parseo numeros
	precioProducto=parseInt(precioProducto);
	porcentajeDescuento=parseInt(porcentajeDescuento);

	// Calculo
	precioConDescuento=precioProducto-(precioProducto*porcentajeDescuento/100);

	// Muestro resultado
	document.getElementById('txtIdResultado').value="usted compró un "+nombreProducto+" con "+porcentajeDescuento+" % de descuento, el precio final es "+precioConDescuento;
}