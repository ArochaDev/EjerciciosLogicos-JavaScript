function numProvider() {
    let num = Math.floor(Math.random() * (1000 - 1)+1);
    console.log(`el numero generado aleatoriamente es ${num}`);
    let mitad = num / 2;
    let doble = num * 2;
    let raizCuadrada = Math.sqrt(num);
    console.log(`la mitad de ${num} es ${mitad}, el doble de ${num} es ${doble} y la raiz cuadrada de ${num} es ${raizCuadrada}`)
}

numProvider()