//Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y
//el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato"
//que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente,
//crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus
//métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado.

//Creacion de la clase animal
class Animal {
  //Encapsulamiento de propiedades
  #nombre;
  #edad;
  constructor(nombre, edad) {
    this.#nombre = nombre;
    this.#edad = edad;
  }
  //Metodos getters y setters para acceder a las propiedades
  get getNombre() {
    return this.#nombre;
  }
  set setNombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }
  get getEdad() {
    return this.#edad;
  }
  set setEdad(nuevaEdad) {
    this.#edad = nuevaEdad;
  }
  //Metodo emitir sonido de la clase padre
  EmitirSonido() {
    document.writeln(`<p>Haciendo sonido!</p>`);
  }
}

//Clase derivada
class Perro extends Animal {
  //Agregamos y encapsulamos un nuevo atributo
  #raza;
  constructor(nombre, edad, raza) {
    super(nombre, edad);
    this.#raza = raza;
  }
  get getRaza() {
    return this.#raza;
  }
  set setRaza(nuevaRaza) {
    this.#raza = nuevaRaza;
  }
  //Aplicamos polimorfismo modificando el metodo de la clase padre
  EmitirSonido() {
    document.writeln(`El Perro ${this.getNombre} dice guau!!`);
  }
}
//Clase gato
class Gato extends Animal {
  //Agregamos como metodo extra el color
  #color;
  constructor(nombre, edad, color) {
    super(nombre, edad);
    this.#color = color;
  }
  get getColor() {
    return this.#color;
  }
  set setColor(nuevoColor) {
    this.#color = nuevoColor;
  }
  //Aplicacion del polimorfismo
  EmitirSonido() {
    document.writeln(`<p>El gato ${this.getNombre} dice miau!!!</p>`);
  }
}

//Programa principal
const animal1 = new Perro("Milo", "3", "Salchicha");
animal1.EmitirSonido();

const animal2 = new Gato("Pana", "2", "Mestizo");
animal2.EmitirSonido();
