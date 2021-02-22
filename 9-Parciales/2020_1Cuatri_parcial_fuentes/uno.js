
function mostrar()
{
	// Defino variables
	var productoTipo;
	var productoPrecio;
	var productoCantidad;
	var productoMarca;
	var productoFabricante;
	var acumuladorJabon=0;
	var acumuladorBarbijo=0;
	var acumuladorAlcohol=0;
	var contadorJabon=0;
	var contadorBarbijo=0;
	var contadorAlcohol=0;
	var precioBaratoAlcohol=300;
	var cantidadBaratoAlcohol;
	var fabricanteBaratoAlcohol;

	// bucle 5 repeticiones
	for(var i=0;i<1;i++){
	// Tomo datos y valido
		// tipo ("barbijo", "jabón", "alcohol")
		productoTipo=prompt("Ingrese el tipo de producto: \"barbijo\", \"jabón\", \"alcohol\" ");
		while(productoTipo!="barbijo" && productoTipo!="jabón" && productoTipo!="alcohol"){
			productoTipo=prompt("Tipo inválido: Ingrese el tipo de producto: \"barbijo\", \"jabón\", \"alcohol\" ");
		}
		// precio (entre 100 y 300)
		productoPrecio=prompt("Ingrese el precio del producto ($100-$300)");
		while(productoPrecio<100 || productoPrecio>300 || isNaN(productoPrecio)){
			productoPrecio=prompt("Precio inválido: Ingrese el precio del producto ($100-$300)");
		}
		// cantidad (entre 1 y 1000)
		productoCantidad=prompt("Ingrese la cantidad del producto (1-1000)");
		while(productoCantidad<1 || productoCantidad>1000 || isNaN(productoCantidad)){
			productoCantidad=prompt("Cantidad inválida: Ingrese la cantidad del producto (1-1000)");
		}
		// marca
		productoMarca=prompt("Ingrese la marca del producto");
		// fabricante
		productoFabricante=prompt("Ingrese el fabricante del producto");
		
		switch(productoTipo){
			case "barbijo":
				acumuladorBarbijo+=productoCantidad;
				contadorBarbijo++;
				break;
			case "jabón":
				acumuladorJabon+=productoCantidad;
				contadorJabon++;
				break;
			case "alcohol":			
				acumuladorAlcohol+=productoCantidad; // c) Cuántas unidades de jabones hay en total
				contadorAlcohol++;
				if(productoPrecio<precioBaratoAlcohol){ // a) Del más barato de los alcoholes, la cantidad de unidades y el fabricante
					precioBaratoAlcohol=productoPrecio;
					cantidadBaratoAlcohol=productoCantidad;
					fabricanteBaratoAlcohol=productoFabricante;
				}
				break;
		}
	}
	// b) Del tipo con mas unidades, el promedio por compra
	if(acumuladorBarbijo>acumuladorJabon>acumuladorAlcohol){

	}
	console.log("Cantidad de jabones: "+acumuladorJabon);
}