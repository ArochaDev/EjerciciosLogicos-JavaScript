//Realizar una tabla de multiplicación de un número (a) desde 0 hasta x, pero que no se muestre la multiplicación de a * 5.

function multiplicadorSelectivo(a = 0, x = 12) {
    for (let i = a; i < x; i++) {
        if (i != 5) console.log(`${i} X ${x} = ${i * a}`)
    }
}

multiplicadorSelectivo(4, 15)