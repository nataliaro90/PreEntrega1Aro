// REALIZADO CON WHILE E IF

/*let option;

while (option != 0) {
    option = prompt ("Bienvenido!! Vamos a calcular el Area y Perímetro de la figura geometrica que elijas: \n 1. Cuadrado. \n 2. Rectangulo. \n 3. Triangulo. \n 0.Salir")

    if (option == 1) {      
        let lado = Number (prompt ("Ingrese la longitud del lado del cuadrado: "));
        let perimetroCuadrado = lado * 4 ;
        let areaCuadrado = lado * lado;
        alert ("El Perimetro del Cuadrado es de" + perimetroCuadrado + "cm.");
        alert ("El Area del Cuadrado es de" + areaCuadrado + "cm2");
    } else if (option == 2) {      
        let base = Number (prompt ("Ingrese la base del rectangulo: "));
        let altura = Number (prompt ("Ingrese la altura del rectandulo: "));
        let perimetroRectangulo = (2 * base) + (2 * altura) ;
        let areaRectangulo = base * altura;
        alert ("El Perimetro del Rectangulo es de " + perimetroRectangulo + "cm.");
        alert("El Area del Rectangulo es de " + areaRectangulo + "cm2"); 
        } else if (option == 3) {
            let base = Number (prompt ("Ingrese la base del triangulo: "));
            let lado1 = Number (prompt ("Ingrese la longitud de un lado del triangulo: "));
            let lado2 = Number (prompt ("Ingrese la longitud del otro lado del triangulo: "));
            let altura = Number (prompt ("Ingrese la altura del triangulo: "));
            let perimetroTriangulo = base + lado1 + lado2;
            let areaTriangulo = (base * altura) / 2;
            alert ("El Perimetro del Triangulo es de " + perimetroTriangulo + "cm.");
            alert("El Area del Triangulo es de " + areaTriangulo + "cm2");
            } else if (option == 0) {
                alert ("Gracias por utilizar nuestro calculador de perimetros y areas, ¡Vuelva Pronto!");
                }
            else {
                alert ("No has ingresado una opcion valida.")
            }
}*/

// MISMO PROYECTO CON SWITH

let option;

while (option != 0) {
    option = prompt ("Bienvenido!! Vamos a calcular el Area y Perímetro de la figura geometrica que elijas: \n 1. Cuadrado. \n 2. Rectangulo. \n 3. Triangulo. \n 0.Salir")
    switch (option) {
        case '1': 
            let lado = Number (prompt ("Ingrese la longitud del lado del cuadrado: "));
            let perimetroCuadrado = lado * 4 ;
            let areaCuadrado = lado * lado;
            alert ("El Perimetro del Cuadrado es de" + perimetroCuadrado + "cm.");
            alert ("El Area del Cuadrado es de" + areaCuadrado + "cm2");
            break;
        case '2': 
            let base1 = Number (prompt ("Ingrese la base del rectangulo: "));
            let altura1 = Number (prompt ("Ingrese la altura del rectandulo: "));
            let perimetroRectangulo = (2 * base1) + (2 * altura1) ;
            let areaRectangulo = base1 * altura1;
            alert ("El Perimetro del Rectangulo es de " + perimetroRectangulo + "cm.");
            alert("El Area del Rectangulo es de " + areaRectangulo + "cm2");
            break;
        case '3':
            let base2 = Number (prompt ("Ingrese la base del triangulo: "));
            let lado1 = Number (prompt ("Ingrese la longitud de un lado del triangulo: "));
            let lado2 = Number (prompt ("Ingrese la longitud del otro lado del triangulo: "));
            let altura2 = Number (prompt ("Ingrese la altura del triangulo: "));
            let perimetroTriangulo = base2 + lado1 + lado2;
            let areaTriangulo = (base2 * altura2) / 2;
            alert ("El Perimetro del Triangulo es de " + perimetroTriangulo + "cm.");
            alert("El Area del Triangulo es de " + areaTriangulo + "cm2");
            break;
        case '0':
            alert ("Gracias por utilizar nuestro calculador de perimetros y areas, ¡Vuelva Pronto!");
        default:
            alert ("No has ingresado una opcion valida.");
            break;
    }
}




