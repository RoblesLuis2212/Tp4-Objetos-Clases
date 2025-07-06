//Crear una clase libro que contenga al menos las siguientes propiedades
//ISBN,Titulo,Autor,Numero de paginas
//crear sus respectivos metodos get y set correspondientes para cada propiedad
//crear el metodo mostrarLibro() para mostrar la informacion relativa al libro con el siguiente formato
//"El libro xxx con ISBN xxx creado por el autor xxx tiene paginas xxx"
//crear al menos dos objetos libros y utilizar el metodo mostrarLibro()
//por ultimo, indicar cual de los dos objetos "libros" tiene mas paginas.

//Creamos la clase libro
class Libro {
  //Encapsulamiento de las propiedades
  #ISBN;
  #titulo;
  #autor;
  #numPaginas;
  //Definicion del metodo constructor
  constructor(ISBN, titulo, autor, numPaginas) {
    this.#ISBN = ISBN;
    this.#titulo = titulo;
    this.#autor = autor;
    this.#numPaginas = numPaginas;
  }
  //Metodos getters y setters para acceder a las propiedades de la clase
  get getISBN() {
    return this.#ISBN;
  }
  set setISBN(nuevoIsbn) {
    this.#ISBN = nuevoIsbn;
  }
  get getitulo() {
    return this.#titulo;
  }
  set setTitulo(nuevoTitulo) {
    this.#titulo = nuevoTitulo;
  }
  get getAutor() {
    return this.#autor;
  }
  set setAutor(nuevoAutor) {
    this.#autor = nuevoAutor;
  }
  get getNumPages() {
    return this.#numPaginas;
  }
  set setNumPages(newNumberPages) {
    this.#numPaginas = newNumberPages;
  }
  //Metodo para mostrar informacion acerca del libro
  mostrarLibro() {
    return document.writeln(
      `<p>El libro <strong>${this.#titulo}</strong> con ISBN <strong>${
        this.#ISBN
      } </strong>creado por el autor <strong>${
        this.#autor
      }</strong> tiene <strong>${this.#numPaginas}</strong> páginas</p>`
    );
  }
}

//Uso de la clase
const libro1 = new Libro(
  "12345678910111213",
  "La Venganza De La Vaca",
  "Sergio Aguirre",
  128
); //Primer objeto "Libro"

libro1.mostrarLibro(); //Invocamos al metodo mostrar libro para mostrar la informacion al usuario
const libro2 = new Libro(
  "87984616165401",
  "Harry Potter y La Piedra Filosofal",
  "J.k Rowling",
  368
);
libro2.mostrarLibro(); //Informacion del segundo libro

//Verificamos cual de los dos libros tiene más páginas
if (libro1.getNumPages > libro2.getNumPages) {
  document.writeln(
    `<p>El libro <strong>${libro1.getitulo}</strong> tiene mas páginas</p>`
  );
} else {
  document.writeln(
    `<p>El libro <strong>${libro2.getitulo}</strong> tiene mas páginas</p>`
  );
}
