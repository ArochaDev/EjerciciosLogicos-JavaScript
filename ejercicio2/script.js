function ordenarArrays(a = 0, b =0) {
    let arrayDesordenado =[];
    for (let i = a; i <=b; i++) {
        if (i % 2 === 0) arrayDesordenado.push(i); 
    }
    console.log(arrayDesordenado);
}

ordenarArrays(2,16);