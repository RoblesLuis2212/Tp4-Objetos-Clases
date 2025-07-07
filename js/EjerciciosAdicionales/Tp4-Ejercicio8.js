//Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y
//"profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la
//clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos
//"saludar" y "despedirse"

class Persona {
  //Encapsulamiento de las propiedades
  #nombre;
  #edad;
  #profesion;
  constructor(nombre, edad, profesion) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#profesion = profesion;
  }
  //Metodos getters y setters
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
  get getProfesion() {
    return this.#profesion;
  }
  set setProfesion(nuevaProfesion) {
    this.#profesion = nuevaProfesion;
  }
  //Metodo saludar
  Saludar() {
    document.writeln(`<p>Hello! My name is ${this.#nombre}</p>`);
  }
  //Metodo despedirse
  Despedirse() {
    document.writeln(`<p>Goodbye see you👋<p/>`);
  }
}

//Programa principal
const persona = new Persona("Luis", "21", "Programador");
persona.Saludar();
persona.Despedirse();
