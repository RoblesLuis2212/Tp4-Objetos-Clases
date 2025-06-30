//Crea un objeto libro que tenga propiedades título, autor, año y género.
//Luego, escribe una función que reciba un array de libros y un género
//y devuelva un array con los libros de ese género usando filter.
//Usa prompt para ingresar los datos de los libros y el género.

const Libros = []; //Se declara un array vacio
//Solicitamos al usuario la cantidad de libros a cargar
const cantidad_libros = parseInt(
  prompt("Ingrese la cantida de libros a cargar: ")
);

//Utilizamos un bucle para cargar la cantidad de libros ingresado por el usuario
for (let i = 0; i < cantidad_libros; i++) {
  //Solicitamos como datos el titulo,autor,año y genero
  const titulo = prompt("Ingrese el titulo del libro: ");
  const autor = prompt("Ingrese el nombre del autor del libro: ");
  const anio = parseInt(prompt("Ingrese el año de publicacion del libro: "));
  const genero = prompt("Ingrese el genero del libro: ");
  //Creamos un objeto
  const Libro = {
    Titulo: titulo,
    Autor: autor,
    Year: anio,
    Genero: genero,
  };
  //Guardamos el objeto dentro del array
  Libros.push(Libro);
}
//Creamos esta funcion para filtrar los libros por generos
function FiltrarPorGenero(arrayLibros, generoBuscado) {
  //Retornamos un array con los libros del genero ingresado
  return arrayLibros.filter((libro) => libro.Genero === generoBuscado);
}

//Solitamos un genero al usuario
const loadGenero = prompt("Ingrese el genero de libros a buscar: ");
const librosFiltrados = FiltrarPorGenero(Libros, loadGenero); //Pasamos los datos a la funcion

//Si la longitud del array es mayor a 0 quiere decir que hay libros de ese genero
if (librosFiltrados.length > 0) {
  document.writeln(`<h2>Libros del genero: ${loadGenero}</h2>`);
  document.writeln(`<ul>`);
  //Usamos forEach para recorrer el array devuelto por la funcion y extraemos el titulo y el autor
  librosFiltrados.forEach((libro) => {
    document.writeln(`<li>${libro.Titulo} - ${libro.Autor}</li>`);
  });
  document.writeln(`</ul>`);
} else {
  alert("No se encontraron libros del genero ingresado"); //Mensaje en caso de no haber libros del genero proporcionado
}
