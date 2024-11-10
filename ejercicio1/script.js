function operations(a = 0, b = 0, operation = "suma") {
    switch (operation) {
        case "suma":
            return console.log(a + b);
        case "resta":
            return console.log(a - b);
        case "multiplicacion":
            return console.log(a * b);
        case "division":
            return console.log(a / b);
        default:
            console.error(`la operacion ${operation} no es una opcion valida`)
    }
}

operations(1,2, "sumassss")