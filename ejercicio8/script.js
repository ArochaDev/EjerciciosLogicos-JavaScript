//Crea 5 objetos y almacénalos en un arreglo, 
//debes hacer una función para filtrar a todas las personas que tengan el nombre Luis
// y que esa misma función también muestre cuales son mayores de edad.

class Person {
    constructor(name, lastname, age) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }
}

// Crear cuatro instancias de la clase con el nombre "Luis"
const person1 = new Person("Luis", "García", 6);
const person2 = new Person("Luis", "Martínez", 18);
const person3 = new Person("Luis", "Hernández", 21);
const person4 = new Person("Luis", "Pérez", 15);
const person5 = new Person("Juan", "Pérez", 15);
const person6 = new Person("Pedro", "Pérez", 15);
const person7 = new Person("Miguel", "Pérez", 15);


// Almacenar todas las instancias en un arreglo
const people = [person1, person2, person3, person4, person5, person6, person7];

console.log(people);

function LuisFilter() {

    console.log("PERSONAS QUE SE LLAMAN LUIS");
    people.filter((el) => {
        if (el.name === "Luis") console.log(`${el.name} ${el.lastname}`)
    })
    console.log("luises mayores de edad");
    people.filter((el) => {
        if (el.age >= "18") console.log(`${el.name} ${el.lastname} ${el.age}`)
    })
}

LuisFilter()
