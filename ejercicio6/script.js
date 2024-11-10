function hoursCalculator() {
    let cumple = new Date("4 oct 2025");
    let hoy = new Date();
    let diasRestantes = Math.floor((cumple.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24))
    console.log(`tu cumpleaños es el ${cumple} y faltan ${diasRestantes} para que llegue`)
}

hoursCalculator()