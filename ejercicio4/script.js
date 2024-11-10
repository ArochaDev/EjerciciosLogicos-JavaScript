function arrayFilter() {
    let nums = []
    let arrayOrdenado = []
    for (let i = 0; i <= 100; i++) {
        nums.push(i);
    }
    console.log(`este es el arreglo entero ${nums}`);
    nums.filter((el) => { if (el % 3 === 0) arrayOrdenado.push(el) });
    console.log(`estos son los numeros que son multiplos del 3 ${arrayOrdenado}`)
}

arrayFilter();