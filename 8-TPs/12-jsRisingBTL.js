/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos
nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente
(para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada; //Edad, entre 18 y 90 años inclusive.
 	var sexoIngresado; //Sexo, “M” para masculino y “F” para femenino
 	var estadoCivilIngresado; //Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
 	var sueldoBruto; //Sueldo bruto, no menor a 8000.
 	var numeroLegajo; //Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
 	var nacionalidad; //Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.

 	// ingreso y validación de edad
 	edadIngresada=prompt("Ingrese la edad (18-90)");
 	edadIngresada=parseInt(edadIngresada);
 	console.log(isNaN(parseInt(numeroLegajo)));
 	while(edadIngresada<18 || edadIngresada>90 || (isNaN(edadIngresada))){
 		edadIngresada=prompt("Edad fuera de rango. Ingrese una edad válida (18-90).");
 		edadIngresada=parseInt(edadIngresada);
 	}
 	// ingreso y validación de sexo
 	sexoIngresado=prompt("Ingrese el sexo (M/F)");
 	while(sexoIngresado!="M" && sexoIngresado!="F"){
 		sexoIngresado=prompt("Sexo incorrecto. Ingrese un sexo válido (M/F).");
  	}
  	// ingreso y validación de estado civil
  	estadoCivilIngresado=prompt("Ingrese el estado civil (1-Soltero, 2-Casados, 3-Divorciados, 4-Viudos)");
 	estadoCivilIngresado=parseInt(estadoCivilIngresado);
 	while(estadoCivilIngresado!=1 && estadoCivilIngresado!=2 && estadoCivilIngresado!=3 && estadoCivilIngresado!=4 || isNaN(estadoCivilIngresado)){
 		estadoCivilIngresado=prompt("Estado civil incorrecto. Ingrese un estado civil válido (1-Soltero, 2-Casados, 3-Divorciados, 4-Viudos)");
 		estadoCivilIngresado=parseInt(estadoCivilIngresado);
 	}
 	// ingreso y validación de sueldo bruto
 	sueldoBruto=prompt("Ingrese el sueldo bruto (mayor a 8000)");
 	sueldoBruto=parseInt(sueldoBruto);
 	while(sueldoBruto<8000 || (isNaN(sueldoBruto))){
 		sueldoBruto=prompt("Sueldo menor al mínimo. Ingrese un sueldo válido (mayor a 8000).");
 		sueldoBruto=parseInt(sueldoBruto);
 	}
 	// ingreso y validación de legajo
 	numeroLegajo=prompt("Ingrese el número de legajo (4 cifras, sin ceros a la izquierda)");
 	numeroLegajo=parseInt(numeroLegajo);
 	while(numeroLegajo<1000 || numeroLegajo>9999 || isNaN(numeroLegajo)){
 		numeroLegajo=prompt("Número de legajo fuera de rango. Ingrese el número de legajo (4 cifras, sin ceros a la izquierda)");
 		numeroLegajo=parseInt(numeroLegajo);
 	}
 	 // ingreso y validación de nacionalidad
 	nacionalidad=prompt("Ingrese la nacionalidad (A-Argentinos, E-Extranjeros, N-Nacionalizados).");
 	while(nacionalidad!="A" && nacionalidad!="E" && nacionalidad!="N"){
 		nacionalidad=prompt("Nacionalidad incorrecta. Ingrese la nacionalidad (A-Argentinos, E-Extranjeros, N-Nacionalizados).");
  	}
  	
 	// Muestra de datos validados
 	document.getElementById('txtIdEdad').value=edadIngresada;
 	document.getElementById('txtIdSexo').value=sexoIngresado;
 	document.getElementById('txtIdEstadoCivil').value=estadoCivilIngresado;
 	document.getElementById('txtIdSueldo').value=sueldoBruto;
 	document.getElementById('txtIdLegajo').value=numeroLegajo;
 	document.getElementById('txtIdNacionalidad').value=nacionalidad;
}